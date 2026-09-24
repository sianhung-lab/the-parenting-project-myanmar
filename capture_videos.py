#!/usr/bin/env python3
import subprocess, time, os

DIR = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/screenshots"
os.makedirs(OUT_DIR, exist_ok=True)
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

def snap(url, filename, w=1440, h=960):
    out = os.path.join(OUT_DIR, filename)
    cmd = [
        CHROME,
        "--headless=new",
        "--disable-gpu",
        f"--window-size={w},{h}",
        f"--screenshot={out}",
        "--virtual-time-budget=3000",
        url
    ]
    subprocess.run(cmd, check=True)
    print(f"Captured: {filename}")

# 1. Hero with Watch 2025 Trailer button
snap("http://localhost:8080/#home", "video_01_hero_trailer_btn.png", 1440, 900)

# 2. 3D Video Carousel section
snap("http://localhost:8080/#videos", "video_02_3d_carousel_showcase.png", 1440, 960)

# 3. Cinema Lightbox Modal opened
snap("http://localhost:8080/?action=trailer", "video_03_cinema_lightbox_modal.png", 1440, 960)

# 4. Module 1 Modal with "Watch Module Teaser Video" button
snap("http://localhost:8080/?action=mod1", "video_04_module_modal_teaser_btn.png", 1440, 960)

# 5. Video Showcase in Myanmar Language
snap("http://localhost:8080/?lang=my#videos", "video_05_myanmar_video_showcase.png", 1440, 960)

# 6. Testimonials with video story buttons
snap("http://localhost:8080/#testimonials", "video_06_testimonials_video_stories.png", 1440, 960)

print("All video screenshots captured successfully!")
