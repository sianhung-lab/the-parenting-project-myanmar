#!/usr/bin/env python3
"""
Generates all Android mipmap icon densities and Play Store graphics from official_logo.png
"""
import os
from PIL import Image

DIR = os.path.dirname(os.path.abspath(__file__))
LOGO_SRC = os.path.join(DIR, "official_logo.png")
RES_DIR = os.path.join(DIR, "android", "app", "src", "main", "res")

# Density sizes for ic_launcher
DENSITIES = {
    "mipmap-mdpi": (48, 48),
    "mipmap-hdpi": (72, 72),
    "mipmap-xhdpi": (96, 96),
    "mipmap-xxhdpi": (144, 144),
    "mipmap-xxxhdpi": (192, 192)
}

if not os.path.exists(LOGO_SRC):
    print("Logo not found:", LOGO_SRC)
    exit(1)

img = Image.open(LOGO_SRC).convert("RGBA")

# Generate standard & round icons for all densities
for folder, size in DENSITIES.items():
    target_dir = os.path.join(RES_DIR, folder)
    os.makedirs(target_dir, exist_ok=True)
    
    # Create squared launcher icon with padding
    square_img = Image.new("RGBA", size, (6, 24, 48, 255))
    padded_size = (int(size[0] * 0.85), int(size[1] * 0.85))
    resized_logo = img.resize(padded_size, Image.Resampling.LANCZOS)
    offset = ((size[0] - padded_size[0]) // 2, (size[1] - padded_size[1]) // 2)
    square_img.paste(resized_logo, offset, resized_logo)
    square_img.save(os.path.join(target_dir, "ic_launcher.png"))
    square_img.save(os.path.join(target_dir, "ic_launcher_round.png"))
    print(f"✓ Generated {folder} icons ({size[0]}x{size[1]})")

# Play Store 512x512 High-Res Icon
play_store_dir = os.path.join(DIR, "android", "play_store_assets")
os.makedirs(play_store_dir, exist_ok=True)

store_icon = Image.new("RGBA", (512, 512), (6, 24, 48, 255))
store_logo = img.resize((440, 440), Image.Resampling.LANCZOS)
store_icon.paste(store_logo, (36, 36), store_logo)
store_icon.save(os.path.join(play_store_dir, "play_store_icon_512.png"))
print("✓ Generated Play Store 512x512 Icon")

# Play Store 1024x500 Feature Graphic
feature_img = Image.new("RGBA", (1024, 500), (6, 24, 48, 255))
if os.path.exists(os.path.join(DIR, "brand_hero_zoomed.jpg")):
    hero = Image.open(os.path.join(DIR, "brand_hero_zoomed.jpg")).convert("RGBA")
    hero = hero.resize((1024, 500), Image.Resampling.LANCZOS)
    feature_img = Image.blend(feature_img, hero, 0.45)

feature_logo = img.resize((260, 260), Image.Resampling.LANCZOS)
feature_img.paste(feature_logo, (1024 // 2 - 130, 500 // 2 - 130), feature_logo)
feature_img.convert("RGB").save(os.path.join(play_store_dir, "feature_graphic_1024x500.png"))
print("✓ Generated Play Store 1024x500 Feature Graphic")
