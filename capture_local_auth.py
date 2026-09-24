import subprocess
import time
import json
import urllib.request
import base64
import os
import websocket

PORT = 9244
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_DIR = "/tmp/chrome_auth_test_dir_2"
LOCAL_HTML = "/Users/richardsmacmini/.gemini/antigravity-ide/scratch/the-parenting-project-myanmar/index.html"

os.system(f"rm -rf {USER_DIR}")

proc = subprocess.Popen([
    CHROME_BIN,
    "--headless=new",
    f"--remote-debugging-port={PORT}",
    "--remote-allow-origins=*",
    f"--user-data-dir={USER_DIR}",
    "--window-size=430,932",
    "--no-first-run",
    "--no-default-browser-check",
    "about:blank"
])

time.sleep(2.0)

class ChromeClient:
    def __init__(self, port):
        tabs = json.loads(urllib.request.urlopen(f"http://127.0.0.1:{port}/json", timeout=5).read())
        self.ws = websocket.create_connection(tabs[0]["webSocketDebuggerUrl"])
        self.msg_id = 0

    def send(self, method, params=None):
        self.msg_id += 1
        payload = {"id": self.msg_id, "method": method, "params": params or {}}
        self.ws.send(json.dumps(payload))
        while True:
            r = json.loads(self.ws.recv())
            if r.get("id") == self.msg_id:
                return r.get("result", {})

    def close(self):
        self.ws.close()

try:
    client = ChromeClient(PORT)
    client.send("Page.enable")
    client.send("Runtime.enable")

    print("1. Navigating to local index.html?mode=app...")
    client.send("Page.navigate", {"url": f"file://{LOCAL_HTML}?mode=app"})
    time.sleep(2.0)

    print("2. Opening In-App Login Modal (Sign In Tab)...")
    client.send("Runtime.evaluate", {"expression": "openInAppLoginModal('signin')"})
    time.sleep(1.0)
    
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_inapp_signin_modal.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("✅ Captured auth_inapp_signin_modal.png")

    print("3. Switching to In-App Register Tab...")
    client.send("Runtime.evaluate", {"expression": "switchInAppAuthTab('register')"})
    time.sleep(1.0)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_inapp_register_modal.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("✅ Captured auth_inapp_register_modal.png")

    print("4. Opening Settings Modal (Guest State)...")
    client.send("Runtime.evaluate", {"expression": "closeInAppLoginModal(); openSettingsModal();"})
    time.sleep(1.0)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_settings_modal_guest.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("✅ Captured auth_settings_modal_guest.png")

    print("5. Performing In-App Login and checking Cinema...")
    client.send("Runtime.evaluate", {"expression": "closeSettingsModal(); quickDemoLogin();"})
    time.sleep(1.2)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_logged_in_cinema.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("✅ Captured auth_logged_in_cinema.png")

    print("6. Opening Settings Modal in Logged-In State (Member State)...")
    client.send("Runtime.evaluate", {"expression": "openSettingsModal();"})
    time.sleep(1.0)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_settings_modal_member.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("✅ Captured auth_settings_modal_member.png")

    client.close()
    print("🎉 All captures completed successfully!")
finally:
    proc.terminate()
    try:
        proc.wait(timeout=3)
    except:
        proc.kill()
