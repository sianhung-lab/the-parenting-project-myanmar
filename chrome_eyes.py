#!/usr/bin/env python3
"""Antigravity Eyes & Ears: Autonomous Chrome Visual Inspector & Tester"""
import subprocess, time, json, urllib.request, socket, struct, base64, os

PORT = 9666
DIR = os.path.dirname(os.path.abspath(__file__))
FILE_URL = f"file://{DIR}/parenting-project-myanmar.html"
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

# Launch Chrome
proc = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=1440,900",
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
    if '101' not in res:
        raise Exception(f'Handshake failed: {res}')
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
    if length == 126:
        length = struct.unpack("!H", recv_exact(2))[0]
    elif length == 127:
        length = struct.unpack("!Q", recv_exact(8))[0]
    is_masked = bool(b2 & 0x80)
    mask = recv_exact(4) if is_masked else None
    data = recv_exact(length)
    if mask:
        data = bytes(b ^ mask[i % 4] for i, b in enumerate(data))
    return json.loads(data.decode(errors='ignore'))

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

    # Enable Runtime and Log
    call_cdp(ws, "Runtime.enable")
    call_cdp(ws, "Page.enable")

    # Evaluate any errors or check document title
    eval_res = call_cdp(ws, "Runtime.evaluate", {"expression": "document.title"})
    print("Page Title:", eval_res.get("result", {}).get("result", {}).get("value"))

    # Check Module count rendered in DOM
    mod_count = call_cdp(ws, "Runtime.evaluate", {"expression": "document.querySelectorAll('.mod-card').length"})
    print("Rendered Module Cards:", mod_count.get("result", {}).get("result", {}).get("value"))

    # 1. Full page screenshot with captureBeyondViewport
    full_res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    if "result" in full_res:
        full_png = base64.b64decode(full_res["result"]["data"])
        with open(os.path.join(OUT_DIR, "00_viewport_hero.png"), "wb") as f:
            f.write(full_png)
        print(f"Captured 00_viewport_hero.png ({len(full_png)} bytes)")
    else:
        print("captureScreenshot response:", full_res)

    # 2. Section helper
    def shoot_section(name, selector):
        call_cdp(ws, "Runtime.evaluate", {"expression": f"document.querySelector('{selector}').scrollIntoView({{behavior: 'instant'}});"})
        time.sleep(0.3)
        res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
        png = base64.b64decode(res["result"]["data"])
        path = os.path.join(OUT_DIR, f"{name}.png")
        with open(path, "wb") as f:
            f.write(png)
        print(f"Captured {name}.png")

    shoot_section("01_hero", "#home")
    shoot_section("02_modules", "#modules")
    shoot_section("03_quiz", "#quiz")
    shoot_section("04_church", "#church")
    shoot_section("05_about", "#about")
    shoot_section("06_host", ".host-sec")
    shoot_section("07_testimonials", "#testimonials")
    shoot_section("08_faq", "#faq")
    shoot_section("09_footer", "footer")

    # 3. Interactive test: Open Module 1 modal
    call_cdp(ws, "Runtime.evaluate", {"expression": "openMod(1)"})
    time.sleep(0.4)
    res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "10_module_modal_open.png"), "wb") as f:
        f.write(base64.b64decode(res["result"]["data"]))
    print("Captured 10_module_modal_open.png")
    call_cdp(ws, "Runtime.evaluate", {"expression": "closeMod()"})
    time.sleep(0.2)

    # 4. Interactive test: Start Quiz
    call_cdp(ws, "Runtime.evaluate", {"expression": "document.querySelector('#quiz').scrollIntoView({behavior: 'instant'}); startQuiz();"})
    time.sleep(0.4)
    res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "11_quiz_active.png"), "wb") as f:
        f.write(base64.b64decode(res["result"]["data"]))
    print("Captured 11_quiz_active.png")

    # 5. Interactive test: Switch to Myanmar (Burmese)
    call_cdp(ws, "Runtime.evaluate", {"expression": "document.querySelector('#home').scrollIntoView({behavior: 'instant'}); document.getElementById('lang-btn').click();"})
    time.sleep(0.4)
    res = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "12_myanmar_burmese_mode.png"), "wb") as f:
        f.write(base64.b64decode(res["result"]["data"]))
    print("Captured 12_myanmar_burmese_mode.png")

    ws.close()
    print("\n✅ All visual audits and captures completed successfully!")

finally:
    proc.terminate()
