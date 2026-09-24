#!/usr/bin/env python3
import subprocess, time, json, urllib.request, base64, os

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9222
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)

# Launch Chrome with remote debugging
proc = subprocess.Popen([
    CHROME,
    "--headless",
    "--disable-gpu",
    f"--remote-debugging-port={PORT}",
    "--window-size=1440,900",
    "file:///Users/richardsmacmini/.gemini/antigravity-ide/scratch/the-parenting-project-myanmar/parenting-project-myanmar.html"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

time.sleep(2)

try:
    # Get WebSocket Debugger URL
    with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json") as resp:
        tabs = json.loads(resp.read().decode())
    
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    print(f"Connected to Chrome: {ws_url}")
    
    # We can use python's websocket-client if available, or write a tiny websocket frame sender in pure python!
    import socket, struct, hashlib, os

    # Simple RFC 6455 websocket client in pure python
    def ws_connect(url):
        # url: ws://127.0.0.1:9222/devtools/page/...
        host_port = url.split("://")[1].split("/")[0]
        host, port = host_port.split(":")
        path = "/" + "/".join(url.split("://")[1].split("/")[1:])
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.connect((host, int(port)))
        key = base64.b64encode(os.urandom(16)).decode()
        req = (
            f"GET {path} HTTP/1.1\r\n"
            f"Host: {host}:{port}\r\n"
            f"Upgrade: websocket\r\n"
            f"Connection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\n"
            f"Sec-WebSocket-Version: 13\r\n\r\n"
        )
        s.sendall(req.encode())
        res = s.recv(4096).decode(errors='ignore')
        if "101 Switching Protocols" not in res:
            raise Exception("Handshake failed")
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
        return json.loads(data.decode())

    def call_cdp(s, req_id, method, params=None):
        msg = {"id": req_id, "method": method, "params": params or {}}
        ws_send(s, msg)
        while True:
            resp = ws_recv(s)
            if resp.get("id") == req_id:
                return resp

    ws = ws_connect(ws_url)
    req_id = 1

    def capture(name, selector=None, scroll_y=None):
        global req_id
        if scroll_y is not None:
            call_cdp(ws, req_id, "Runtime.evaluate", {"expression": f"window.scrollTo(0, {scroll_y})"})
            req_id += 1
            time.sleep(0.5)
        elif selector:
            call_cdp(ws, req_id, "Runtime.evaluate", {"expression": f"document.querySelector('{selector}').scrollIntoView()"})
            req_id += 1
            time.sleep(0.5)
        
        res = call_cdp(ws, req_id, "Page.captureScreenshot", {"format": "png"})
        req_id += 1
        img_bytes = base64.b64decode(res["result"]["data"])
        out_path = os.path.join(OUT_DIR, f"{name}.png")
        with open(out_path, "wb") as f:
            f.write(img_bytes)
        print(f"Captured {out_path} ({len(img_bytes)} bytes)")

    # Capture key sections
    capture("01_hero", scroll_y=0)
    capture("02_modules", selector="#modules")
    capture("03_quiz", selector="#quiz")
    capture("04_church", selector="#church")
    capture("05_about", selector="#about")
    capture("06_host", selector=".host-sec")
    capture("07_testimonials", selector="#testimonials")
    capture("08_faq", selector="#faq")
    capture("09_footer", selector="footer")

    ws.close()

finally:
    proc.terminate()
    print("Done captures.")
