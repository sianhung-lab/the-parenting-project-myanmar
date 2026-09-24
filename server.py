#!/usr/bin/env python3
import http.server
import socketserver
import json
import os
import urllib.parse
import datetime
import threading
import urllib.request
import base64
import re
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

PORT = int(os.environ.get("PORT", 8080))
DIR = os.path.dirname(os.path.abspath(__file__))
EXCEL_FILE = os.path.join(DIR, "The_Parenting_Project_Myanmar_Database.xlsx")

# Staff security passcode (Only CBN Myanmar team knows this)
STAFF_PASSCODE = "cbn2026"

# Google Sheets Webhook URL
GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyzWRfIK9WG3pjVeziLiGnOAGzJXz9POJVrbKtY2V80Cz5qMd8jsRPZmpWHiB8H-oZR/exec"

def forward_to_google_sheet(payload):
    def _worker():
        try:
            p = dict(payload)
            phone = str(p.get('phone', '')).strip()
            if phone.startswith('+') or phone.startswith('='):
                p['phone'] = "'" + phone
            req = urllib.request.Request(
                GOOGLE_SHEETS_URL,
                data=json.dumps(p).encode('utf-8'),
                headers={'Content-Type': 'application/json'}
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                print("  ✓ Google Sheet sync status:", resp.status)
        except Exception as ex:
            print("  ⚠️ Google Sheet forward note:", ex)
    t = threading.Thread(target=_worker, daemon=True)
    t.start()

PERMISSIONS_FILE = os.path.join(DIR, "permissions.json")
CONTENT_RULES_FILE = os.path.join(DIR, "content_rules.json")
CUSTOM_VIDEOS_FILE = os.path.join(DIR, "custom_videos.json")
UPLOADS_DIR = os.path.join(DIR, "uploads")
os.makedirs(os.path.join(UPLOADS_DIR, "videos"), exist_ok=True)
os.makedirs(os.path.join(UPLOADS_DIR, "thumbnails"), exist_ok=True)

DEFAULT_VIDEOS = [
    {
        "id": "trailer",
        "youtube": "5sohQQF_FqM",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Official 2025 Trailer — The Parenting Project",
        "myTitle": "The Parenting Project ၂၀၂၅ တရားဝင် မိတ်ဆက်ဗီဒီယို",
        "badge": "Official Promo",
        "myBadge": "တရားဝင် မိတ်ဆက်ဗီဒီယို",
        "thumb": "https://i.ytimg.com/vi/5sohQQF_FqM/hqdefault.jpg",
        "caption": "A values-based parenting curriculum equipping local churches across Myanmar.",
        "myCaption": "မြန်မာနိုင်ငံရှိ ဒေသန္တရ အသင်းတော်များအတွက် ခိုင်မာသော မိသားစု တည်ဆောက်ရေး သင်ရိုးညွှန်းတမ်း။",
        "access": "free"
    },
    {
        "id": "1",
        "youtube": "hKSMxbFee1U",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 1: Being a Positive Role Model",
        "myTitle": "မော်ဂျူး ၁: ကောင်းသော စံနမူနာပြ မိဘဖြစ်ခြင်း",
        "badge": "Module 01",
        "myBadge": "မော်ဂျူး ၀၁",
        "thumb": "https://i.ytimg.com/vi/hKSMxbFee1U/hqdefault.jpg",
        "caption": "Your daily character is the first textbook your child reads.",
        "myCaption": "မိဘများ၏ နေ့စဉ် အသက်ရှင်နေထိုင်မှု စရိုက်လက္ခဏာသည် သားသမီးများ ပထမဆုံး ဖတ်ရှုရသော ပြဋ္ဌာန်းစာအုပ်ဖြစ်ပါသည်။",
        "access": "free"
    },
    {
        "id": "2",
        "youtube": "GVK5Wc0NZE4",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 2: Building Deep Connection",
        "myTitle": "မော်ဂျူး ၂: နက်ရှိုင်းသော မိသားစု ဆက်ဆံရေး တည်ဆောက်ခြင်း",
        "badge": "Module 02",
        "myBadge": "မော်ဂျူး ၀၂",
        "thumb": "https://i.ytimg.com/vi/GVK5Wc0NZE4/hqdefault.jpg",
        "caption": "Correction without connection creates silent rebellion.",
        "myCaption": "နွေးထွေးသော ဆက်ဆံရေး မရှိဘဲ ဆုံးမပဲ့ပြင်ခြင်းသည် သားသမီးများ၏ စိတ်ထဲတွင် တိတ်တဆိတ် ပုန်ကန်မှုကို ဖြစ်စေပါသည်။",
        "access": "granted"
    },
    {
        "id": "3",
        "youtube": "lmtVOhpszCQ",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 3: Healthy Parental Authority",
        "myTitle": "မော်ဂျူး ၃: မေတ္တာနှင့် တည်ဆောက်ထားသော မိဘဩဇာ",
        "badge": "Module 03",
        "myBadge": "မော်ဂျူး ၀၃",
        "thumb": "https://i.ytimg.com/vi/lmtVOhpszCQ/hqdefault.jpg",
        "caption": "Lead your home with loving authority, not intimidation.",
        "myCaption": "မိမိအိမ်ထောင်ကို ခြိမ်းခြောက်ကြောက်ရွံ့စေခြင်းဖြင့် မဟုတ်ဘဲ၊ ချစ်ခြင်းမေတ္တာပြည့်ဝသော အုပ်ထိန်းမှုဖြင့် ဦးဆောင်ပါ။",
        "access": "granted"
    },
    {
        "id": "4",
        "youtube": "q1NTvlZhv-Y",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 4: Filling the Emotional Tank",
        "myTitle": "မော်ဂျူး ၄: သားသမီး၏ စိတ်ခံစားချက် အင်အား ဖြည့်ဆည်းပေးခြင်း",
        "badge": "Module 04",
        "myBadge": "မော်ဂျူး ၀၄",
        "thumb": "https://i.ytimg.com/vi/q1NTvlZhv-Y/hqdefault.jpg",
        "caption": "A child on an empty emotional tank will act out or withdraw.",
        "myCaption": "စိတ်ခံစားချက် မေတ္တာတိုင်ကီ ခမ်းခြောက်နေသော ကလေးသည် စိတ်ရှုပ်ထွေးစွာ သောင်းကျန်းတတ်သည် သို့မဟုတ် သီးသန့် ဆုတ်ခွာသွားတတ်ပါသည်။",
        "access": "granted"
    },
    {
        "id": "5",
        "youtube": "Pt-ZYVIAGBg",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 5: Navigating the Digital Household",
        "myTitle": "မော်ဂျူး ၅: ဒစ်ဂျစ်တယ်ခေတ် မိသားစု စီမံခန့်ခွဲမှု",
        "badge": "Module 05",
        "myBadge": "မော်ဂျူး ၀၅",
        "thumb": "https://i.ytimg.com/vi/Pt-ZYVIAGBg/hqdefault.jpg",
        "caption": "Smart frameworks for screen time without constant warfare.",
        "myCaption": "နေ့စဉ် စကားများရန်ဖြစ်စရာမလိုဘဲ ဖုန်းနှင့် ဖန်သားပြင်သုံးစွဲမှုကို ပညာရှိစွာ ထိန်းကျောင်းခြင်း။",
        "access": "granted"
    },
    {
        "id": "6",
        "youtube": "KEUAW5PsV8A",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 6: Boundaries & Positive Discipline",
        "myTitle": "မော်ဂျူး ၆: စည်းဘောင်များနှင့် အပြုသဘောဆောင်သော ဆုံးမပဲ့ပြင်ခြင်း",
        "badge": "Module 06",
        "myBadge": "မော်ဂျူး ၀၆",
        "thumb": "https://i.ytimg.com/vi/KEUAW5PsV8A/hqdefault.jpg",
        "caption": "Handling family conflict with restorative grace and clear rules.",
        "myCaption": "မိသားစု ပဋိပက္ခများကို မေတ္တာဖြင့် ဖြေရှင်းခြင်းနှင့် ကုစားခြင်း။",
        "access": "granted"
    },
    {
        "id": "7",
        "youtube": "FfwH7uOiq7M",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 7: The Father's Heart & Presence",
        "myTitle": "မော်ဂျူး ၇: ဖခင်၏ နှလုံးသားနှင့် အတူရှိနေပေးခြင်း",
        "badge": "Module 07",
        "myBadge": "မော်ဂျူး ၀၇",
        "thumb": "https://i.ytimg.com/vi/FfwH7uOiq7M/hqdefault.jpg",
        "caption": "Fathers as spiritual anchors in turbulent cultural times.",
        "myCaption": "ဖခင်၏ နှလုံးသားနှင့် သားသမီးများနှင့်အတူ အနီးကပ် ရှိနေပေးခြင်း။",
        "access": "granted"
    },
    {
        "id": "8",
        "youtube": "FBtNGyBDZIM",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 8: Working Parents: Career & Home",
        "myTitle": "မော်ဂျူး ၈: အလုပ်လုပ်သော မိဘများ- အလုပ်နှင့် အိမ်ထောင် ဟန်ချက်ညီစေခြင်း",
        "badge": "Module 08",
        "myBadge": "မော်ဂျူး ၀၈",
        "thumb": "https://i.ytimg.com/vi/FBtNGyBDZIM/hqdefault.jpg",
        "caption": "Balancing vocational demands with attentive parenting.",
        "myCaption": "အလုပ်နှင့် အိမ်ထောင်ရေး ဟန်ချက်ညီစေရန် ပညာရှိစွာ စီမံခြင်း။",
        "access": "granted"
    },
    {
        "id": "9",
        "youtube": "uQByH6xNFfM",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 9: Nurturing Foundational Faith",
        "myTitle": "မော်ဂျူး ၉: ခိုင်မာသော ယုံကြည်ခြင်း အခြေခံကို ပျိုးထောင်ခြင်း",
        "badge": "Module 09",
        "myBadge": "မော်ဂျူး ၀၉",
        "thumb": "https://i.ytimg.com/vi/uQByH6xNFfM/hqdefault.jpg",
        "caption": "Passing down vibrant generational faith in everyday rhythms.",
        "myCaption": "ခိုင်မာသော ခရစ်ယာန် ယုံကြည်ခြင်း အမွေကို သားသမီးထံ လက်ဆင့်ကမ်းခြင်း။",
        "access": "granted"
    },
    {
        "id": "10",
        "youtube": "dJLSp6Nh80g",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 10: Healthy Sexuality in the Family",
        "myTitle": "မော်ဂျူး ၁၀: မိသားစုအတွင်း ကျန်းမာသော လိင်ပိုင်းဆိုင်ရာ အသိပညာပေးခြင်း",
        "badge": "Module 10",
        "myBadge": "မော်ဂျူး ၁၀",
        "thumb": "https://i.ytimg.com/vi/dJLSp6Nh80g/hqdefault.jpg",
        "caption": "Biblical clarity on modesty, purity, and relational respect.",
        "myCaption": "ကျန်းမာသော လိင်ပိုင်းဆိုင်ရာ အသိပညာပေးခြင်းနှင့် မိသားစု နွေးထွေးမှု။",
        "access": "granted"
    },
    {
        "id": "11",
        "youtube": "v_bMaW2yHT8",
        "videoType": "youtube",
        "fileUrl": "",
        "title": "Module 11: Parenting Through Every Life Stage",
        "myTitle": "မော်ဂျူး ၁၁: ဘဝအဆင့်တိုင်းတွင် သားသမီးများကို ပြုစုပျိုးထောင်ခြင်း",
        "badge": "Module 11",
        "myBadge": "မော်ဂျူး ၁၁",
        "thumb": "https://i.ytimg.com/vi/v_bMaW2yHT8/hqdefault.jpg",
        "caption": "Launching young adults with purpose and eternal perspective.",
        "myCaption": "သားသမီးများကို ရည်ရွယ်ချက်ရှိသော ဘဝထဲသို့ စေလွှတ်ခြင်း။",
        "access": "granted"
    }
]

def load_custom_videos():
    if os.path.exists(CUSTOM_VIDEOS_FILE):
        try:
            with open(CUSTOM_VIDEOS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print("Error loading custom videos:", e)
    # Initialize with defaults
    save_custom_videos(DEFAULT_VIDEOS)
    return DEFAULT_VIDEOS

def save_custom_videos(data):
    try:
        with open(CUSTOM_VIDEOS_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print("Error saving custom videos:", e)

def load_permissions():
    if os.path.exists(PERMISSIONS_FILE):
        try:
            with open(PERMISSIONS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_permissions(data):
    try:
        with open(PERMISSIONS_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print("Error saving permissions:", e)

def load_content_rules():
    if os.path.exists(CONTENT_RULES_FILE):
        try:
            with open(CONTENT_RULES_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_content_rules(data):
    try:
        with open(CONTENT_RULES_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print("Error saving content rules:", e)

THIN_BORDER = Border(
    left=Side(style='thin', color='DDDDDD'),
    right=Side(style='thin', color='DDDDDD'),
    top=Side(style='thin', color='DDDDDD'),
    bottom=Side(style='thin', color='DDDDDD')
)
LIGHT_NAVY = PatternFill(start_color="F0F4F9", end_color="F0F4F9", fill_type="solid")
REG_FONT = Font(name="Segoe UI", size=10)
STATUS_FILL = PatternFill(start_color="F8D7DA", fill_type="solid")
STATUS_FONT = Font(name="Segoe UI", size=10, bold=True, color="721C24")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def is_staff_authorized(self):
        """Validates that caller is an authorized CBN Myanmar staff member."""
        # 1. Check custom staff header
        auth_header = self.headers.get('X-Staff-Auth', '')
        if auth_header == STAFF_PASSCODE:
            return True

        # 2. Check query parameter ?key=... or ?auth=...
        parsed = urllib.parse.urlparse(self.path)
        params = urllib.parse.parse_qs(parsed.query)
        if params.get('key', [''])[0] == STAFF_PASSCODE or params.get('auth', [''])[0] == STAFF_PASSCODE:
            return True

        # 3. Check Cookie: staff_auth=...
        cookie_header = self.headers.get('Cookie', '')
        if f"staff_auth={STAFF_PASSCODE}" in cookie_header:
            return True

        return False

    def send_forbidden(self, msg="Access Denied: Staff authorization required to access confidential church data."):
        self.send_response(403)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps({"error": msg, "restricted": True}).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, X-Staff-Auth')
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path

        # 1. Protect direct download of Excel database file
        if clean_path.endswith('.xlsx') or 'The_Parenting_Project_Myanmar_Database' in clean_path:
            if not self.is_staff_authorized():
                self.send_forbidden("CONFIDENTIAL: The church database is restricted to authorized CBN Myanmar personnel only.")
                return

        # 2. Protect CSV Export Feed
        if clean_path == '/api/registrations.csv':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return

            try:
                wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
                ws = wb["Church Registrations"]
                rows = []
                for r in range(4, ws.max_row + 1):
                    row_vals = [str(ws.cell(r, c).value or "").replace('"', '""') for c in range(1, 12)]
                    rows.append('"' + '","'.join(row_vals) + '"')
                csv_data = '\ufeff' + '\r\n'.join(rows)
                self.send_response(200)
                self.send_header('Content-Type', 'text/csv; charset=utf-8')
                self.send_header('Content-Disposition', 'attachment; filename="The_Parenting_Project_Myanmar_Confidential_Database.csv"')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(csv_data.encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
                return

        # 3. User Permission Status API (Public/Client)
        if clean_path == '/api/user-status':
            params = urllib.parse.parse_qs(parsed.query)
            email = (params.get('email', [''])[0]).strip().lower()
            perms = load_permissions()
            info = perms.get(email)
            if info:
                res = {
                    "found": True,
                    "email": email,
                    "isGranted": bool(info.get("granted", False)),
                    "status": info.get("status", "Pending Admin Approval"),
                    "churchName": info.get("churchName", ""),
                    "regId": info.get("regId", "")
                }
            else:
                res = {
                    "found": False,
                    "email": email,
                    "isGranted": False,
                    "status": "Not Registered"
                }
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        # 4. Content Access Rules API (Public/Client)
        if clean_path == '/api/content-rules':
            rules = load_content_rules()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(rules).encode('utf-8'))
            return

        # 5. Protect JSON API Data Feed
        if clean_path == '/api/registrations.json':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return

            try:
                wb = openpyxl.load_workbook(EXCEL_FILE, data_only=True)
                ws = wb["Church Registrations"]
                perms = load_permissions()
                data = []
                for r in range(5, ws.max_row + 1):
                    c_email = str(ws.cell(r, 8).value or "").strip().lower()
                    perm_info = perms.get(c_email, {})
                    is_granted = perm_info.get("granted", False)
                    status_val = ws.cell(r, 11).value or "New Registration"
                    if is_granted:
                        status_val = "Verified (Full Access)"

                    item = {
                        "regId": ws.cell(r, 1).value or "",
                        "timestamp": ws.cell(r, 2).value or "",
                        "churchName": ws.cell(r, 3).value or "",
                        "region": ws.cell(r, 4).value or "",
                        "city": ws.cell(r, 5).value or "",
                        "denom": ws.cell(r, 6).value or "",
                        "coordName": ws.cell(r, 7).value or "",
                        "email": ws.cell(r, 8).value or "",
                        "phone": ws.cell(r, 9).value or "",
                        "fam": ws.cell(r, 10).value or "",
                        "status": status_val,
                        "isGranted": is_granted
                    }
                    if item["churchName"]:
                        data.append(item)
                res = json.dumps(data)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(res.encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
                return

        # 6. Custom/Uploaded Videos Library API (Public/Client)
        if clean_path == '/api/custom-videos':
            videos = load_custom_videos()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(videos).encode('utf-8'))
            return

        super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else ""

        # Staff Passcode Verification Endpoint
        if self.path == '/api/admin-auth':
            try:
                payload = json.loads(body)
                passcode = payload.get("passcode", "").strip()
                if passcode == STAFF_PASSCODE:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Set-Cookie', f'staff_auth={STAFF_PASSCODE}; Path=/; SameSite=Lax')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "success", "token": STAFF_PASSCODE}).encode('utf-8'))
                else:
                    self.send_response(401)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({"error": "Incorrect staff passcode"}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(str(e).encode('utf-8'))
            return

        # Public Registration Endpoint (Write-Only)
        if self.path == '/api/register':
            try:
                data = json.loads(body)
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(b'{"error": "Invalid JSON"}')
                return

            # Append securely to Excel file
            try:
                wb = openpyxl.load_workbook(EXCEL_FILE)
                ws = wb["Church Registrations"]
                
                next_row = ws.max_row + 1
                row_num = next_row - 4
                reg_id = f"TPP-MM-{row_num:03d}"
                now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")

                row_vals = [
                    reg_id,
                    now_str,
                    data.get("churchName", ""),
                    data.get("region", "Yangon"),
                    data.get("city", ""),
                    data.get("denom", "Independent"),
                    data.get("coordName", ""),
                    data.get("email", ""),
                    data.get("phone", ""),
                    data.get("fam", "10–25 Families"),
                    "New Registration"
                ]

                ws.row_dimensions[next_row].height = 20
                for c_idx, val in enumerate(row_vals, 1):
                    cell = ws.cell(row=next_row, column=c_idx, value=val)
                    cell.font = REG_FONT
                    cell.border = THIN_BORDER
                    cell.alignment = Alignment(vertical="center", horizontal="center" if c_idx in [1, 2, 4, 10, 11] else "left")
                    if next_row % 2 == 0:
                        cell.fill = LIGHT_NAVY
                    if c_idx == 11:
                        cell.fill = STATUS_FILL
                        cell.font = STATUS_FONT

                wb.save(EXCEL_FILE)
                print(f"  ✓ Appended to Private Excel: {reg_id} | {data.get('churchName')}")

                # Add pending user into permissions.json
                try:
                    c_email = str(data.get("email", "")).strip().lower()
                    if c_email:
                        perms = load_permissions()
                        if c_email not in perms:
                            perms[c_email] = {
                                "regId": reg_id,
                                "churchName": data.get("churchName", ""),
                                "granted": False,
                                "status": "Pending Admin Approval",
                                "updatedAt": now_str
                            }
                            save_permissions(perms)
                except Exception as pEx:
                    print("Perm save note:", pEx)

                # Sync in background to Google Sheet Webhook
                forward_to_google_sheet(data)

                # Return only acknowledgment of their own submission
                res = json.dumps({"status": "success", "regId": reg_id, "timestamp": now_str})
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(res.encode('utf-8'))
            except Exception as e:
                print("Error saving to Excel:", e)
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(f'{{"error": "{str(e)}"}}'.encode('utf-8'))
            return

        # Staff Endpoint: Toggle User Video Access (Grant / Revoke)
        if self.path == '/api/admin/toggle-user-access':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return
            try:
                payload = json.loads(body)
                email = str(payload.get("email", "")).strip().lower()
                granted = bool(payload.get("granted", payload.get("grant", False)))
                perms = load_permissions()
                if email in perms:
                    perms[email]["granted"] = granted
                    perms[email]["status"] = "Verified (Full Access)" if granted else "Pending Admin Approval"
                    perms[email]["updatedAt"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
                    save_permissions(perms)
                    
                    try:
                        wb = openpyxl.load_workbook(EXCEL_FILE)
                        ws = wb["Church Registrations"]
                        for r in range(5, ws.max_row + 1):
                            if str(ws.cell(r, 8).value or '').strip().lower() == email:
                                ws.cell(r, 11).value = "Verified (Full Access)" if granted else "Pending Approval"
                                break
                        wb.save(EXCEL_FILE)
                    except Exception as eEx:
                        print("Excel update note:", eEx)

                    res = {"status": "success", "email": email, "granted": granted, "userStatus": perms[email]["status"]}
                else:
                    perms[email] = {
                        "regId": "MANUAL",
                        "churchName": payload.get("churchName", "Partner Church"),
                        "granted": granted,
                        "status": "Verified (Full Access)" if granted else "Pending Admin Approval",
                        "updatedAt": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
                    }
                    save_permissions(perms)
                    res = {"status": "success", "email": email, "granted": granted, "userStatus": perms[email]["status"]}

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(res).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        # Staff Endpoint: Update Module Content Rule (Free vs Granted)
        if self.path == '/api/admin/update-content-rule':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return
            try:
                payload = json.loads(body)
                mod_id = str(payload.get("moduleId", ""))
                access = payload.get("access", "granted")
                rules = load_content_rules()
                if mod_id in rules:
                    rules[mod_id]["access"] = access
                    if "youtube" in payload and payload["youtube"]:
                        rules[mod_id]["youtube"] = payload["youtube"]
                    save_content_rules(rules)
                    res = {"status": "success", "moduleId": mod_id, "access": access}
                else:
                    rules[mod_id] = {"access": access}
                    save_content_rules(rules)
                    res = {"status": "success", "moduleId": mod_id, "access": access}
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(res).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
        # Staff Endpoint: Upload Media File (Video or Thumbnail Image)
        if self.path == '/api/admin/upload-media':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return
            try:
                payload = json.loads(body)
                raw_filename = payload.get("filename", "upload.bin")
                folder = payload.get("folder", "videos")
                if folder not in ["videos", "thumbnails"]:
                    folder = "videos"
                base64_data = payload.get("data", "")
                if "," in base64_data:
                    base64_data = base64_data.split(",", 1)[1]
                
                # Sanitize filename
                clean_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', raw_filename)
                ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
                final_name = f"{ts}_{clean_name}"
                target_path = os.path.join(UPLOADS_DIR, folder, final_name)
                
                with open(target_path, "wb") as f:
                    f.write(base64.b64decode(base64_data))
                
                url = f"uploads/{folder}/{final_name}"
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "url": url, "filename": final_name}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        # Staff Endpoint: Save / Update Video Entry
        if self.path == '/api/admin/save-video':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return
            try:
                payload = json.loads(body)
                v_id = str(payload.get("id", "")).strip()
                if not v_id:
                    v_id = "v_" + datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
                
                videos = load_custom_videos()
                found = False
                for idx, v in enumerate(videos):
                    if str(v.get("id")) == v_id:
                        videos[idx].update(payload)
                        videos[idx]["id"] = v_id
                        found = True
                        break
                if not found:
                    payload["id"] = v_id
                    videos.append(payload)
                
                save_custom_videos(videos)

                # If this video is assigned to module 1-11, also update content_rules.json
                if v_id.isdigit() or v_id in ["1","2","3","4","5","6","7","8","9","10","11"]:
                    rules = load_content_rules()
                    if v_id in rules:
                        if "access" in payload:
                            rules[v_id]["access"] = payload["access"]
                        if "title" in payload:
                            rules[v_id]["title"] = payload["title"]
                        if "myTitle" in payload:
                            rules[v_id]["myTitle"] = payload["myTitle"]
                        save_content_rules(rules)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "video": payload}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        # Staff Endpoint: Delete Custom Video
        if self.path == '/api/admin/delete-video':
            if not self.is_staff_authorized():
                self.send_forbidden()
                return
            try:
                payload = json.loads(body)
                v_id = str(payload.get("id", "")).strip()
                videos = load_custom_videos()
                videos = [v for v in videos if str(v.get("id")) != v_id]
                save_custom_videos(videos)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "deletedId": v_id}).encode('utf-8'))
            except Exception as e:
                self.send_response(400)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
            return

        # Unknown POST path — return 404
        self.send_response(404)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b'{"error": "Not found"}')

class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == "__main__":
    with ThreadedHTTPServer(("", PORT), CustomHandler) as httpd:
        print(f"🔒 Secure Server running on http://localhost:{PORT}")
        print(f"   Staff Passcode: {STAFF_PASSCODE}")
        httpd.serve_forever()
