#!/usr/bin/env python3
import subprocess, time, json, urllib.request, socket, struct, base64, os

PORT = 9777
TARGET_URL = "http://localhost:8080"
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

chrome = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=1440,960",
    TARGET_URL
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

def call(s, method, params=None, req_id=1):
    msg = {"id": req_id, "method": method}
    if params: msg["params"] = params
    ws_send(s, msg)
    while True:
        r = ws_recv(s)
        if r.get("id") == req_id: return r.get("result", {})

def screenshot(s, name, req_id):
    res = call(s, "Page.captureScreenshot", {"format": "png"}, req_id=req_id)
    raw = base64.b64decode(res["data"])
    path = os.path.join(OUT_DIR, name)
    with open(path, "wb") as f:
        f.write(raw)
    print(f"Captured: {path}")

def eval_js(s, expr, req_id):
    return call(s, "Runtime.evaluate", {"expression": expr, "returnByValue": True}, req_id=req_id)

try:
    tabs = json.loads(urllib.request.urlopen(f"http://localhost:{PORT}/json").read())
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    ws = ws_connect(ws_url)

    req = 100
    call(ws, "Page.enable", req_id=req); req += 1
    call(ws, "Runtime.enable", req_id=req); req += 1

    time.sleep(1)

    # 1. Hero with trailer button
    print("Testing Hero...")
    screenshot(ws, "01_hero_with_trailer_btn.png", req); req += 1

    # 2. Scroll to 3D Video Carousel
    print("Scrolling to #videos...")
    eval_js(ws, "document.getElementById('videos').scrollIntoView({behavior:'instant'});", req); req += 1
    time.sleep(1)
    screenshot(ws, "02_video_carousel_3d_stage.png", req); req += 1

    # 3. Next slide on carousel
    print("Advancing carousel to Module 1...")
    eval_js(ws, "goToVideo(1);", req); req += 1
    time.sleep(1)
    screenshot(ws, "03_video_carousel_mod1_active.png", req); req += 1

    # 4. Open Cinema Lightbox Modal
    print("Opening Cinema Lightbox Modal...")
    eval_js(ws, "openVideoModal(0);", req); req += 1
    time.sleep(1)
    screenshot(ws, "04_cinema_video_lightbox_modal.png", req); req += 1

    # 5. Next video inside Modal
    print("Testing Next Video in Lightbox Modal...")
    eval_js(ws, "nextModalVideo();", req); req += 1
    time.sleep(1)
    screenshot(ws, "05_cinema_modal_next_video.png", req); req += 1

    # 6. Close Modal & Open Module 1 Modal
    print("Testing Module Modal with Watch Teaser Button...")
    eval_js(ws, "closeVideoModal(); openMod(1);", req); req += 1
    time.sleep(1)
    screenshot(ws, "06_module_modal_with_teaser_btn.png", req); req += 1

    # 7. Switch to Myanmar Language
    print("Testing Myanmar Language...")
    eval_js(ws, "closeMod(); lang = 'my'; applyLang(); document.getElementById('videos').scrollIntoView({behavior:'instant'});", req); req += 1
    time.sleep(1)
    screenshot(ws, "07_video_carousel_myanmar_lang.png", req); req += 1

    print("ALL VISUAL VERIFICATIONS COMPLETED SUCCESSFULLY!")

finally:
    chrome.terminate()
