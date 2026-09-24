#!/usr/bin/env python3
import subprocess, os

DIR = os.path.dirname(os.path.abspath(__file__))
OUT = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots/video_3d_carousel_stage_verified.png"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Let's use python with CDP or headless with a tall window or specific offset
# Even simpler: we can use a script that opens the page, scrolls to #videos, and takes a screenshot!
script = """
(() => {
  const el = document.getElementById('videos');
  if (el) el.scrollIntoView();
})()
"""

# Or take a full page screenshot:
subprocess.run([
    CHROME,
    "--headless=new",
    "--disable-gpu",
    "--window-size=1440,2400",
    f"--screenshot={OUT}",
    "--virtual-time-budget=2000",
    "http://localhost:8080/?scroll=videos"
], check=True)

print(f"Captured: {OUT}")
