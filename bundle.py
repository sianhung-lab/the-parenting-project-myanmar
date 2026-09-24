#!/usr/bin/env python3
"""Bundles the Myanmar Parenting Project into a single self-contained HTML file."""
import base64, os, re, sys

DIR = os.path.dirname(os.path.abspath(__file__))

def b64(path):
    ext = path.rsplit('.', 1)[-1].lower()
    mime = {'jpg':'image/jpeg','jpeg':'image/jpeg','png':'image/png','webp':'image/webp','gif':'image/gif'}.get(ext,'image/jpeg')
    with open(path, 'rb') as f:
        return f"data:{mime};base64,{base64.b64encode(f.read()).decode()}"

def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()

# Read parts
src_html = os.path.join(DIR, 'index.src.html') if os.path.exists(os.path.join(DIR, 'index.src.html')) else os.path.join(DIR, 'index.html')
html = read(src_html)
css  = read(os.path.join(DIR, 'style.css'))
js   = read(os.path.join(DIR, 'app.js'))

# Encode images
imgs = {
    'official_logo.png':                os.path.join(DIR, 'official_logo.png'),
    'brand_hero_zoomed.jpg':            os.path.join(DIR, 'brand_hero_zoomed.jpg'),
    'church_couple_welcoming.jpg':      os.path.join(DIR, 'church_couple_welcoming.jpg'),
    'banner.jpg':                       os.path.join(DIR, 'banner.jpg'),
    'brand_hero_luxury.jpg':            os.path.join(DIR, 'brand_hero_luxury.jpg'),
    'brand_hero.jpg':                   os.path.join(DIR, 'brand_hero.jpg'),
    'brand_xbanner.jpg':                os.path.join(DIR, 'brand_xbanner.jpg'),
    'login_bg.jpg':                     os.path.join(DIR, 'login_bg.jpg'),
}
img_data = {}
for name, path in imgs.items():
    if os.path.exists(path):
        img_data[name] = b64(path)
        print(f"  ✓ Encoded {name}")
    else:
        print(f"  ✗ Missing {name}")

# Inline CSS (replace <link rel="stylesheet" href="style.css"/>)
html = re.sub(
    r'<link[^>]+href=["\']style\.css["\'][^>]*/?>',
    lambda m: f'<style>\n{css}\n</style>',
    html
)

# Inline JS (replace <script src="app.js"></script>)
html = re.sub(
    r'<script src=["\']app\.js["\']></script>',
    lambda m: f'<script>\n{js}\n</script>',
    html
)

# Inline images for main pages
for name, data in img_data.items():
    html = html.replace(f"'{name}'", f"'{data}'")
    html = html.replace(f'"{name}"', f'"{data}"')
    html = html.replace(f'src={name}', f'src="{data}"')

out = os.path.join(DIR, 'parenting-project-myanmar.html')
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)

out_index = os.path.join(DIR, 'index.html')
with open(out_index, 'w', encoding='utf-8') as f:
    f.write(html)

# Bundle login page
login_src = os.path.join(DIR, 'login.src.html')
if os.path.exists(login_src):
    login_html = read(login_src)
    for name, data in img_data.items():
        login_html = login_html.replace(f"'{name}'", f"'{data}'")
        login_html = login_html.replace(f'"{name}"', f'"{data}"')
        login_html = login_html.replace(f'src={name}', f'src="{data}"')
    out_login = os.path.join(DIR, 'login.html')
    with open(out_login, 'w', encoding='utf-8') as f:
        f.write(login_html)
    print(f"   Login Page: {out_login}")

# Bundle register page
reg_src = os.path.join(DIR, 'register.src.html')
if os.path.exists(reg_src):
    reg_html = read(reg_src)
    for name, data in img_data.items():
        reg_html = reg_html.replace(f"'{name}'", f"'{data}'")
        reg_html = reg_html.replace(f'"{name}"', f'"{data}"')
        reg_html = reg_html.replace(f'src={name}', f'src="{data}"')
    out_reg = os.path.join(DIR, 'register.html')
    with open(out_reg, 'w', encoding='utf-8') as f:
        f.write(reg_html)
    print(f"   Register Page: {out_reg}")

size_mb = os.path.getsize(out) / 1024 / 1024
print(f"\n✅ Bundle complete!")
print(f"   Standalone: {out}")
print(f"   Root Index: {out_index}")
print(f"   Size: {size_mb:.2f} MB")
print(f"\n👉 Double-click 'parenting-project-myanmar.html' or open http://localhost:8080 in browser.")

