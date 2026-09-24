#!/usr/bin/env python3
import subprocess, time, json, urllib.request, socket, struct, base64, os

PORT = 9890
FILE_URL = "http://localhost:8080/register.html"
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

proc = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=1440,960",
    FILE_URL
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

time.sleep(2)

def ws_connect(ws_url):
    s = socket.socket()
    s.connect(('localhost', PORT))
    path = '/' + '/'.join(ws_url.split('://')[1].split('/')[1:])
    key = base64.b64encode(os.urandom(16)).decode()
    req = (
        f'GET {path} HTTP/1.1\r\n'
        f'Host: localhost:{PORT}\r\n'
        f'Upgrade: websocket\r\n'
        f'Connection: Upgrade\r\n'
        f'Sec-WebSocket-Key: {key}\r\n'
        f'Sec-WebSocket-Version: 13\r\n\r\n'
    )
    s.sendall(req.encode())
    res = s.recv(4096).decode(errors='ignore')
    if '101' not in res: raise Exception(f'Handshake failed: {res}')
    return s

def ws_send(s, data):
    payload = json.dumps(data).encode()
    length = len(payload)
    mask_key = os.urandom(4)
    header = bytearray([0x81])
    if length <= 125:
        header.append(0x80 | length)
    elif length <= 65535:
        header.append(0x80 | 126)
        header.extend(struct.pack("!H", length))
    else:
        header.append(0x80 | 127)
        header.extend(struct.pack("!Q", length))
    header.extend(mask_key)
    masked = bytearray(b ^ mask_key[i % 4] for i, b in enumerate(payload))
    s.sendall(header + masked)

def ws_recv(s):
    def recv_exact(n):
        buf = b""
        while len(buf) < n:
            chunk = s.recv(n - len(buf))
            if not chunk: raise EOFError
            buf += chunk
        return buf
    b1, b2 = struct.unpack("!BB", recv_exact(2))
    length = b2 & 0x7f
    if length == 126: length = struct.unpack("!H", recv_exact(2))[0]
    elif length == 127: length = struct.unpack("!Q", recv_exact(8))[0]
    data = recv_exact(length)
    return json.loads(data.decode('utf-8', errors='ignore'))

req_id = 1
def call_cdp(s, method, params=None):
    global req_id
    this_id = req_id
    req_id += 1
    ws_send(s, {"id": this_id, "method": method, "params": params or {}})
    while True:
        resp = ws_recv(s)
        if resp.get("id") == this_id:
            return resp

try:
    with urllib.request.urlopen(f'http://localhost:{PORT}/json') as r:
        tabs = json.loads(r.read().decode())
    page_tab = [t for t in tabs if t.get('type') == 'page'][0]
    ws = ws_connect(page_tab['webSocketDebuggerUrl'])

    call_cdp(ws, "Runtime.enable")
    call_cdp(ws, "Page.enable")
    time.sleep(1)

    def shoot(name):
        res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
        png = base64.b64decode(res["result"]["data"])
        path = os.path.join(OUT_DIR, f"{name}.png")
        with open(path, "wb") as f:
            f.write(png)
        print(f"Captured {name}.png ({len(png)} bytes)")

    # 1. Step 1 English
    shoot("register_01_step1_en")

    # 2. Fill Step 1 and Go to Step 2
    call_cdp(ws, "Runtime.evaluate", {"expression": """
        document.getElementById('church-name').value = 'Yangon Grace Baptist Church';
        document.getElementById('church-city').value = 'Yangon';
        document.getElementById('church-denom').value = 'Myanmar Baptist Convention';
        goToStep(2);
    """})
    time.sleep(0.5)
    shoot("register_02_step2_en")

    # 3. Fill Step 2 and Submit
    call_cdp(ws, "Runtime.evaluate", {"expression": """
        document.getElementById('coord-name').value = 'Pastor Thang Lian';
        document.getElementById('coord-email').value = 'thang.lian@gracechurch.org';
        document.getElementById('coord-phone').value = '+95 9 789 123 456';
        document.getElementById('coord-pass').value = 'Grace2026!';
        submitRegistration();
    """})
    time.sleep(1.2)
    shoot("register_03_success_en")

    # 4. Reload in Myanmar Mode
    call_cdp(ws, "Page.navigate", {"url": "http://localhost:8080/register.html?lang=my"})
    time.sleep(1.5)
    shoot("register_04_step1_my")

    # 5. Advance to Step 2 in Myanmar Mode
    call_cdp(ws, "Runtime.evaluate", {"expression": """
        document.getElementById('church-name').value = 'မန္တလေး ဧမာနွေလ နှစ်ခြင်းအသင်းတော်';
        document.getElementById('church-city').value = 'မန္တလေးမြို့';
        goToStep(2);
    """})
    time.sleep(0.5)
    shoot("register_05_step2_my")

    print("ALL REGISTRATION SCREENSHOTS CAPTURED!")

finally:
    proc.terminate()
