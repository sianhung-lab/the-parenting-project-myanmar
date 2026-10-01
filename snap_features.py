#!/usr/bin/env python3
import subprocess
import time
import json
import urllib.request
import base64
import os
import websocket

PORT = 9244
CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
USER_DIR = "/tmp/chrome_feature_snap_dir"
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a"

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

    # Base URL with app mode
    base_url = "https://parenting-project-myanmar.penglambot.workers.dev/?mode=app"

    # 1. SCREENSHOT FEATURE 4: PODCAST MODE
    print("📸 Snapping Feature 4: Audio-First / Podcast Mode...")
    client.send("Page.navigate", {"url": f"{base_url}&tab=cinema"})
    time.sleep(3.5)
    # Switch to audio mode
    client.send("Runtime.evaluate", {"expression": "setPlayerMode('audio')"})
    time.sleep(1.5)
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "feature4_podcast_mode.png"), "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("  ✓ Saved feature4_podcast_mode.png")

    # 2. SCREENSHOT FEATURE 2: INTERACTIVE FAMILY DISCUSSION & COMMUNITY PRAYER WALL
    print("📸 Snapping Feature 2: Interactive Family Discussion & Community Prayer...")
    client.send("Runtime.evaluate", {"expression": "switchAppTab('prayer')"})
    time.sleep(2.0)
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "feature2_prayer_community.png"), "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("  ✓ Saved feature2_prayer_community.png")

    # 3. SCREENSHOT FEATURE 3: PARENTING JOURNEY & MILESTONES ROADMAP
    print("📸 Snapping Feature 3: Parenting Journey & Milestones Roadmap...")
    client.send("Runtime.evaluate", {"expression": "switchAppTab('devotional')"})
    time.sleep(2.0)
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "feature3_journey_roadmap.png"), "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("  ✓ Saved feature3_journey_roadmap.png")

    # 4. SCREENSHOT FEATURE 1: NEXT-GEN OFFLINE DOWNLOADS & STORAGE METER
    print("📸 Snapping Feature 1: Next-Gen Storage Meter & Downloads...")
    client.send("Runtime.evaluate", {"expression": "switchAppTab('downloads')"})
    time.sleep(2.0)
    res = client.send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(OUT_DIR, "feature1_storage_meter.png"), "wb") as f:
        f.write(base64.b64decode(res["data"]))
    print("  ✓ Saved feature1_storage_meter.png")

    print("🎉 All 4 feature screenshots captured successfully!")

finally:
    try: client.close()
    except: pass
    proc.terminate()
