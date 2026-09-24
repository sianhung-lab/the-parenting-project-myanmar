import subprocess, time, json, urllib.request, urllib.parse, base64, os

DIR = os.path.dirname(os.path.abspath(__file__))
html_url = f"file://{DIR}/parenting-project-myanmar.html?lang=my"
out_dir = "/Users/richardsmacmini/.gemini/antigravity-ide/brain/7ef1f748-d91d-4a6d-bbf2-7ba8cc16394a"

# Launch Chrome with remote debugging
proc = subprocess.Popen([
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "--headless=new",
    "--disable-gpu",
    "--remote-debugging-port=9222",
    "--window-size=1400,1000",
    html_url
])

time.sleep(2)

try:
    # Get WebSocket debugger URL
    tabs = json.loads(urllib.request.urlopen("http://127.0.0.1:9222/json").read().decode())
    ws_url = tabs[0]["webSocketDebuggerUrl"]
    print(f"Connected to {ws_url}")

    # Use websocket via simple socket or python websockets?
    # Python stdlib doesn't have websockets out of the box, but we can do HTTP requests or standard screenshots!
finally:
    proc.terminate()
