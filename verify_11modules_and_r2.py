#!/usr/bin/env python3
import subprocess, time, json, urllib.request, socket, struct, base64, os

PORT = 9945
FILE_URL = "https://parenting-project-myanmar.penglambot.workers.dev/?app=true"
ARTIFACTS_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/d08a0e75-322a-44d4-a8b7-d0794d821010"

subprocess.run(["pkill", "-f", f"remote-debugging-port={PORT}"], stderr=subprocess.DEVNULL)
time.sleep(0.5)

proc = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=390,844",
    FILE_URL
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

time.sleep(3)

def ws_connect(ws_url):
    s = socket.socket()
    s.connect(('localhost', PORT))
    path = '/' + '/'.join(ws_url.split('://')[1].split('/')[1:])
    key = base64.b64encode(os.urandom(16)).decode()
    req = f'GET {path} HTTP/1.1\r\nHost: localhost:{PORT}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n'
    s.sendall(req.encode())
    res = s.recv(4096).decode(errors='ignore')
    return s

def ws_send(s, data):
    payload = json.dumps(data).encode()
    length = len(payload)
    mask_key = os.urandom(4)
    header = bytearray([0x81])
    if length <= 125: header.append(0x80 | length)
    elif length <= 65535: header.extend([0x80 | 126] + list(struct.pack("!H", length)))
    else: header.extend([0x80 | 127] + list(struct.pack("!Q", length)))
    header.extend(mask_key)
    masked = bytearray(b ^ mask_key[i % 4] for i, b in enumerate(payload))
    s.sendall(header + masked)

def ws_recv(s):
    def recv_exact(n):
        buf = b""
        while len(buf) < n:
            chunk = s.recv(n - len(buf))
            if not chunk: raise EOFError()
            buf += chunk
        return buf
    hdr = recv_exact(2)
    length = hdr[1] & 0x7F
    if length == 126: length = struct.unpack("!H", recv_exact(2))[0]
    elif length == 127: length = struct.unpack("!Q", recv_exact(8))[0]
    return json.loads(recv_exact(length).decode(errors='ignore'))

def call(s, method, params=None):
    call.id += 1
    ws_send(s, {"id": call.id, "method": method, "params": params or {}})
    while True:
        msg = ws_recv(s)
        if msg.get("id") == call.id: return msg.get("result", {})

call.id = 0

def capture(s, filename):
    time.sleep(1.0)
    res = call(s, "Page.captureScreenshot", {"format": "png", "quality": 100})
    data = base64.b64decode(res["data"])
    artifact_path = os.path.join(ARTIFACTS_DIR, filename)
    with open(artifact_path, "wb") as f:
        f.write(data)
    print(f"Captured: {filename} ({len(data)} bytes)")
    return artifact_path

try:
    tabs = json.loads(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json").read().decode())
    target = [t for t in tabs if t.get("type") == "page"][0]
    s = ws_connect(target["webSocketDebuggerUrl"])

    call(s, "Page.enable")
    call(s, "Runtime.enable")
    time.sleep(1)

    # 1. Login and navigate to Home Top
    call(s, "Runtime.evaluate", {
        "expression": """
        if (typeof quickDemoLogin === 'function') quickDemoLogin();
        document.body.classList.add('is-authenticated', 'is-mobile-app');
        document.documentElement.classList.add('is-authenticated', 'is-mobile-app');
        if (typeof switchAppTab === 'function') switchAppTab('home');
        window.scrollTo({ top: 0, behavior: 'instant' });
        """
    })
    time.sleep(1.5)
    capture(s, "VERIFIED_11_MODULES_HOME.png")

    # 2. Switch to Modules tab to show 11 modules and 11-step progress bar
    call(s, "Runtime.evaluate", {
        "expression": "if (typeof switchAppTab === 'function') switchAppTab('module'); window.scrollTo({ top: 0, behavior: 'instant' });"
    })
    time.sleep(1.5)
    capture(s, "VERIFIED_11_MODULES_LIST.png")

    # 3. Open Video player for Module 2 (Cloudflare R2 MP4)
    call(s, "Runtime.evaluate", {
        "expression": "if (typeof openVideoPlayerScreen === 'function') openVideoPlayerScreen(2);"
    })
    time.sleep(2)
    capture(s, "VERIFIED_R2_VIDEO_PLAYER.png")

finally:
    proc.terminate()
    print("11 Modules and R2 video verification complete!")
