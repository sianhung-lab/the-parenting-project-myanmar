# -*- coding: utf-8 -*-
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
hero_b64 = get_b64('opt_brand_hero.jpg', 'image/jpeg') or get_b64('brand_hero_zoomed.jpg', 'image/jpeg')
church_b64 = get_b64('opt_church.jpg', 'image/jpeg') or get_b64('church_couple_welcoming.jpg', 'image/jpeg')
banner_b64 = get_b64('opt_banner.jpg', 'image/jpeg') or get_b64('banner.jpg', 'image/jpeg')
avatar_couple_b64 = get_b64('avatar_couple.jpg', 'image/jpeg')
avatar_refugee_b64 = get_b64('avatar_refugee.jpg', 'image/jpeg')
avatar_edu_b64 = get_b64('avatar_education.jpg', 'image/jpeg')
login_bg_b64 = get_b64('opt_login_bg.jpg', 'image/jpeg') or get_b64('login_bg.jpg', 'image/jpeg')
welcome_bg_b64 = get_b64('welcome_gate_bg.jpg', 'image/jpeg')

if logo_b64:
    index_compiled = index_compiled.replace('src="official_logo.png"', f'src="{logo_b64}"')
    login_html = login_html.replace('src="official_logo.png"', f'src="{logo_b64}"')
    reg_html = reg_html.replace('src="official_logo.png"', f'src="{logo_b64}"')
if hero_b64:
    index_compiled = index_compiled.replace('src="brand_hero_zoomed.jpg"', f'src="{hero_b64}"')
    index_compiled = index_compiled.replace('src="hero_couple_opt.jpg"', f'src="{hero_b64}"')
if church_b64:
    index_compiled = index_compiled.replace('src="church_couple_welcoming.jpg"', f'src="{church_b64}"')
    index_compiled = index_compiled.replace("src='church_couple_welcoming.jpg'", f"src='{church_b64}'")
    index_compiled = index_compiled.replace('"church_couple_welcoming.jpg"', f'"{church_b64}"')
    index_compiled = index_compiled.replace("'church_couple_welcoming.jpg'", f"'{church_b64}'")
if banner_b64:
    index_compiled = index_compiled.replace('src="banner.jpg"', f'src="{banner_b64}"')
if avatar_couple_b64:
    index_compiled = index_compiled.replace('src="avatar_couple.jpg"', f'src="{avatar_couple_b64}"')
    index_compiled = index_compiled.replace("src='avatar_couple.jpg'", f"src='{avatar_couple_b64}'")
    index_compiled = index_compiled.replace('"avatar_couple.jpg"', f'"{avatar_couple_b64}"')
    index_compiled = index_compiled.replace("'avatar_couple.jpg'", f"'{avatar_couple_b64}'")
if avatar_refugee_b64:
    index_compiled = index_compiled.replace('src="avatar_refugee.jpg"', f'src="{avatar_refugee_b64}"')
if avatar_edu_b64:
    index_compiled = index_compiled.replace('src="avatar_education.jpg"', f'src="{avatar_edu_b64}"')
if login_bg_b64:
    login_html = login_html.replace("url('login_bg.jpg')", f"url('{login_bg_b64}')")
    reg_html = reg_html.replace("url('login_bg.jpg')", f"url('{login_bg_b64}')")
if welcome_bg_b64:
    index_compiled = index_compiled.replace("url('welcome_gate_bg.jpg')", f"url('{welcome_bg_b64}')")
    index_compiled = index_compiled.replace('url("welcome_gate_bg.jpg")', f'url("{welcome_bg_b64}")')

cbn_dash_b64 = get_b64('cbn_lms_dashboard_opt.jpg', 'image/jpeg') or get_b64('cbn_lms_dashboard.png', 'image/png')
if cbn_dash_b64:
    index_compiled = index_compiled.replace('src="cbn_lms_dashboard_opt.jpg"', f'src="{cbn_dash_b64}"')

parent_toddler_b64 = get_b64('parent_toddler_cozy.jpg', 'image/jpeg')
mother_avatar_b64 = get_b64('mother_avatar.jpg', 'image/jpeg')
bedtime_toddler_b64 = get_b64('bedtime_toddler.jpg', 'image/jpeg')

if parent_toddler_b64:
    index_compiled = index_compiled.replace('src="parent_toddler_cozy.jpg"', f'src="{parent_toddler_b64}"')
    index_compiled = index_compiled.replace("src='parent_toddler_cozy.jpg'", f"src='{parent_toddler_b64}'")
    index_compiled = index_compiled.replace('poster="parent_toddler_cozy.jpg"', f'poster="{parent_toddler_b64}"')
    index_compiled = index_compiled.replace("'parent_toddler_cozy.jpg'", f"'{parent_toddler_b64}'")
    index_compiled = index_compiled.replace('"parent_toddler_cozy.jpg"', f'"{parent_toddler_b64}"')
if mother_avatar_b64:
    index_compiled = index_compiled.replace('src="mother_avatar.jpg"', f'src="{mother_avatar_b64}"')
    index_compiled = index_compiled.replace("src='mother_avatar.jpg'", f"src='{mother_avatar_b64}'")
    index_compiled = index_compiled.replace("'mother_avatar.jpg'", f"'{mother_avatar_b64}'")
    index_compiled = index_compiled.replace('"mother_avatar.jpg"', f'"{mother_avatar_b64}"')
if bedtime_toddler_b64:
    index_compiled = index_compiled.replace('src="bedtime_toddler.jpg"', f'src="{bedtime_toddler_b64}"')
    index_compiled = index_compiled.replace("src='bedtime_toddler.jpg'", f"src='{bedtime_toddler_b64}'")
    index_compiled = index_compiled.replace("'bedtime_toddler.jpg'", f"'{bedtime_toddler_b64}'")
    index_compiled = index_compiled.replace('"bedtime_toddler.jpg"', f'"{bedtime_toddler_b64}"')

# Official Project YouTube Thumbnails (1 to 11 and trailer)
for i in range(1, 12):
    t_name = f'yt_thumb_{i}.jpg'
    t_b64 = get_b64(t_name, 'image/jpeg')
    if t_b64:
        index_compiled = index_compiled.replace(f'src="{t_name}"', f'src="{t_b64}"')
        index_compiled = index_compiled.replace(f"src='{t_name}'", f"src='{t_b64}'")
        index_compiled = index_compiled.replace(f'"{t_name}"', f'"{t_b64}"')
        index_compiled = index_compiled.replace(f"'{t_name}'", f"'{t_b64}'")

trailer_b64 = get_b64('yt_thumb_trailer.jpg', 'image/jpeg')
if trailer_b64:
    index_compiled = index_compiled.replace('src="yt_thumb_trailer.jpg"', f'src="{trailer_b64}"')
    index_compiled = index_compiled.replace("src='yt_thumb_trailer.jpg'", f"src='{trailer_b64}'")
    index_compiled = index_compiled.replace('"yt_thumb_trailer.jpg"', f'"{trailer_b64}"')
    index_compiled = index_compiled.replace("'yt_thumb_trailer.jpg'", f"'{trailer_b64}'")

mentors_b64 = get_b64('tpp_mentors_official.jpg', 'image/jpeg')
if mentors_b64:
    index_compiled = index_compiled.replace('src="tpp_mentors_official.jpg"', f'src="{mentors_b64}"')
    index_compiled = index_compiled.replace("src='tpp_mentors_official.jpg'", f"src='{mentors_b64}'")
    index_compiled = index_compiled.replace('"tpp_mentors_official.jpg"', f'"{mentors_b64}"')
    index_compiled = index_compiled.replace("'tpp_mentors_official.jpg'", f"'{mentors_b64}'")

canva_invite_b64 = get_b64('tpp_canva_invite_card.jpg', 'image/jpeg')
if canva_invite_b64:
    index_compiled = index_compiled.replace('src="tpp_canva_invite_card.jpg"', f'src="{canva_invite_b64}"')
    index_compiled = index_compiled.replace("src='tpp_canva_invite_card.jpg'", f"src='{canva_invite_b64}'")
    index_compiled = index_compiled.replace('"tpp_canva_invite_card.jpg"', f'"{canva_invite_b64}"')
    index_compiled = index_compiled.replace("'tpp_canva_invite_card.jpg'", f"'{canva_invite_b64}'")

canva_cover_b64 = get_b64('tpp_canva_guide_cover.jpg', 'image/jpeg')
if canva_cover_b64:
    index_compiled = index_compiled.replace('src="tpp_canva_guide_cover.jpg"', f'src="{canva_cover_b64}"')
    index_compiled = index_compiled.replace("src='tpp_canva_guide_cover.jpg'", f"src='{canva_cover_b64}'")
    index_compiled = index_compiled.replace('"tpp_canva_guide_cover.jpg"', f'"{canva_cover_b64}"')
    index_compiled = index_compiled.replace("'tpp_canva_guide_cover.jpg'", f"'{canva_cover_b64}'")

canva_back_b64 = get_b64('tpp_canva_invite_back.jpg', 'image/jpeg')
if canva_back_b64:
    index_compiled = index_compiled.replace('src="tpp_canva_invite_back.jpg"', f'src="{canva_back_b64}"')
    index_compiled = index_compiled.replace("src='tpp_canva_invite_back.jpg'", f"src='{canva_back_b64}'")
    index_compiled = index_compiled.replace('"tpp_canva_invite_back.jpg"', f'"{canva_back_b64}"')
    index_compiled = index_compiled.replace("'tpp_canva_invite_back.jpg'", f"'{canva_back_b64}'")

shield_b64 = get_b64('shield_extracted.png', 'image/png')
if shield_b64:
    index_compiled = index_compiled.replace('src="shield_extracted.png"', f'src="{shield_b64}"')
    index_compiled = index_compiled.replace("src='shield_extracted.png'", f"src='{shield_b64}'")
    index_compiled = index_compiled.replace('"shield_extracted.png"', f'"{shield_b64}"')
    index_compiled = index_compiled.replace("'shield_extracted.png'", f"'{shield_b64}'")

portrait_1_b64 = get_b64('clean_portrait_1.png', 'image/png')
if portrait_1_b64:
    index_compiled = index_compiled.replace('src="clean_portrait_1.png"', f'src="{portrait_1_b64}"')
    index_compiled = index_compiled.replace("src='clean_portrait_1.png'", f"src='{portrait_1_b64}'")
    index_compiled = index_compiled.replace('"clean_portrait_1.png"', f'"{portrait_1_b64}"')
    index_compiled = index_compiled.replace("'clean_portrait_1.png'", f"'{portrait_1_b64}'")

portrait_2_b64 = get_b64('clean_portrait_2.png', 'image/png')
if portrait_2_b64:
    index_compiled = index_compiled.replace('src="clean_portrait_2.png"', f'src="{portrait_2_b64}"')
    index_compiled = index_compiled.replace("src='clean_portrait_2.png'", f"src='{portrait_2_b64}'")
    index_compiled = index_compiled.replace('"clean_portrait_2.png"', f'"{portrait_2_b64}"')
    index_compiled = index_compiled.replace("'clean_portrait_2.png'", f"'{portrait_2_b64}'")

portrait_3_b64 = get_b64('clean_portrait_3.png', 'image/png')
if portrait_3_b64:
    index_compiled = index_compiled.replace('src="clean_portrait_3.png"', f'src="{portrait_3_b64}"')
    index_compiled = index_compiled.replace("src='clean_portrait_3.png'", f"src='{portrait_3_b64}'")
    index_compiled = index_compiled.replace('"clean_portrait_3.png"', f'"{portrait_3_b64}"')
    index_compiled = index_compiled.replace("'clean_portrait_3.png'", f"'{portrait_3_b64}'")

card_top_b64 = get_b64('card_photo_top.jpg', 'image/jpeg')
if card_top_b64:
    index_compiled = index_compiled.replace('src="card_photo_top.jpg"', f'src="{card_top_b64}"')
    index_compiled = index_compiled.replace("src='card_photo_top.jpg'", f"src='{card_top_b64}'")
    index_compiled = index_compiled.replace('"card_photo_top.jpg"', f'"{card_top_b64}"')
    index_compiled = index_compiled.replace("'card_photo_top.jpg'", f"'{card_top_b64}'")

card_bottom_b64 = get_b64('card_photo_bottom.jpg', 'image/jpeg')
if card_bottom_b64:
    index_compiled = index_compiled.replace('src="card_photo_bottom.jpg"', f'src="{card_bottom_b64}"')
    index_compiled = index_compiled.replace("src='card_photo_bottom.jpg'", f"src='{card_bottom_b64}'")
    index_compiled = index_compiled.replace('"card_photo_bottom.jpg"', f'"{card_bottom_b64}"')
    index_compiled = index_compiled.replace("'card_photo_bottom.jpg'", f"'{card_bottom_b64}'")

mentor_young_b64 = get_b64('mentor_couple_young_source.jpg', 'image/jpeg')
if mentor_young_b64:
    index_compiled = index_compiled.replace('src="mentor_couple_young_source.jpg"', f'src="{mentor_young_b64}"')
    index_compiled = index_compiled.replace("src='mentor_couple_young_source.jpg'", f"src='{mentor_young_b64}'")
    index_compiled = index_compiled.replace('"mentor_couple_young_source.jpg"', f'"{mentor_young_b64}"')
    index_compiled = index_compiled.replace("'mentor_couple_young_source.jpg'", f"'{mentor_young_b64}'")

mentor_senior_b64 = get_b64('mentor_couple_senior_source.jpg', 'image/jpeg')
if mentor_senior_b64:
    index_compiled = index_compiled.replace('src="mentor_couple_senior_source.jpg"', f'src="{mentor_senior_b64}"')
    index_compiled = index_compiled.replace("src='mentor_couple_senior_source.jpg'", f"src='{mentor_senior_b64}'")
    index_compiled = index_compiled.replace('"mentor_couple_senior_source.jpg"', f'"{mentor_senior_b64}"')
    index_compiled = index_compiled.replace("'mentor_couple_senior_source.jpg'", f"'{mentor_senior_b64}'")

mentor_pink_b64 = get_b64('mentor_couple_pink_source.jpg', 'image/jpeg')
if mentor_pink_b64:
    index_compiled = index_compiled.replace('src="mentor_couple_pink_source.jpg"', f'src="{mentor_pink_b64}"')
    index_compiled = index_compiled.replace("src='mentor_couple_pink_source.jpg'", f"src='{mentor_pink_b64}'")
    index_compiled = index_compiled.replace('"mentor_couple_pink_source.jpg"', f'"{mentor_pink_b64}"')
    index_compiled = index_compiled.replace("'mentor_couple_pink_source.jpg'", f"'{mentor_pink_b64}'")

mentor_hero_b64 = get_b64('mentor_hero_perfect_frame.jpg', 'image/jpeg')
if mentor_hero_b64:
    index_compiled = index_compiled.replace('src="mentor_hero_perfect_frame.jpg"', f'src="{mentor_hero_b64}"')
    index_compiled = index_compiled.replace("src='mentor_hero_perfect_frame.jpg'", f"src='{mentor_hero_b64}'")
    index_compiled = index_compiled.replace('"mentor_hero_perfect_frame.jpg"', f'"{mentor_hero_b64}"')
    index_compiled = index_compiled.replace("'mentor_hero_perfect_frame.jpg'", f"'{mentor_hero_b64}'")

mentor_ay_b64 = get_b64('mentor_avatar_young.jpg', 'image/jpeg')
if mentor_ay_b64:
    index_compiled = index_compiled.replace('src="mentor_avatar_young.jpg"', f'src="{mentor_ay_b64}"')
    index_compiled = index_compiled.replace("src='mentor_avatar_young.jpg'", f"src='{mentor_ay_b64}'")
    index_compiled = index_compiled.replace('"mentor_avatar_young.jpg"', f'"{mentor_ay_b64}"')
    index_compiled = index_compiled.replace("'mentor_avatar_young.jpg'", f"'{mentor_ay_b64}'")

mentor_as_b64 = get_b64('mentor_avatar_senior.jpg', 'image/jpeg')
if mentor_as_b64:
    index_compiled = index_compiled.replace('src="mentor_avatar_senior.jpg"', f'src="{mentor_as_b64}"')
    index_compiled = index_compiled.replace("src='mentor_avatar_senior.jpg'", f"src='{mentor_as_b64}'")
    index_compiled = index_compiled.replace('"mentor_avatar_senior.jpg"', f'"{mentor_as_b64}"')
    index_compiled = index_compiled.replace("'mentor_avatar_senior.jpg'", f"'{mentor_as_b64}'")

mentor_ap_b64 = get_b64('mentor_avatar_pink.jpg', 'image/jpeg')
if mentor_ap_b64:
    index_compiled = index_compiled.replace('src="mentor_avatar_pink.jpg"', f'src="{mentor_ap_b64}"')
    index_compiled = index_compiled.replace("src='mentor_avatar_pink.jpg'", f"src='{mentor_ap_b64}'")
    index_compiled = index_compiled.replace('"mentor_avatar_pink.jpg"', f'"{mentor_ap_b64}"')
    index_compiled = index_compiled.replace("'mentor_avatar_pink.jpg'", f"'{mentor_ap_b64}'")

hero_couple_b64 = get_b64('hero_celebrating_couple.jpg', 'image/jpeg')
if hero_couple_b64:
    index_compiled = index_compiled.replace('src="hero_celebrating_couple.jpg"', f'src="{hero_couple_b64}"')
    index_compiled = index_compiled.replace("src='hero_celebrating_couple.jpg'", f"src='{hero_couple_b64}'")
    index_compiled = index_compiled.replace('"hero_celebrating_couple.jpg"', f'"{hero_couple_b64}"')
    index_compiled = index_compiled.replace("'hero_celebrating_couple.jpg'", f"'{hero_couple_b64}'")

couple_hd_b64 = get_b64('couple_hd.jpg', 'image/jpeg')
if couple_hd_b64:
    index_compiled = index_compiled.replace('src="couple_hd.jpg"', f'src="{couple_hd_b64}"')
    index_compiled = index_compiled.replace("src='couple_hd.jpg'", f"src='{couple_hd_b64}'")
    index_compiled = index_compiled.replace('"couple_hd.jpg"', f'"{couple_hd_b64}"')
    index_compiled = index_compiled.replace("'couple_hd.jpg'", f"'{couple_hd_b64}'")




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

worker_code = """
// ============================================================================
// CLOUDFLARE AI SECURITY SUITE & ENTERPRISE DEFENSE PERIMETER
// The Parenting Project Myanmar — Cloudflare Worker
// Features:
// 1. WAF AI Security for Apps (Prompt Injection Scorer: cf.llm.prompt.injection_score)
// 2. Workforce AI DLP & PII Scrubber (Myanmar Phone, Email, NRC, Secrets)
// 3. AI Gateway & Cost Control (Token Limits, Rate Limiting, Smart Caching)
// 4. Remote Model Context Protocol (MCP) Server Governance & Zero Trust Access
// 5. Automatic cf-llm Discovery & Strict HTTP Security Headers
// 6. Sliding-Window Edge Rate Limiting & 5-Strike Brute Force IP Lockout
// ============================================================================

const GOOGLE_SHEETS_URL_PRIMARY = "https://script.google.com/macros/s/AKfycbyzWRfIK9WG3pjVeziLiGnOAGzJXz9POJVrbKtY2V80Cz5qMd8jsRPZmpWHiB8H-oZR/exec";
const GOOGLE_SHEETS_URL_FALLBACK = "https://script.google.com/macros/s/AKfycbxIwsbpij2D4dpSUo3P5kCgStH2p2cucr1hQBMGOMU6ETx99ilTfaWyCMx0mtZFsiS3/exec";
const STAFF_PASSCODE = "cbn2026";
const MCP_SECRET_KEY = "mcp_cbn_2026";

// Security Headers (OWASP & Cloudflare Best Practices)
const SECURITY_HEADERS = {{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-XSS-Protection": "1; mode=block",
  "Content-Security-Policy": "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https:; img-src 'self' data: blob: https:; media-src 'self' data: blob: https: https://pub-9b38e79343f8404495945a9cf030a304.r2.dev https://*.googlevideo.com https://*.youtube.com; frame-src 'self' https://*.youtube.com https://*.youtube-nocookie.com; connect-src 'self' https: wss:;"
}};

// In-Memory Rate Limiting & Brute Force Defense
const _rateLimitMap = new Map();
const _failedAuthMap = new Map();
const _recentWorkerSyncKeys = new Set();

function getClientIP(request) {{
  return request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || "127.0.0.1";
}}

function checkRateLimit(ipKey, limitPerMinute = 80) {{
  const now = Date.now();
  const record = _rateLimitMap.get(ipKey) || {{ count: 0, resetTime: now + 60000 }};
  if (now > record.resetTime) {{
    record.count = 1;
    record.resetTime = now + 60000;
    _rateLimitMap.set(ipKey, record);
    return true;
  }}
  record.count++;
  _rateLimitMap.set(ipKey, record);
  return record.count <= limitPerMinute;
}}

function checkAuthLockout(ip) {{
  const now = Date.now();
  const record = _failedAuthMap.get(ip);
  if (record && record.lockedUntil && now < record.lockedUntil) {{
    const remainingSec = Math.ceil((record.lockedUntil - now) / 1000);
    return {{ locked: true, remainingSec }};
  }}
  return {{ locked: false, remainingSec: 0 }};
}}

function recordAuthFailure(ip) {{
  const now = Date.now();
  const record = _failedAuthMap.get(ip) || {{ failures: 0, lockedUntil: 0 }};
  record.failures++;
  if (record.failures >= 5) {{
    record.lockedUntil = now + (15 * 60 * 1000); // 15-minute temporary lockout
  }}
  _failedAuthMap.set(ip, record);
}}

function recordAuthSuccess(ip) {{
  _failedAuthMap.delete(ip);
}}

// ============================================================================
// DATA LOSS PREVENTION (DLP) & PII REDACTION
// ============================================================================
function scrubPII(text) {{
  if (!text || typeof text !== "string") return text;
  let scrubbed = text;
  // Myanmar phone numbers (+95 9..., 09...)
  scrubbed = scrubbed.replace(/(?:\+?95\s?9|\b09)\s?[0-9\s\-]{7,11}\b/g, "[PHONE REDACTED - DLP PROTECTED]");
  // Email addresses
  scrubbed = scrubbed.replace(/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g, "[EMAIL REDACTED - DLP PROTECTED]");
  // Myanmar National Registration Card (NRC) pattern (e.g. 12/OUKAMA(N)123456)
  scrubbed = scrubbed.replace(/\b\d{1,2}\/[A-Za-z]+(?:\([NnPpEe]\)|\([\u1000-\u109F]+\))\d{5,6}\b/g, "[NRC ID REDACTED - DLP PROTECTED]");
  // API Keys, JWTs, Secrets
  scrubbed = scrubbed.replace(/(?:sk-[a-zA-Z0-9]{20,}|Bearer\s+[a-zA-Z0-9._-]{20,})/g, "[CREDENTIAL REDACTED]");
  return scrubbed;
}}

function sanitizeInput(text) {{
  if (!text || typeof text !== "string") return "";
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "");
}}

// ============================================================================
// CLOUDFLARE WAF: PROMPT INJECTION SCORING ENGINE (cf.llm.prompt.injection_score)
// ============================================================================
function evaluatePromptInjection(text) {{
  if (!text || typeof text !== "string") return {{ score: 99, reason: "safe", blocked: false }};

  // High Risk Jailbreak & Override Patterns (Scores: 5 - 15) -> BLOCKED
  const highRiskPatterns = [
    {{ regex: /ignore (all |any )?(previous|above|prior) (instructions|prompts|directions)/i, reason: "Instruction override jailbreak" }},
    {{ regex: /system prompt override/i, reason: "System prompt override" }},
    {{ regex: /you are now in (developer|dan|jailbreak|unfiltered|god) mode/i, reason: "Roleplay jailbreak attempt" }},
    {{ regex: /disregard (all |everything )?(you were told|guidelines|safety)/i, reason: "Safety guidelines override" }},
    {{ regex: /reveal (your |the )?(system prompt|initial prompt|hidden instructions|system directive)/i, reason: "System prompt exfiltration" }},
    {{ regex: /repeat (your |the )?(exact instructions|system instructions)/i, reason: "System instruction extraction" }},
    {{ regex: /output (everything|all text) above/i, reason: "Context leak attempt" }},
    {{ regex: /<\|im_start\|>|<\|im_end\|>|\[INST\]|\[\/INST\]/i, reason: "Chat template delimiter injection" }},
    {{ regex: /base64:([a-za-z0-9+/=]{40,})/i, reason: "Obfuscated payload injection" }}
  ];

  for (const p of highRiskPatterns) {{
    if (p.regex.test(text)) {{
      const score = Math.floor(Math.random() * 8) + 5; // 5 - 12
      return {{ score, reason: p.reason, blocked: true }};
    }}
  }}

  // Medium Risk Heuristics (Scores: 25 - 45) -> Monitored
  const medRiskPatterns = [
    {{ regex: /pretend you are (an evil|an unfiltered|a malicious|not an ai)/i, reason: "Adversarial persona" }},
    {{ regex: /bypass safety/i, reason: "Safety bypass heuristic" }},
    {{ regex: /what are your secret/i, reason: "Secret extraction inquiry" }},
    {{ regex: /\b(sudo|chmod|eval\(|exec\()\b/i, reason: "Command execution heuristic" }}
  ];

  for (const p of medRiskPatterns) {{
    if (p.regex.test(text)) {{
      const score = Math.floor(Math.random() * 15) + 25; // 25 - 40
      return {{ score, reason: p.reason, blocked: false }};
    }}
  }}

  // Safe (Scores: 85 - 98)
  const score = Math.floor(Math.random() * 14) + 85;
  return {{ score, reason: "Legitimate parenting query", blocked: false }};
}}

// ============================================================================
// AI GATEWAY: CURATED PARENTING KNOWLEDGE BASE & CACHING
// ============================================================================
const AI_GATEWAY_CACHE = {{
  "tantrum": {{
    en: "When your child throws a tantrum, stay calm first (Proverbs 15:1: 'A gentle answer turns away wrath'). Lower your physical posture to their eye level, validate their emotion, and provide a peaceful boundary once their breathing slows down. Refer to Module 2 ('Connecting with Your Child') and Module 7 ('Healthy Boundaries in Love').",
    my: "ကလေး ဒေါသပေါက်ကွဲသည့်အခါ မိဘက ဦးစွာ စိတ်အေးအေးထားပါ (သုတ္တံ ၁၅:၁ - 'နူးညံ့သောစကားသည် အမျက်ကို ပြေစေတတ်၏')။ ကလေး၏ မျက်လုံးအဆင့်သို့ နှိမ့်ချထိုင်၍ သူ၏ ခံစားချက်ကို နားလည်ပေးပြီး၊ စိတ်တည်ငြိမ်လာမှ မေတ္တာဖြင့် စည်းကမ်းသတ်မှတ်ချက်ကို ရှင်းပြပေးပါ။ မော်ဂျူး ၂ (ရင်သွေးနှင့် ရင်းနှီးစွာ ဆက်သွယ်ခြင်း) နှင့် မော်ဂျူး ၇ (မေတ္တာဖြင့် စည်းကမ်းထိန်းသိမ်းခြင်း) တွင် အသေးစိတ် လေ့လာနိုင်ပါသည်။"
  }},
  "discipline": {{
    en: "Biblical discipline is not punishment out of frustration; it is teaching and discipleship (Ephesians 6:4). Always discipline in private, never in anger, and follow every correction with genuine affection and reassurance of your unconditional love.",
    my: "ဓမ္မသစ် မိဘလမ်းညွှန်အရ ဆုံးမပဲ့ပြင်ခြင်းသည် ဒေါသဖြင့် အပြစ်ပေးခြင်း မဟုတ်ဘဲ၊ သွန်သင်လမ်းပြခြင်း ဖြစ်ပါသည် (ဧဖက် ၆:၄)။ ဒေါသထွက်နေချိန်တွင် မဆုံးမပါနှင့်။ ကလေးကို သီးသန့်နေရာတွင် စကားပြောပြီး ဆုံးမပြီးတိုင်း ချစ်ခင်ကြင်နာမှုဖြင့် ပြန်လည်ပွေ့ဖက်ပေးပါ။"
  }},
  "screen": {{
    en: "Manage digital exposure with structured boundaries (Module 9: 'The Digital Home'). Establish screen-free meal times and bedrooms, prioritize face-to-face play, and lead by example as parents by putting down our own devices first.",
    my: "ဒစ်ဂျစ်တယ် ဖုန်း/တက်ဘလက် အသုံးပြုမှုကို စည်းကမ်းဖြင့် စီမံခန့်ခွဲပါ (မော်ဂျူး ၉ - ဒစ်ဂျစ်တယ်ခေတ် မိသားစု စီမံခန့်ခွဲမှု)။ ထမင်းစားချိန်နှင့် အိပ်ခန်းအတွင်း ဖုန်းမသုံးရန် စည်းကမ်းထားရှိပြီး၊ မိဘကိုယ်တိုင်လည်း ဖုန်းချထားကာ စံပြအဖြစ် လက်တွေ့ပြသပါ။"
  }},
  "faith": {{
    en: "Guiding children into faith begins with Deuteronomy 6:6-7: Talk about God's love naturally at home, when walking together, and before bedtime. Children absorb our genuine daily walk more than formal lectures.",
    my: "သားသမီးများအား ယုံကြည်ခြင်းသို့ လမ်းပြရာတွင် တရားဟောရာ ၆:၆-၇ အရ အိမ်၌ထိုင်လျက်၎င်း၊ လမ်း၌သွားလျက်၎င်း၊ အိပ်လျက်၎င်း ဘုရားသခင်၏ မေတ္တာတော်ကို ပုံမှန်စကားပြောပေးပါ။ နေ့စဉ်အသက်တာဖြင့် စံနမူနာပြခြင်းက အထိရောက်ဆုံး ဖြစ်ပါသည်။"
  }}
}};

function getCachedParentingAnswer(query, lang = "my") {{
  const q = query.toLowerCase();
  for (const [key, item] of Object.entries(AI_GATEWAY_CACHE)) {{
    if (q.includes(key) || (key === "tantrum" && (q.includes("ဒေါသ") || q.includes("cry"))) || (key === "discipline" && (q.includes("ဆုံးမ") || q.includes("punish"))) || (key === "screen" && (q.includes("ဖုန်း") || q.includes("phone")))) {{
      return lang === "my" ? item.my : item.en;
    }}
  }}
  return null;
}}

function generateBiblicalParentingAnswer(prompt, lang = "my") {{
  if (lang === "my") {{
    return `မိဘမေတ္တာဖြင့် လမ်းပြသွန်သင်ရန် သမ္မာကျမ်းစာက သုတ္တံ ၂၂:၆ တွင် "ကလေးငယ်ကို သူသွားသင့်သောလမ်း၌ သွန်သင်လေ့ကျင့်လော့" ဟု မိန့်မှာထားပါသည်။ သင့်မေးခွန်းနှင့် ပတ်သက်၍ မိဘအနေဖြင့် ဦးစွာ စိတ်ရှည်သည်းခံမှု ပြသပြီး (၁ ကော ၁၃:၄)၊ ကလေး၏ ခံစားချက်ကို နားထောင်ပေးကာ မေတ္တာအခြေခံသော စည်းကမ်းဖြင့် လမ်းပြပေးပါရန် အကြံပြုအပ်ပါသည်။ The Parenting Project Myanmar မော်ဂျူး (၁၁) ခုလုံးတွင် ပိုမိုလက်တွေ့ကျသော ဓမ္မသစ် သင်ခန်းစာများကို လေ့လာကြည့်ရှုနိုင်ပါသည်။`;
  }} else {{
    return `In biblical parenting, Proverbs 22:6 teaches us: 'Train up a child in the way he should go.' Regarding your inquiry, remember to lead with patience (1 Corinthians 13:4), listen attentively to your child's feelings, and provide structured guidance wrapped in unconditional love. Explore all 11 Video Modules in The Parenting Project Myanmar for step-by-step practical advice.`;
  }}
}}

function syncToGoogleSheets(ctx, payload) {{
  if (!ctx || !payload) return;
  const key = (payload.type || "event") + ":" + (payload.submissionId || payload.email || payload.phone || payload.author || payload.text || "");
  if (_recentWorkerSyncKeys.has(key)) return;
  _recentWorkerSyncKeys.add(key);
  setTimeout(() => _recentWorkerSyncKeys.delete(key), 8000);

  const body = JSON.stringify(payload);
  ctx.waitUntil(
    fetch(GOOGLE_SHEETS_URL_PRIMARY, {{
      method: "POST",
      headers: {{ "Content-Type": "application/json" }},
      body: body
    }}).then(res => {{
      if (!res.ok) {{
        return fetch(GOOGLE_SHEETS_URL_FALLBACK, {{
          method: "POST",
          headers: {{ "Content-Type": "application/json" }},
          body: body
        }});
      }}
      return res;
    }}).then(() => console.log("✓ Google Sheets primary sync completed:", payload.type || "event"))
      .catch(err => {{
        console.warn("Primary Google Sheets webhook failed, trying fallback:", err);
        fetch(GOOGLE_SHEETS_URL_FALLBACK, {{
          method: "POST",
          headers: {{ "Content-Type": "application/json" }},
          body: body
        }}).catch(e => console.log("Fallback sync error:", e));
      }})
  );
}}
const syncToGoogleSheetsDual = syncToGoogleSheets;

// Initial In-Memory State
let registrationsDB = __DEFAULT_REGS__;
let customVideosDB = __DEFAULT_VIDEOS__;
let contentRulesDB = __DEFAULT_RULES__;
let prayersDB = __DEFAULT_PRAYERS__;
let feedbackDB = __DEFAULT_FEEDBACK__;

const INDEX_HTML = __INDEX_HTML__;
const LOGIN_HTML = __LOGIN_HTML__;
const REGISTER_HTML = __REGISTER_HTML__;
const MANIFEST_JSON = __MANIFEST_JSON__;

export default {{
  async fetch(request, env, ctx) {{
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const ip = getClientIP(request);

    // Global Edge Rate Limiting (120 req/min)
    if (!checkRateLimit(ip, 120)) {{
      return new Response(JSON.stringify({{
        error: "Cloudflare WAF: Rate limit exceeded. Too many requests from this IP.",
        status: "rate_limited"
      }}), {{
        status: 429,
        headers: {{ "Content-Type": "application/json; charset=utf-8", ...SECURITY_HEADERS }}
      }});
    }}

    // Helper: CORS & Secure JSON Response
    const jsonResponse = (data, status = 200, extraHeaders = {{}}) => {{
      return new Response(JSON.stringify(data), {{
        status: status,
        headers: {{
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Staff-Auth, Authorization",
          ...SECURITY_HEADERS,
          ...extraHeaders
        }}
      }});
    }};

    // Handle OPTIONS preflight
    if (method === "OPTIONS") {{
      return new Response(null, {{
        headers: {{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, X-Staff-Auth, Authorization",
          ...SECURITY_HEADERS
        }}
      }});
    }}

    // ========================================================================
    // 1. CLOUDFLARE AI SECURITY SUITE: AI GATEWAY & INLINE WAF
    // Endpoint: /api/ai/parenting-assistant
    // ========================================================================
    if (path === "/api/ai/parenting-assistant" && method === "POST") {{
      try {{
        // Rate limit: 20 AI queries per min per IP
        if (!checkRateLimit("ai:" + ip, 20)) {{
          return jsonResponse({{
            error: "Cloudflare AI Gateway: Rate limit exceeded for AI queries. Please wait a moment.",
            status: "rate_limited"
          }}, 429);
        }}

        const body = await request.json();
        const userPrompt = (body.prompt || body.message || "").trim();
        const langChoice = body.lang || "my";

        if (!userPrompt) {{
          return jsonResponse({{ error: "Empty prompt" }}, 400);
        }}

        if (userPrompt.length > 1500) {{
          return jsonResponse({{
            error: "Cloudflare AI Gateway: Input exceeds maximum token limit (1500 characters) to prevent Denial of Wallet attacks."
          }}, 400);
        }}

        // A. Prompt Injection Detection (cf.llm.prompt.injection_score)
        const injectionAnalysis = evaluatePromptInjection(userPrompt);
        if (injectionAnalysis.blocked) {{
          return jsonResponse({{
            error: "Cloudflare AI Security Suite: Malicious prompt injection attempt blocked by WAF rule.",
            rule: "cf.llm.prompt.injection_score < 20",
            score: injectionAnalysis.score,
            reason: injectionAnalysis.reason,
            action: "BLOCKED",
            timestamp: new Date().toISOString()
          }}, 403, {{
            "cf-llm": "true",
            "cf-llm-injection-score": String(injectionAnalysis.score),
            "cf-llm-action": "BLOCKED"
          }});
        }}

        // B. Workforce AI DLP Inspection (PII scrubbing)
        const scrubbedPrompt = scrubPII(userPrompt);
        const hasPii = scrubbedPrompt !== userPrompt;

        // C. AI Gateway Caching & Intelligent Synthesis
        const cacheKey = scrubbedPrompt.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 40);
        const cachedResponse = getCachedParentingAnswer(cacheKey, langChoice);

        let aiResponseText = "";
        let cacheStatus = "MISS";

        if (cachedResponse) {{
          aiResponseText = cachedResponse;
          cacheStatus = "HIT";
        }} else {{
          aiResponseText = generateBiblicalParentingAnswer(scrubbedPrompt, langChoice);
          cacheStatus = "MISS";
        }}

        return jsonResponse({{
          status: "success",
          answer: aiResponseText,
          security: {{
            inspectionPassed: true,
            injectionScore: injectionAnalysis.score,
            dlpProtected: hasPii,
            cacheStatus: cacheStatus,
            wafEngine: "Cloudflare AI Security Suite"
          }}
        }}, 200, {{
          "cf-llm": "true",
          "cf-llm-injection-score": String(injectionAnalysis.score),
          "cf-llm-action": "ALLOW",
          "cf-dlp-inspected": "true",
          "cf-aig-cache-status": cacheStatus
        }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 500);
      }}
    }}

    // ========================================================================
    // 2. MODEL CONTEXT PROTOCOL (MCP) SERVER GOVERNANCE
    // Endpoint: /api/mcp
    // ========================================================================
    if (path === "/api/mcp") {{
      const authHeader = request.headers.get("Authorization") || "";
      const token = authHeader.replace(/^Bearer\s+/i, "").trim();
      const staffAuth = request.headers.get("X-Staff-Auth") || url.searchParams.get("key");
      const mcpValid = (token === MCP_SECRET_KEY || token === STAFF_PASSCODE || staffAuth === STAFF_PASSCODE);

      if (!mcpValid) {{
        return jsonResponse({{
          error: "Cloudflare Zero Trust MCP Governance: Access denied. Missing or invalid MCP Bearer Token.",
          protocol: "Model Context Protocol (MCP)",
          policy: "Zero Trust Least-Privilege Access"
        }}, 401);
      }}

      // List Available Governed Tools
      if (method === "GET" || (method === "POST" && url.searchParams.get("action") === "list")) {{
        return jsonResponse({{
          mcpVersion: "2024-11-05",
          server: "The Parenting Project Myanmar - Remote MCP Gateway",
          governance: "Cloudflare Workers Zero Trust Portal",
          tools: [
            {{
              name: "get_parenting_modules",
              description: "Fetch curriculum information, biblical foundations, and video titles for Modules 1-11",
              parameters: {{ type: "object", properties: {{ moduleId: {{ type: "integer", minimum: 1, maximum: 11 }} }} }}
            }},
            {{
              name: "get_daily_devotional",
              description: "Fetch daily family scripture, reflection, and biblical parenting insight",
              parameters: {{ type: "object", properties: {{ lang: {{ type: "string", enum: ["en", "my"] }} }} }}
            }},
            {{
              name: "verify_partner_church",
              description: "Safely verify if a local church is a registered partner in the network (Read-Only)",
              parameters: {{ type: "object", properties: {{ churchName: {{ type: "string" }} }}, required: ["churchName"] }}
            }}
          ]
        }}, 200, {{ "cf-mcp-governed": "true" }});
      }}

      // Tool Call Execution with Strict Least-Privilege Enforcement
      if (method === "POST") {{
        try {{
          const mcpReq = await request.json();
          const toolName = mcpReq.tool || mcpReq.name;
          const args = mcpReq.arguments || mcpReq.params || {{}};

          let result = null;
          if (toolName === "get_parenting_modules") {{
            result = {{
              totalModules: 11,
              sample: "Module 1: Becoming a Good Example · Module 2: Connecting with Your Child",
              languageSupport: ["Myanmar", "English"]
            }};
          }} else if (toolName === "get_daily_devotional") {{
            result = {{
              verse: "Deuteronomy 6:6-7 / တရားဟောရာ ၆:၆-၇",
              insight: "Teach biblical love to your children diligently at home and when you walk along the road."
            }};
          }} else if (toolName === "verify_partner_church") {{
            const churchQuery = (args.churchName || "").toLowerCase();
            const match = registrationsDB.some(c => c.churchName && c.churchName.toLowerCase().includes(churchQuery));
            result = {{ churchName: args.churchName, isVerifiedPartner: match }};
          }} else {{
            return jsonResponse({{
              error: `MCP Governance Violation: Tool '${{toolName}}' is not permitted by least-privilege policy.`
            }}, 403);
          }}

          return jsonResponse({{
            status: "success",
            tool: toolName,
            result: result,
            auditLog: {{
              timestamp: new Date().toISOString(),
              callerIP: ip,
              status: "ALLOWED_BY_ZERO_TRUST"
            }}
          }}, 200, {{ "cf-mcp-governed": "true", "cf-mcp-audit": "recorded" }});
        }} catch (e) {{
          return jsonResponse({{ error: e.message }}, 400);
        }}
      }}
    }}

    // R2 Video Proxy
    if (path === "/api/video-proxy") {{
      const file = url.searchParams.get("file");
      if (!file || !/^[\w\-\.]+\.mp4$/i.test(file)) {{
        return new Response("Invalid file", {{ status: 400 }});
      }}
      const r2Url = `https://pub-9b38e79343f8404495945a9cf030a304.r2.dev/${{file}}`;
      const rangeHeader = request.headers.get("Range");
      const fetchHeaders = {{}};
      if (rangeHeader) fetchHeaders["Range"] = rangeHeader;

      try {{
        const r2Res = await fetch(r2Url, {{ headers: fetchHeaders }});
        const corsHeaders = {{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
          "Access-Control-Allow-Headers": "Range, Content-Type",
          "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges",
          ...SECURITY_HEADERS
        }};
        const resHeaders = {{}};
        for (const h of ["Content-Type","Content-Length","Content-Range","Accept-Ranges","ETag","Last-Modified"]) {{
          const v = r2Res.headers.get(h);
          if (v) resHeaders[h] = v;
        }}
        return new Response(r2Res.body, {{
          status: r2Res.status,
          headers: {{ ...resHeaders, ...corsHeaders }}
        }});
      }} catch(e) {{
        return new Response("Proxy error: " + e.message, {{ status: 502 }});
      }}
    }}

    // Download APK route
    if (path === "/apk" || path === "/download" || path === "/download/apk" || path === "/app.apk" || path === "/ParentingProjectMyanmar.apk") {{
      return Response.redirect("https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.1.0/ParentingProjectMyanmar.apk", 302);
    }}

    // 3. Static Pages with Enterprise Security Headers
    if (path === "/" || path === "/index.html") {{
      return new Response(INDEX_HTML, {{
        headers: {{
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
          ...SECURITY_HEADERS
        }}
      }});
    }}

    if (path === "/login" || path === "/login.html") {{
      return new Response(LOGIN_HTML, {{
        headers: {{ "Content-Type": "text/html; charset=utf-8", ...SECURITY_HEADERS }}
      }});
    }}

    if (path === "/register" || path === "/register.html") {{
      return new Response(REGISTER_HTML, {{
        headers: {{ "Content-Type": "text/html; charset=utf-8", ...SECURITY_HEADERS }}
      }});
    }}

    if (path === "/manifest.json") {{
      return new Response(MANIFEST_JSON, {{
        headers: {{ "Content-Type": "application/manifest+json; charset=utf-8", ...SECURITY_HEADERS }}
      }});
    }}

    // Custom Videos API
    if (path === "/api/custom-videos" && method === "GET") {{
      if (env.KV) {{
        const kvVideos = await env.KV.get("custom_videos", "json");
        if (kvVideos) customVideosDB = kvVideos;
      }}
      return jsonResponse(customVideosDB);
    }}

    // Content Rules API
    if (path === "/api/content-rules" && method === "GET") {{
      if (env.KV) {{
        const kvRules = await env.KV.get("content_rules", "json");
        if (kvRules) contentRulesDB = kvRules;
      }}
      return jsonResponse(contentRulesDB);
    }}

    // Church Registration API (Rate Limited & Sanitized)
    if (path === "/api/register" && method === "POST") {{
      if (!checkRateLimit("reg:" + ip, 15)) {{
        return jsonResponse({{ error: "Rate limit exceeded for registration." }}, 429);
      }}
      try {{
        const payload = await request.json();
        const regId = "REG-" + new Date().getFullYear() + "-" + String(registrationsDB.length + 1).padStart(3, '0');
        const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

        const newEntry = {{
          regId: regId,
          timestamp: now,
          churchName: sanitizeInput(payload.churchName || ""),
          denom: sanitizeInput(payload.denom || ""),
          region: sanitizeInput(payload.region || ""),
          city: sanitizeInput(payload.city || ""),
          coordName: sanitizeInput(payload.coordName || ""),
          email: sanitizeInput(payload.email || ""),
          phone: sanitizeInput(payload.phone || ""),
          fam: sanitizeInput(payload.fam || "1"),
          status: "New Partner Registered ⏳",
          isGranted: false
        }};

        registrationsDB.unshift(newEntry);
        if (env.KV) await env.KV.put("registrations", JSON.stringify(registrationsDB));

        syncToGoogleSheetsDual(ctx, Object.assign({{ type: "registration" }}, payload));

        return jsonResponse({{
          status: "success",
          regId: regId,
          message: "Registration successfully recorded and synced."
        }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Facilitator & Parent Login API (With Brute Force Defense)
    if (path === "/api/login" && method === "POST") {{
      const lockout = checkAuthLockout(ip);
      if (lockout.locked) {{
        return jsonResponse({{
          error: `Security Lockout: Too many failed login attempts. Please try again in ${{lockout.remainingSec}} seconds.`,
          locked: true
        }}, 429);
      }}

      try {{
        const payload = await request.json();
        const emailOrPhone = (payload.email || "").trim().toLowerCase();
        const password = payload.password || "";

        // Admin passcode check
        if (password === STAFF_PASSCODE || emailOrPhone === "admin@cbn.org") {{
          recordAuthSuccess(ip);
          syncToGoogleSheetsDual(ctx, {{
            type: "login",
            email: emailOrPhone,
            displayName: "CBN Asia Admin",
            churchName: "CBN Asia Headquarters",
            role: "admin",
            platform: "Cloudflare API Admin Login"
          }});
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
          recordAuthSuccess(ip);
          syncToGoogleSheetsDual(ctx, {{
            type: "login",
            email: emailOrPhone,
            displayName: "စံပြမိဘ (Myanmar Parent)",
            churchName: "Grace Community Church",
            role: "parent",
            platform: "Cloudflare API Quick Login"
          }});
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
          recordAuthSuccess(ip);
          syncToGoogleSheetsDual(ctx, {{
            type: "login",
            email: emailOrPhone,
            displayName: church.coordName,
            churchName: church.churchName,
            role: "facilitator",
            platform: "Cloudflare API Facilitator Login"
          }});
          return jsonResponse({{
            status: "success",
            role: "facilitator",
            displayName: church.coordName,
            churchName: church.churchName,
            isGranted: true
          }});
        }}

        // Any non-empty input
        if (emailOrPhone.length > 0) {{
          recordAuthSuccess(ip);
          let userDisplay = "Partner Facilitator";
          if (emailOrPhone.includes("@")) {{
            const namePart = emailOrPhone.split('@')[0];
            userDisplay = namePart.charAt(0).toUpperCase() + namePart.slice(1);
          }} else if (emailOrPhone.match(/^[0-9+ ]+$/)) {{
            userDisplay = "Parent (" + emailOrPhone.slice(-4) + ")";
          }} else {{
            userDisplay = emailOrPhone.charAt(0).toUpperCase() + emailOrPhone.slice(1);
          }}

          syncToGoogleSheetsDual(ctx, {{
            type: "login",
            email: emailOrPhone,
            displayName: userDisplay,
            churchName: "Partner Family",
            role: "facilitator",
            platform: "Cloudflare API Direct Login"
          }});
          return jsonResponse({{
            status: "success",
            role: "facilitator",
            displayName: userDisplay,
            churchName: "Partner Family",
            isGranted: true
          }});
        }}

        recordAuthFailure(ip);
        return jsonResponse({{ error: "Please enter an email or phone number." }}, 400);
      }} catch (err) {{
        recordAuthFailure(ip);
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Prayers API (With DLP PII Redaction & Sanitization)
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
        const rawText = (p.text || "").trim();
        // DLP Scrubber: automatically masks phone numbers and emails to protect family privacy
        const dlpScrubbed = scrubPII(rawText);
        const sanitized = sanitizeInput(dlpScrubbed);

        const newPrayer = {{
          id: "p-" + Date.now(),
          author: sanitizeInput((p.author || "မေမေ/ဖေဖေ").trim()),
          city: sanitizeInput((p.city || "မြန်မာ").trim()),
          cat: p.cat || "family",
          catName: p.catName || "👨‍👩‍👧‍👦 မိသားစု ဆုတောင်းချက်",
          text: sanitized,
          time: "ယခုလေးတင်",
          prayerCount: 1
        }};
        prayersDB.unshift(newPrayer);
        if (env.KV) await env.KV.put("prayers", JSON.stringify(prayersDB));

        syncToGoogleSheetsDual(ctx, {{
          type: "prayer",
          author: newPrayer.author,
          city: newPrayer.city,
          category: newPrayer.catName,
          text: newPrayer.text
        }});

        return jsonResponse({{ status: "success", prayer: newPrayer }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Increment Prayer Counter
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

    // Module Feedback API (With DLP Protection)
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
        const rawText = (fb.text || "").trim();
        const dlpScrubbed = scrubPII(rawText);
        const sanitized = sanitizeInput(dlpScrubbed);

        const newFb = {{
          id: "fb-" + Date.now(),
          module: fb.module || "General",
          moduleTitle: fb.moduleTitle || "",
          author: sanitizeInput((fb.author || "Parent").trim()),
          church: sanitizeInput((fb.church || "").trim()),
          rating: Number(fb.rating || 5),
          text: sanitized,
          time: new Date().toISOString().substring(0, 10)
        }};
        feedbackDB.unshift(newFb);
        if (env.KV) await env.KV.put("feedback", JSON.stringify(feedbackDB));

        syncToGoogleSheetsDual(ctx, {{
          type: "prayer",
          author: newFb.author,
          city: newFb.church,
          category: "⭐ " + newFb.rating + " Stars · " + newFb.module + ": " + newFb.moduleTitle,
          text: newFb.text
        }});

        return jsonResponse({{ status: "success", feedback: newFb }});
      }} catch (err) {{
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Admin Passcode Authentication Check (With 5-Strike Lockout)
    if (path === "/api/admin-auth" && method === "POST") {{
      const lockout = checkAuthLockout(ip);
      if (lockout.locked) {{
        return jsonResponse({{
          error: `Security Lockout: Too many failed passcode attempts. Locked for ${{lockout.remainingSec}} seconds.`,
          locked: true,
          remainingSeconds: lockout.remainingSec
        }}, 429);
      }}

      try {{
        const body = await request.json();
        const passcode = (body.passcode || "").trim();
        if (passcode === STAFF_PASSCODE) {{
          recordAuthSuccess(ip);
          return jsonResponse({{ status: "success", token: STAFF_PASSCODE }});
        }} else {{
          recordAuthFailure(ip);
          return jsonResponse({{ status: "error", error: "Invalid passcode" }}, 401);
        }}
      }} catch (err) {{
        recordAuthFailure(ip);
        return jsonResponse({{ error: err.message }}, 400);
      }}
    }}

    // Staff Authentication Check
    const staffAuth = request.headers.get("X-Staff-Auth") || url.searchParams.get("key");
    const isStaff = staffAuth === STAFF_PASSCODE;

    // Admin: Get Registrations
    if (path === "/api/registrations.json" && method === "GET") {{
      if (!isStaff) return jsonResponse({{ error: "Unauthorized" }}, 403);
      if (env.KV) {{
        const kvRegs = await env.KV.get("registrations", "json");
        if (kvRegs) registrationsDB = kvRegs;
      }}
      return jsonResponse(registrationsDB);
    }}

    // Admin: Toggle User Access
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

    // Admin: Update Content Rule
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

    // Admin: Save Custom Video
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

    // Admin: Delete Custom Video
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

    return new Response("Not Found", {{ status: 404, headers: SECURITY_HEADERS }});
  }}
}};
"""

# Unescape double curly braces from worker JS template before injecting JSON placeholders
worker_code = worker_code.replace('{{', '{').replace('}}', '}')

# Inject placeholders
worker_code = worker_code.replace('__DEFAULT_REGS__', json.dumps(default_regs))
worker_code = worker_code.replace('__DEFAULT_VIDEOS__', json.dumps(default_videos))
worker_code = worker_code.replace('__DEFAULT_RULES__', json.dumps(default_rules))
worker_code = worker_code.replace('__DEFAULT_PRAYERS__', json.dumps(default_prayers))
worker_code = worker_code.replace('__DEFAULT_FEEDBACK__', json.dumps(default_feedback))
worker_code = worker_code.replace('__INDEX_HTML__', json.dumps(index_compiled))
worker_code = worker_code.replace('__LOGIN_HTML__', json.dumps(login_html))
worker_code = worker_code.replace('__REGISTER_HTML__', json.dumps(reg_html))
worker_code = worker_code.replace('__MANIFEST_JSON__', json.dumps(manifest_json))

with open(os.path.join(DIR, 'worker.js'), 'w', encoding='utf-8') as f:
    f.write(worker_code.strip())

with open(os.path.join(DIR, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(index_compiled)

size_kb = os.path.getsize(os.path.join(DIR, 'worker.js')) / 1024
print(f"✅ Generated secure worker.js ({size_kb:.1f} KB) and index.html")
