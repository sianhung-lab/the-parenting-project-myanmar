#!/usr/bin/env python3
"""Visual audit and test for Option 1 In-Place Bottom Sheet Download Drawer."""
import subprocess, time, json, urllib.request, socket, struct, base64, os

PORT = 9777
DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a"
os.makedirs(OUT_DIR, exist_ok=True)

# Launch Chrome with mobile emulation window size
proc = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=412,892",
    "http://localhost:8080"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

time.sleep(2.5)

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

    call_cdp(ws, "Runtime.enable")
    call_cdp(ws, "Page.enable")
    call_cdp(ws, "Emulation.setDeviceMetricsOverride", {
        "width": 412,
        "height": 892,
        "deviceScaleFactor": 2.0,
        "mobile": True
    })

    # Navigate to index.html
    call_cdp(ws, "Page.navigate", {"url": "http://localhost:8080/index.html"})
    time.sleep(2.0)

    # Unlock gate and log in as demo user to ensure we are directly on Cinema screen
    call_cdp(ws, "Runtime.evaluate", {
        "expression": """
            // Set storage flags
            localStorage.setItem('pp_unlocked', 'true');
            localStorage.setItem('pp_registered', 'true');
            localStorage.setItem('pp_current_user', JSON.stringify({name: 'Daw Khin Khin', phone: '09790001122'}));
            
            // If on standalone login page, click the quick demo button
            const demoBtn = document.querySelector('.btn-demo, .inapp-demo-btn');
            if (demoBtn) demoBtn.click();

            // If modal exists, close it
            const modal = document.getElementById('inapp-login-modal');
            if (modal) modal.style.display = 'none';

            // Ensure Cinema tab is active and visible
            if (typeof switchAppTab === 'function') switchAppTab('cinema');
            if (typeof selectMobileModuleVideo === 'function') selectMobileModuleVideo(1);
        """
    })
    time.sleep(1.5)

    # Screenshot 1: Cinema screen with the new [📥 ဒေါင်းလုဒ်] button visible in the caption card
    res1 = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    s1_path = os.path.join(OUT_DIR, "option1_cinema_stage.png")
    with open(s1_path, "wb") as f:
        f.write(base64.b64decode(res1["result"]["data"]))
    print("✅ Screen 1 saved:", s1_path)

    # Trigger Option 1: Open the bottom sheet drawer in-place for Episode 1
    call_cdp(ws, "Runtime.evaluate", {
        "expression": """
            openDownloadOptionsSheet(1);
            toggleRememberQualityChoice();
        """
    })
    time.sleep(0.6) # Allow smooth slide-up animation

    # Screenshot 2: Bottom Sheet Drawer Open showing the 2 options and Remember Choice toggle
    res2 = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    s2_path = os.path.join(OUT_DIR, "option1_bottom_sheet_open.png")
    with open(s2_path, "wb") as f:
        f.write(base64.b64decode(res2["result"]["data"]))
    print("✅ Screen 2 saved:", s2_path)

    # Click HD quality card
    call_cdp(ws, "Runtime.evaluate", {
        "expression": "selectDownloadOptionQuality('hd');"
    })
    time.sleep(0.3)

    # Screenshot 3: Bottom Sheet with HD Selected
    res3 = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    s3_path = os.path.join(OUT_DIR, "option1_bottom_sheet_hd_selected.png")
    with open(s3_path, "wb") as f:
        f.write(base64.b64decode(res3["result"]["data"]))
    print("✅ Screen 3 saved:", s3_path)

    # Click Start Download button from sheet and demonstrate floating progress capsule
    call_cdp(ws, "Runtime.evaluate", {
        "expression": """
            closeDownloadOptionsSheet();
            showDownloadFloatingCapsule(1, 48, 'saver');
            updateCinemaDownloadButton(1, 'downloading', 48);
        """
    })
    time.sleep(0.5)

    # Screenshot 4: User stays on Cinema stage, Bottom Sheet closes, Floating Progress Capsule appears at bottom!
    res4 = call_cdp(ws, "Page.captureScreenshot", {"format": "png"})
    s4_path = os.path.join(OUT_DIR, "option1_floating_capsule_active.png")
    with open(s4_path, "wb") as f:
        f.write(base64.b64decode(res4["result"]["data"]))
    print("✅ Screen 4 saved:", s4_path)

    ws.close()
    print("\n🎉 All 4 verification screenshots captured successfully!")

finally:
    proc.terminate()
