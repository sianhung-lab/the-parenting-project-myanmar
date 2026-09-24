import subprocess
import time
import json
import urllib.request
import base64
import os
import websocket

PORT = 9233
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_DIR = "/tmp/chrome_auth_test_dir"

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

time.sleep(2.5)

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

    # 1. Navigate to live mobile app mode
    client.send("Page.navigate", {"url": "https://parenting-project-myanmar.penglambot.workers.dev/?mode=app"})
    time.sleep(3.5)

    # 2. Open in-app login modal (Sign In tab)
    client.send("Runtime.evaluate", {"expression": "openInAppLoginModal('signin')"})
    time.sleep(1.2)
    
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_inapp_signin_modal.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("Captured auth_inapp_signin_modal.png")

    # 3. Switch to Register tab in-app
    client.send("Runtime.evaluate", {"expression": "switchInAppAuthTab('register')"})
    time.sleep(1.2)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_inapp_register_modal.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("Captured auth_inapp_register_modal.png")

    # 4. Close login modal and open Settings modal to verify guest action buttons
    client.send("Runtime.evaluate", {"expression": "closeInAppLoginModal(); openSettingsModal();"})
    time.sleep(1.2)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_settings_modal_guest.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("Captured auth_settings_modal_guest.png")

    # 5. Perform Quick Demo Login and check unlocked cinema UI
    client.send("Runtime.evaluate", {"expression": "closeSettingsModal(); quickDemoLogin();"})
    time.sleep(1.5)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_logged_in_cinema.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("Captured auth_logged_in_cinema.png")

    # 6. Reopen Settings modal in logged-in state to verify Sign Out button
    client.send("Runtime.evaluate", {"expression": "openSettingsModal();"})
    time.sleep(1.2)

    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open("auth_settings_modal_member.png", "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("Captured auth_settings_modal_member.png")

    client.close()
finally:
    proc.terminate()
    try:
        proc.wait(timeout=3)
    except:
        proc.kill()
