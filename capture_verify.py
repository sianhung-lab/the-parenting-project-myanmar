import subprocess, time, os, urllib.request, json

OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a"

# 1. Capture Login English
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--window-size=1440,900",
    f"--screenshot={OUT_DIR}/login_en_verified.png",
    "http://localhost:8080/login.html"
], check=True)
print("✓ Captured login_en_verified.png")

# 2. Capture homepage top to check navbar sign in button
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--window-size=1440,900",
    f"--screenshot={OUT_DIR}/homepage_top_verified.png",
    "http://localhost:8080/"
], check=True)
print("✓ Captured homepage_top_verified.png")

# 3. Capture homepage scrolled to videos section
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--window-size=1440,1050",
    f"--screenshot={OUT_DIR}/homepage_videos_verified.png",
    "http://localhost:8080/#videos"
], check=True)
print("✓ Captured homepage_videos_verified.png")
