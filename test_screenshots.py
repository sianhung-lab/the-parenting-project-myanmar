import subprocess, time, os

DIR = os.path.dirname(os.path.abspath(__file__))
html_path = f"file://{DIR}/parenting-project-myanmar.html?lang=my"

# Use headless chrome with remote debugging or script
# Let's take screenshots with different window heights or clips
# Or use python with a simple script to capture scrolled positions

# 1. Modules cards
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1400,1200",
    "--screenshot=/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/myanmar_modules_view.png",
    f"{html_path}#modules"
], check=True)

# 2. Quiz section
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1400,1200",
    "--screenshot=/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/myanmar_quiz_view.png",
    f"{html_path}#quiz"
], check=True)

# 3. Church section
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1400,1200",
    "--screenshot=/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/myanmar_church_view.png",
    f"{html_path}#church"
], check=True)

# 4. Testimonials & FAQ section
subprocess.run([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    "--window-size=1400,1400",
    "--screenshot=/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a/myanmar_testimonials_faq.png",
    f"{html_path}#testimonials"
], check=True)

print("Screenshots done!")
