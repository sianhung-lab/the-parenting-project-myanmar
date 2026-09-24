#!/usr/bin/env python3
"""
Compiles The Parenting Project Myanmar into a unified Cloudflare Worker script (worker.js)
"""
import os
import json

DIR = os.path.dirname(os.path.abspath(__file__))

def read(filename):
    with open(os.path.join(DIR, filename), 'r', encoding='utf-8') as f:
        return f.read()

index_html = read('index.src.html')
style_css = read('style.css')
app_js = read('app.js')
login_html = read('login.src.html')
reg_html = read('register.src.html')
manifest_json = read('manifest.json') if os.path.exists(os.path.join(DIR, 'manifest.json')) else "{}"

# In `index_html`, replace style.css and app.js links with inline tags
index_compiled = index_html.replace('<link rel="stylesheet" href="style.css"/>', f'<style>{style_css}</style>')
index_compiled = index_compiled.replace('<script src="app.js"></script>', f'<script>{app_js}</script>')

# Helper to read base64 image data
import base64
def get_b64(filename, mime):
    filepath = os.path.join(DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, 'rb') as f:
            return f'data:{mime};base64,' + base64.b64encode(f.read()).decode('utf-8')
    return ""

logo_b64 = get_b64('official_logo.png', 'image/png')
hero_b64 = get_b64('hero_couple_opt.jpg', 'image/jpeg')
avatar_couple_b64 = get_b64('avatar_couple.jpg', 'image/jpeg')
avatar_refugee_b64 = get_b64('avatar_refugee.jpg', 'image/jpeg')
avatar_edu_b64 = get_b64('avatar_education.jpg', 'image/jpeg')

if logo_b64:
    index_compiled = index_compiled.replace('src="official_logo.png"', f'src="{logo_b64}"')
if hero_b64:
    index_compiled = index_compiled.replace('src="hero_couple_opt.jpg"', f'src="{hero_b64}"')
if avatar_couple_b64:
    index_compiled = index_compiled.replace('src="avatar_couple.jpg"', f'src="{avatar_couple_b64}"')
if avatar_refugee_b64:
    index_compiled = index_compiled.replace('src="avatar_refugee.jpg"', f'src="{avatar_refugee_b64}"')
if avatar_edu_b64:
    index_compiled = index_compiled.replace('src="avatar_education.jpg"', f'src="{avatar_edu_b64}"')

# Default custom videos
default_videos = []
if os.path.exists(os.path.join(DIR, 'custom_videos.json')):
    with open(os.path.join(DIR, 'custom_videos.json'), 'r', encoding='utf-8') as f:
        default_videos = json.load(f)

# Default content rules
default_rules = {}
if os.path.exists(os.path.join(DIR, 'content_rules.json')):
    with open(os.path.join(DIR, 'content_rules.json'), 'r', encoding='utf-8') as f:
        default_rules = json.load(f)

# Default registrations
default_regs = [
    {
        "regId": "REG-2026-001",
        "timestamp": "2026-09-22 14:30:15",
        "churchName": "Yangon Grace Baptist Church",
        "denom": "Myanmar Baptist Convention (MBC)",
        "region": "Yangon",
        "city": "Insein, Yangon",
        "coordName": "Pastor Thang San",
        "email": "thangsan@gracebaptist.org",
        "phone": "+95 9 450 123 456",
        "fam": "65",
        "status": "Verified Partner 🟢",
        "isGranted": True
    },
    {
        "regId": "REG-2026-002",
        "timestamp": "2026-09-22 15:45:00",
        "churchName": "Mandalay Emmanuel AG Church",
        "denom": "Assemblies of God (AG)",
        "region": "Mandalay",
        "city": "Chanayethazan, Mandalay",
        "coordName": "Sayama Hlawn Nu",
        "email": "hlawn.nu@agmyanmar.org",
        "phone": "+95 9 250 987 654",
        "fam": "40",
        "status": "Verified Partner 🟢",
        "isGranted": True
    },
    {
        "regId": "REG-2026-003",
        "timestamp": "2026-09-22 16:10:22",
        "churchName": "Taunggyi Central Methodist Church",
        "denom": "Methodist Church of Upper Myanmar",
        "region": "Shan",
        "city": "Taunggyi, Shan State",
        "coordName": "Rev. Zaw Win",
        "email": "rev.zawwin@methodistmm.org",
        "phone": "+95 9 780 445 566",
        "fam": "85",
        "status": "Verified Partner 🟢",
        "isGranted": True
    }
]

default_prayers = [
    {
        "id": "p-1",
        "author": "Ko Min & Ma Hla",
        "city": "Yangon",
        "cat": "family",
        "catName": "👨‍👩‍👧‍👦 Myanmar Family Support",
        "text": "လူငယ်များအကြား မျှော်လင့်ချက်ပေးစွမ်းနိုင်သော မိဘများဖြစ်လာစေရန် မိသားစုများ အချင်းချင်း ဝိုင်းဝန်းဆုတောင်းပေးကြပါအုံးရှင်။",
        "time": "ယနေ့ နံနက်",
        "prayerCount": 142
    },
    {
        "id": "p-2",
        "author": "Refugee Families",
        "city": "Karen & Chin Refugee Communities",
        "cat": "mental",
        "catName": "🕊️ Refugee Families Support",
        "text": "လူငယ်လေးများ စိတ်ဒဏ်ရာများ သက်သာပျောက်ကင်းစေရန်နှင့် မိဘများနှင့်အတူ မေတ္တာမေတ္တာများ ရရှိနိုင်ကြစေရန် ဝိုင်းဝန်းဆုတောင်းပေးတော်မူပါ။",
        "time": "မနေ့က",
        "prayerCount": 142
    },
    {
        "id": "p-3",
        "author": "Education Path",
        "city": "Higher Education & Mentorship",
        "cat": "child",
        "catName": "👶 Education & Youth Strength",
        "text": "မောင်တစ်ထောင်တို့ရဲ့ ပညာရေးအတွက် မိဘများ လိုအပ်သော ခွန်အားနှင့် ငွေကြေး အရင်းအနှီးများ ပြည့်စုံစေရန် မေတ္တာဖြင့် ဆုတောင်းပေးကြပါရန် တောင်းခံအပ်ပါသည်။",
        "time": "၃ ရက်အလို",
        "prayerCount": 18
    }
]

default_feedback = [
    {
        "id": "fb-1",
        "module": "Module 1",
        "moduleTitle": "ကောင်းသော စံနမူနာပြ မိဘဖြစ်ခြင်း",
        "author": "Pastor Thang San",
        "church": "Yangon Grace Baptist Church",
        "rating": 5,
        "text": "ဒီသင်ခန်းစာက မိဘတွေကို စကားလုံးထက် လက်တွေ့အသက်တာနဲ့ စံနမူနာပြဖို့ အလွန်ထိရောက်စွာ နိုးဆော်ပေးခဲ့ပါတယ်။ အသင်းတော်မိဘ (၆၅) ယောက်စလုံး အလွန်ကျေးဇူးတော်ချီးမွမ်းကြပါတယ်။",
        "time": "2026-09-23"
    },
    {
        "id": "fb-2",
        "module": "Module 2",
        "moduleTitle": "နက်ရှိုင်းသော မိသားစု ဆက်ဆံရေး တည်ဆောက်ခြင်း",
        "author": "Sayama Hlawn Nu",
        "church": "Mandalay Emmanuel AG Church",
        "rating": 5,
        "text": "သားသမီးတွေရဲ့ မေတ္တာဘာသာစကား ၅ မျိုးကို သိရှိသွားတဲ့အတွက် မိဘတွေနဲ့ သားသမီးတွေကြား နားလည်မှု ပိုမိုနက်ရှိုင်းလာပါတယ်။",
        "time": "2026-09-23"
    }
]

worker_code = f"""
// Cloudflare Worker for The Parenting Project Myanmar
// Edge-accelerated with instant Google Sheets sync and In-Page Admin Hub

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyzWRfIK9WG3pjVeziLiGnOAGzJXz9POJVrbKtY2V80Cz5qMd8jsRPZmpWHiB8H-oZR/exec";
const STAFF_PASSCODE = "cbn2026";

// Initial In-Memory State (persists across warm isolates; can also bind to KV if available)
let registrationsDB = {json.dumps(default_regs)};
let customVideosDB = {json.dumps(default_videos)};
let contentRulesDB = {json.dumps(default_rules)};
let prayersDB = {json.dumps(default_prayers)};
let feedbackDB = {json.dumps(default_feedback)};

const INDEX_HTML = {json.dumps(index_compiled)};
const LOGIN_HTML = {json.dumps(login_html)};
const REGISTER_HTML = {json.dumps(reg_html)};
const MANIFEST_JSON = {json.dumps(manifest_json)};

export default {{
  async fetch(request, env, ctx) {{
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    // Helper: CORS & JSON response
    const jsonResponse = (data, status = 200) => {{
      return new Response(JSON.stringify(data), {{
        status: status,
        headers: {{
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Staff-Auth"
        }}
      }});
    }};

    // Handle OPTIONS preflight
    if (method === "OPTIONS") {{
      return new Response(null, {{
        headers: {{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Staff-Auth"
        }}
      }});
    }}

    // Download APK route
    if (path === "/apk" || path === "/download" || path === "/ParentingProjectMyanmar.apk") {{
      return Response.redirect("https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.0.0/ParentingProjectMyanmar.apk", 302);
    }}

    // 1. Static Pages
    if (path === "/" || path === "/index.html") {{
      return new Response(INDEX_HTML, {{
        headers: {{ "Content-Type": "text/html; charset=utf-8" }}
      }});
    }}

    if (path === "/login" || path === "/login.html") {{
      return new Response(LOGIN_HTML, {{
        headers: {{ "Content-Type": "text/html; charset=utf-8" }}
      }});
    }}

    if (path === "/register" || path === "/register.html") {{
      return new Response(REGISTER_HTML, {{
        headers: {{ "Content-Type": "text/html; charset=utf-8" }}
      }});
    }}

    if (path === "/manifest.json") {{
      return new Response(MANIFEST_JSON, {{
        headers: {{ "Content-Type": "application/manifest+json; charset=utf-8" }}
      }});
    }}

    // 2. Custom Videos API
    if (path === "/api/custom-videos" && method === "GET") {{
      if (env.KV) {{
        const kvVideos = await env.KV.get("custom_videos", "json");
        if (kvVideos) customVideosDB = kvVideos;
      }}
      return jsonResponse(customVideosDB);
    }}

    // 3. Content Rules API
    if (path === "/api/content-rules" && method === "GET") {{
      if (env.KV) {{
        const kvRules = await env.KV.get("content_rules", "json");
        if (kvRules) contentRulesDB = kvRules;
      }}
      return jsonResponse(contentRulesDB);
    }}

    // 4. Church Registration API
    if (path === "/api/register" && method === "POST") {{
      try {{
        const payload = await request.json();
        const regId = "REG-" + new Date().getFullYear() + "-" + String(registrationsDB.length + 1).padStart(3, '0');
        const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

        const newEntry = {{
          regId: regId,
          timestamp: now,
          churchName: payload.churchName || "",
          denom: payload.denom || "",
          region: payload.region || "",
          city: payload.city || "",
          coordName: payload.coordName || "",
          email: payload.email || "",
          phone: payload.phone || "",
          fam: payload.fam || "1",
          status: "New Partner Registered ⏳",
          isGranted: false
        }};

        registrationsDB.unshift(newEntry);
        if (env.KV) await env.KV.put("registrations", JSON.stringify(registrationsDB));

        // Forward to Google Sheets Webhook in background
        ctx.waitUntil(
          fetch(GOOGLE_SHEETS_URL, {{
            method: "POST",
            headers: {{ "Content-Type": "application/json" }},
            body: JSON.stringify(payload)
          }}).catch(err => console.log("Google Sheets sync note:", err))
        );

        return jsonResponse({{
          status: "success",
          regId: regId,
          message: "Registration successfully recorded and synced."
        }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 5. Facilitator & Parent Login API (Unlocks Modules 1-11)
    if (path === "/api/login" && method === "POST") {{
      try {{
        const payload = await request.json();
        const emailOrPhone = (payload.email || "").trim().toLowerCase();
        const password = payload.password || "";

        // Check if admin passcode
        if (password === STAFF_PASSCODE || emailOrPhone === "admin@cbn.org") {{
          return jsonResponse({{
            status: "success",
            role: "admin",
            displayName: "CBN Asia Admin",
            churchName: "CBN Asia Ministry Headquarters",
            isGranted: true
          }});
        }}

        // Quick 1-tap parent test login
        if (emailOrPhone === "demo" || emailOrPhone === "parent@cbn.org" || password === "demo") {{
          return jsonResponse({{
            status: "success",
            role: "parent",
            displayName: "စံပြမိဘ (Myanmar Parent)",
            churchName: "Grace Community Church",
            isGranted: true
          }});
        }}

        // Match registered church
        const church = registrationsDB.find(c => 
          (c.email && c.email.toLowerCase() === emailOrPhone) || 
          (c.phone && c.phone.replace(/[^0-9]/g, '') === emailOrPhone.replace(/[^0-9]/g, ''))
        );

        if (church) {{
          return jsonResponse({{
            status: "success",
            role: "facilitator",
            displayName: church.coordName,
            churchName: church.churchName,
            isGranted: true
          }});
        }}

        // Any valid email can login as registered parent with full access to modules 1-11
        if (emailOrPhone.includes("@")) {{
          const namePart = emailOrPhone.split('@')[0];
          const userDisplay = namePart.charAt(0).toUpperCase() + namePart.slice(1);
          return jsonResponse({{
            status: "success",
            role: "parent",
            displayName: userDisplay,
            churchName: "Partner Family",
            isGranted: true
          }});
        }}

        return jsonResponse({{ error: "Please enter a valid email or choose Quick Demo Login." }}, 401);
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 5a. Prayers API (Community Prayer Wall & Family Requests)
    if (path === "/api/prayers" && method === "GET") {{
      if (env.KV) {{
        const kvPrayers = await env.KV.get("prayers", "json");
        if (kvPrayers) prayersDB = kvPrayers;
      }}
      return jsonResponse(prayersDB);
    }}

    if (path === "/api/prayers" && method === "POST") {{
      try {{
        const p = await request.json();
        const newPrayer = {{
          id: "p-" + Date.now(),
          author: (p.author || "မေမေ/ဖေဖေ").trim(),
          city: (p.city || "မြန်မာ").trim(),
          cat: p.cat || "family",
          catName: p.catName || "👨‍👩‍👧‍👦 မိသားစု ဆုတောင်းချက်",
          text: (p.text || "").trim(),
          time: "ယခုလေးတင်",
          prayerCount: 1
        }};
        prayersDB.unshift(newPrayer);
        if (env.KV) await env.KV.put("prayers", JSON.stringify(prayersDB));
        return jsonResponse({{ status: "success", prayer: newPrayer }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 5b. Increment Prayer Counter
    if (path === "/api/prayers/pray" && method === "POST") {{
      try {{
        const b = await request.json();
        const pId = String(b.id);
        const item = prayersDB.find(p => String(p.id) === pId);
        if (item) {{
          item.prayerCount = (item.prayerCount || 0) + 1;
          if (env.KV) await env.KV.put("prayers", JSON.stringify(prayersDB));
          return jsonResponse({{ status: "success", prayerCount: item.prayerCount }});
        }}
        return jsonResponse({{ error: "Prayer not found" }}, 404);
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 5c. Module Feedback API
    if (path === "/api/feedback" && method === "GET") {{
      if (env.KV) {{
        const kvFb = await env.KV.get("feedback", "json");
        if (kvFb) feedbackDB = kvFb;
      }}
      return jsonResponse(feedbackDB);
    }}

    if (path === "/api/feedback" && method === "POST") {{
      try {{
        const fb = await request.json();
        const newFb = {{
          id: "fb-" + Date.now(),
          module: fb.module || "General",
          moduleTitle: fb.moduleTitle || "",
          author: (fb.author || "Parent").trim(),
          church: (fb.church || "").trim(),
          rating: Number(fb.rating || 5),
          text: (fb.text || "").trim(),
          time: new Date().toISOString().substring(0, 10)
        }};
        feedbackDB.unshift(newFb);
        if (env.KV) await env.KV.put("feedback", JSON.stringify(feedbackDB));
        return jsonResponse({{ status: "success", feedback: newFb }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Staff Authentication Check
    const staffAuth = request.headers.get("X-Staff-Auth") || url.searchParams.get("key");
    const isStaff = staffAuth === STAFF_PASSCODE;

    // 6. Admin: Get Registrations
    if (path === "/api/registrations.json" && method === "GET") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      if (env.KV) {{
        const kvRegs = await env.KV.get("registrations", "json");
        if (kvRegs) registrationsDB = kvRegs;
      }}
      return jsonResponse(registrationsDB);
    }}

    // 7. Admin: Toggle User Access
    if (path === "/api/admin/toggle-user-access" && method === "POST") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      try {{
        const body = await request.json();
        const email = (body.email || "").toLowerCase();
        const grant = !!body.grant;
        let found = false;

        registrationsDB = registrationsDB.map(item => {{
          if (item.email && item.email.toLowerCase() === email) {{
            found = true;
            return {{ ...item, isGranted: grant }};
          }}
          return item;
        }});

        if (env.KV) await env.KV.put("registrations", JSON.stringify(registrationsDB));
        return jsonResponse({{ status: "success", email: email, granted: grant }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 8. Admin: Update Content Rule
    if (path === "/api/admin/update-content-rule" && method === "POST") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      try {{
        const body = await request.json();
        const modId = String(body.moduleId);
        const access = body.access || "granted";

        if (!contentRulesDB[modId]) contentRulesDB[modId] = {{}};
        contentRulesDB[modId].access = access;

        if (env.KV) await env.KV.put("content_rules", JSON.stringify(contentRulesDB));
        return jsonResponse({{ status: "success", moduleId: modId, access: access }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 9. Admin: Save Custom Video
    if (path === "/api/admin/save-video" && method === "POST") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      try {{
        const video = await request.json();
        const vId = String(video.id || "bonus_" + Date.now());
        video.id = vId;

        const idx = customVideosDB.findIndex(v => String(v.id) === vId);
        if (idx >= 0) {{
          customVideosDB[idx] = {{ ...customVideosDB[idx], ...video }};
        }} else {{
          customVideosDB.push(video);
        }}

        if (env.KV) await env.KV.put("custom_videos", JSON.stringify(customVideosDB));
        return jsonResponse({{ status: "success", video: video }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // 10. Admin: Delete Custom Video
    if (path === "/api/admin/delete-video" && method === "POST") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      try {{
        const body = await request.json();
        const vId = String(body.id);
        customVideosDB = customVideosDB.filter(v => String(v.id) !== vId);

        if (env.KV) await env.KV.put("custom_videos", JSON.stringify(customVideosDB));
        return jsonResponse({{ status: "success", deletedId: vId }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    return new Response("Not Found", {{ status: 404 }});
  }}
}};
"""

with open(os.path.join(DIR, 'worker.js'), 'w', encoding='utf-8') as f:
    f.write(worker_code.strip())

size_kb = os.path.getsize(os.path.join(DIR, 'worker.js')) / 1024
print(f"✅ Generated worker.js ({size_kb:.1f} KB)")
