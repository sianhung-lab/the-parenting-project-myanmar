// ==========================================
// THE PARENTING PROJECT MYANMAR — DATA & LOGIC
// CBN Asia Family Discipleship Initiative
// ==========================================

const MODULES = [
  {
    id: 1,
    cat: "character",
    youtube: "hKSMxbFee1U",
    icon: "🏅",
    grad: "linear-gradient(135deg,#003087,#004ac2)",
    title: "Being a Positive Role Model",
    myTitle: "ကောင်းသော စံနမူနာပြ မိဘဖြစ်ခြင်း",
    sub: "Your daily character is the first textbook your child reads.",
    mySub: "မိဘများ၏ နေ့စဉ် အသက်ရှင်နေထိုင်မှု စရိုက်လက္ခဏာသည် သားသမီးများ ပထမဆုံး ဖတ်ရှုရသော ပြဋ္ဌာန်းစာအုပ်ဖြစ်ပါသည်။",
    dur: "45",
    sess: 3,
    badge: "Character",
    myBadge: "စရိုက်လက္ခဏာ",
    scripture: "Deuteronomy 6:6-7",
    myScripture: "တရားဟောရာ ၆:၆-၇ — «ယနေ့ ငါမှာထားသော စကားကို နှလုံးသွင်းရမည်။ ထိုစကားကို သားမြေးတို့အား ကြိုးစား၍ သွန်သင်ရမည်။»",
    topics: [
      "Living consistently with your stated values",
      "Owning mistakes and apologising to your child",
      "Managing emotional reactions under family stress"
    ],
    myTopics: [
      "မိမိသွန်သင်သော တန်ဖိုးများနှင့်အညီ လက်တွေ့ ညီညွတ်စွာ နေထိုင်ခြင်း",
      "မှားယွင်းမှုကို ရိုးသားစွာ ဝန်ခံပြီး သားသမီးထံ တောင်းပန်ခြင်း",
      "မိသားစု ဖိစီးမှုများကြားတွင် စိတ်ခံစားမှုကို တည်ငြိမ်စွာ ထိန်းကျောင်းခြင်း"
    ],
    action: "This week: ask your child one thing you could improve when frustrated.",
    myAction: "ယခုအပတ်တွင်: «စိတ်တိုဒေါသထွက်တဲ့အခါ အဖေ/အမေ ဘာကို ပြုပြင်သင့်လဲ» ဟု သားသမီးအား နှိမ့်ချစွာ မေးမြန်းနားထောင်ပါ။",
    reflect: "What core value do you most want your child to inherit from your life?",
    myReflect: "သင့်ဘဝမှ မည်သည့် အဓိက တန်ဖိုးထားမှုကို သင့်သားသမီးထံ အမွေပေးချင်ပါသလဲ။"
  },
  {
    id: 2,
    cat: "connection",
    youtube: "GVK5Wc0NZE4",
    icon: "🤝",
    grad: "linear-gradient(135deg,#c0392b,#e74c3c)",
    title: "Building Deep Connection",
    myTitle: "နက်ရှိုင်းသော မိသားစု ဆက်ဆံရေး တည်ဆောက်ခြင်း",
    sub: "Correction without connection creates silent rebellion.",
    mySub: "နွေးထွေးသော ဆက်ဆံရေး မရှိဘဲ ဆုံးမပဲ့ပြင်ခြင်းသည် သားသမီးများ၏ စိတ်ထဲတွင် တိတ်တဆိတ် ပုန်ကန်မှုကို ဖြစ်စေပါသည်။",
    dur: "50",
    sess: 4,
    badge: "Connection",
    myBadge: "ဆက်ဆံရေး ရင်းနှီးမှု",
    scripture: "James 1:19",
    myScripture: "ယာကုပ် ၁:၁၉ — «လူတိုင်း ကြားခြင်းငှာ လျင်မြန်စေ၊ စကားပြောခြင်းငှာ နှေးစေ၊ အမျက်ထွက်ခြင်းငှာ နှေးစေလော့။»",
    topics: [
      "Active listening without premature advice",
      "The 5 Love Languages of children",
      "Intentional one-on-one time with each child"
    ],
    myTopics: [
      "အကြံပေးချက် ချက်ချင်းမပေးမီ သားသမီး၏ရင်ဖွင့်သံကို အာရုံစိုက် နားထောင်ခြင်း",
      "သားသမီးများ၏ မေတ္တာဘာသာစကား (၅) မျိုးကို နားလည်အသုံးချခြင်း",
      "သားသမီး တစ်ဦးချင်းစီနှင့် နှစ်ကိုယ်ကြား သီးသန့် အချိန်ပေးခြင်း"
    ],
    action: "Schedule 30 device-free minutes alone with each child this week.",
    myAction: "ယခုအပတ်အတွင်း သားသမီးတစ်ဦးစီနှင့် ဖုန်း/ဖန်သားပြင် လုံးဝမသုံးဘဲ မိနစ် (၃၀) သီးသန့် အချိန်ပေး၍ စကားပြောပါ။",
    reflect: "Does your child feel safe sharing fears or mistakes with you?",
    myReflect: "သင့်သားသမီးသည် စိုးရိမ်ကြောက်ရွံ့မှုများနှင့် အမှားများကို သင့်အား ပွင့်လင်းစွာ ပြောပြရန် စိတ်ချလုံခြုံမှု ခံစားရပါသလား။"
  },
  {
    id: 3,
    cat: "character",
    youtube: "lmtVOhpszCQ",
    icon: "🛡️",
    grad: "linear-gradient(135deg,#1a5276,#2980b9)",
    title: "Healthy Parental Authority",
    myTitle: "မေတ္တာနှင့် တည်ဆောက်ထားသော မိဘဩဇာ",
    sub: "Lead your home with loving authority, not intimidation.",
    mySub: "မိမိအိမ်ထောင်ကို ခြိမ်းခြောက်ကြောက်ရွံ့စေခြင်းဖြင့် မဟုတ်ဘဲ၊ ချစ်ခြင်းမေတ္တာပြည့်ဝသော အုပ်ထိန်းမှုဖြင့် ဦးဆောင်ပါ။",
    dur: "40",
    sess: 3,
    badge: "Leadership",
    myBadge: "ဦးဆောင်မှု",
    scripture: "Ephesians 6:4",
    myScripture: "ဧဖက် ၆:၄ — «အဘတို့၊ ကိုယ်သားသမီးကို စိတ်ဆိုးစေခြင်းငှာ မပြုကြနှင့်။ သခင်ဘုရား၏ ပဲ့ပြင်ဆုံးမနည်းအားဖြင့် ကျွေးမွေးပြုစုကြလော့။»",
    topics: [
      "Understanding the mandate of parental stewardship",
      "Guiding vs controlling your children",
      "Balancing warmth with healthy boundaries"
    ],
    myTopics: [
      "ဘုရားသခင် ပေးအပ်ထားသော မိဘဘဏ္ဍာစိုး အခွင့်အာဏာကို နားလည်ခြင်း",
      "သားသမီးအား ထိန်းချုပ်ဖိနှိပ်ခြင်း မဟုတ်ဘဲ လမ်းပြထိန်းကျောင်းပေးခြင်း",
      "နွေးထွေးသော မေတ္တာနှင့် ခိုင်မာသော စည်းကမ်းဘောင်များကို မျှတစွာ ကျင့်သုံးခြင်း"
    ],
    action: "Replace yelling with calm, eye-level firmness when giving direction.",
    myAction: "ညွှန်ကြားချက်ပေးသည့်အခါ အော်ဟစ်ခြင်းမပြုဘဲ၊ မျက်လုံးချင်းဆိုင် အနီးကပ်ကြည့်၍ တည်ငြိမ်ခိုင်မာသော အသံဖြင့် ပြောဆိုပါ။",
    reflect: "Do your children obey out of love and respect, or out of fear?",
    myReflect: "သင့်သားသမီးများသည် သင့်စကားကို ချစ်ခင်လေးစားမှုကြောင့် နားထောင်ပါသလား၊ သို့မဟုတ် ကြောက်ရွံ့မှုကြောင့် နားထောင်ပါသလား။"
  },
  {
    id: 4,
    cat: "connection",
    youtube: "q1NTvlZhv-Y",
    icon: "💚",
    grad: "linear-gradient(135deg,#1e8449,#27ae60)",
    title: "Filling the Emotional Tank",
    myTitle: "သားသမီး၏ စိတ်ခံစားချက် အင်အား ဖြည့်ဆည်းပေးခြင်း",
    sub: "A child on an empty emotional tank will act out or withdraw.",
    mySub: "စိတ်ခံစားချက် မေတ္တာတိုင်ကီ ခမ်းခြောက်နေသော ကလေးသည် စိတ်ရှုပ်ထွေးစွာ သောင်းကျန်းတတ်သည် သို့မဟုတ် သီးသန့် ဆုတ်ခွာသွားတတ်ပါသည်။",
    dur: "45",
    sess: 3,
    badge: "Mental Health",
    myBadge: "စိတ်ကျန်းမာရေး",
    scripture: "Proverbs 4:23",
    myScripture: "သုတ္တံ ၄:၂၃ — «အထူးသဖြင့် စောင့်ရှောက်ရသော အရာဟူမူကား၊ ကိုယ့်စိတ်နှလုံးကို စောင့်ရှောက်လော့။ အကြောင်းမူကား၊ အသက်၏ အရင်းအမြစ်တို့သည် စိတ်နှလုံးထဲက ထွက်တတ်ကြ၏။»",
    topics: [
      "Diagnosing emotional depletion in your child",
      "Validating feelings before offering solutions",
      "Daily routines to replenish warmth and reassurance"
    ],
    myTopics: [
      "သားသမီး၏ စိတ်ခံစားမှု ကုန်ခမ်းနေခြင်း လက္ခဏာများကို ကြိုတင်သတိပြုခြင်း",
      "ဖြေရှင်းချက် ချက်ချင်းမရှာမီ ခံစားချက်ကို နားလည်ပေးပြီး နှစ်သိမ့်ခြင်း",
      "နေ့စဉ်ဘဝတွင် နွေးထွေးမှုနှင့် ယုံကြည်စိတ်ချမှုကို ပြန်လည်ဖြည့်တင်းပေးသော အလေ့အထများ"
    ],
    action: "Give three unconditional hugs today and leave a written appreciation note.",
    myAction: "ယနေ့တွင် ကလေးအား မည်သည့်အကြောင်းပြချက်မှမပါဘဲ (၃) ကြိမ် နွေးထွေးစွာ ပွေ့ဖက်ပြီး ချီးမွမ်းစာတိုလေး ရေးပေးပါ။",
    reflect: "How does your child signal they are craving your affection?",
    myReflect: "သင့်သားသမီးသည် သင့်ထံမှ မေတ္တာနှင့် ဂရုစိုက်မှုကို တောင့်တနေကြောင်း မည်သို့ အရိပ်အယောင် ပြသလေ့ရှိသနည်း။"
  },
  {
    id: 5,
    cat: "digital",
    youtube: "Pt-ZYVIAGBg",
    icon: "📱",
    grad: "linear-gradient(135deg,#6c3483,#8e44ad)",
    title: "Navigating the Digital Household",
    myTitle: "ဒစ်ဂျစ်တယ်ခေတ် မိသားစု စီမံခန့်ခွဲမှု",
    sub: "Smart frameworks for screen time without constant warfare.",
    mySub: "နေ့စဉ် စကားများရန်ဖြစ်စရာမလိုဘဲ ဖုန်းနှင့် ဖန်သားပြင်သုံးစွဲမှုကို ပညာရှိစွာ ထိန်းကျောင်းခြင်း။",
    dur: "55",
    sess: 4,
    badge: "Digital Age",
    myBadge: "ဒစ်ဂျစ်တယ်ခေတ်",
    scripture: "1 Corinthians 10:23",
    myScripture: "၁ ကောရိန္သု ၁၀:၂၃ — «ခပ်သိမ်းသောအရာကို ငါပြုနိုင်သော်လည်း၊ ခပ်သိမ်းသောအရာသည် အကျိုးကို ပြုတတ်သည်မဟုတ်။»",
    topics: [
      "Drafting a collaborative Family Digital Contract",
      "Tech-free household zones (Dinner table & Bedrooms)",
      "Cyber safety and predatory algorithm awareness"
    ],
    myTopics: [
      "မိသားစု အတူတကွ သဘောတူရေးဆွဲသော ဒစ်ဂျစ်တယ် အသုံးပြုမှု ပဋိညာဉ်စာချုပ်",
      "ဖုန်းမသုံးရမည့် မိသားစုနယ်မြေများ သတ်မှတ်ခြင်း (ထမင်းစားပွဲနှင့် အိပ်ခန်းများ)",
      "အင်တာနက် အန္တရာယ်များနှင့် ကလေးများကို လွှမ်းမိုးသည့် အယ်လ်ဂိုရီသမ်များကို သတိပြုခြင်း"
    ],
    action: "Start a 'Tech Basket': collect all devices at 8 PM each evening.",
    myAction: "မိသားစု 'ဖုန်းသိမ်းခြင်းတောင်း' ထားရှိပြီး ညတိုင်း ည ၈:၀၀ နာရီတွင် အားလုံး ဖုန်းသိမ်းသည့် အလေ့အကျင့် စတင်ပါ။",
    reflect: "Does our own screen time model the limits we ask of our children?",
    myReflect: "ကျွန်ုပ်တို့ မိဘများ၏ ဖုန်းသုံးစွဲမှုပုံစံသည် သားသမီးများကို ကန့်သတ်ထားသည့် စည်းကမ်းများနှင့် စံနမူနာ ကိုက်ညီမှု ရှိပါသလား။"
  },
  {
    id: 6,
    cat: "digital",
    youtube: "KEUAW5PsV8A",
    icon: "🧭",
    grad: "linear-gradient(135deg,#117a65,#1abc9c)",
    title: "Boundaries & Positive Discipline",
    myTitle: "စည်းဘောင်များနှင့် အပြုသဘောဆောင်သော ဆုံးမပဲ့ပြင်ခြင်း",
    sub: "True discipline cultivates self-governing character.",
    mySub: "စစ်မှန်သော ဆုံးမပဲ့ပြင်ခြင်းသည် မိမိကိုယ်ကို ထိန်းကျောင်းနိုင်သော စရိုက်လက္ခဏာကို ပျိုးထောင်ပေးပါသည်။",
    dur: "45",
    sess: 3,
    badge: "Discipline",
    myBadge: "စည်းကမ်းထိန်းသိမ်းမှု",
    scripture: "Hebrews 12:11",
    myScripture: "ဟေဗြဲ ၁၂:၁၁ — «ဆုံးမခြင်းကို ခံရစဉ်အခါ ဝမ်းမြောက်စရာမထင်၊ ဝမ်းနည်းစရာထင်တတ်၏။ သို့သော်လည်း၊ ဆုံးမခြင်းကိုခံရသော သူတို့သည် နောက်မှ ငြိမ်သက်ခြင်းနှင့်ယှဉ်သော ဖြောင့်မတ်ခြင်းအကျိုးကို ခံရကြ၏။»",
    topics: [
      "Natural vs logical consequences",
      "Diffusing tantrums through calm predictability",
      "Parental unity: presenting a consistent front"
    ],
    myTopics: [
      "သဘာဝအလျောက် ဖြစ်ပေါ်လာသော အကျိုးဆက်နှင့် ကျိုးကြောင်းဆီလျော်သော ပြစ်ဒဏ်",
      "ဂျီကျသောင်းကျန်းခြင်းကို ဒေါသဖြင့်မတုံ့ပြန်ဘဲ တည်ငြိမ်သော စည်းမျဉ်းဖြင့် ဖြေရှင်းခြင်း",
      "မိဘနှစ်ဦး သဘောထားညီညွတ်စွာ တူညီသော စည်းကမ်းကို ကျင့်သုံးခြင်း"
    ],
    action: "Agree with your spouse on one clear consequence for one recurring issue.",
    myAction: "ထပ်တလဲလဲ ဖြစ်တတ်သော အပြုအမူတစ်ခုအတွက် ဇနီးမောင်နှံနှစ်ဦး ကြိုတင်တိုင်ပင်ပြီး ရှင်းလင်းသော အကျိုးဆက်တစ်ခုကို သဘောတူသတ်မှတ်ပါ။",
    reflect: "When your child disobeys, does your reaction mentor or vent?",
    myReflect: "သင့်သားသမီး စကားနားမထောင်သည့်အခါ သင့်တုံ့ပြန်မှုသည် သွန်သင်လမ်းပြခြင်း ဖြစ်ပါသလား၊ သို့မဟုတ် ဒေါသပေါက်ကွဲခြင်း ဖြစ်ပါသလား။"
  },
  {
    id: 7,
    cat: "character",
    youtube: "FfwH7uOiq7M",
    icon: "👨‍👧",
    grad: "linear-gradient(135deg,#d35400,#e67e22)",
    title: "The Father's Heart & Presence",
    myTitle: "ဖခင်၏ နှလုံးသားနှင့် အတူရှိနေပေးခြင်း",
    sub: "A father's intentional presence anchors a child's identity.",
    mySub: "ဖခင်၏ အချိန်ပေးအတူရှိနေမှုသည် သားသမီး၏ ဘဝရပ်တည်ချက်နှင့် စရိုက်လက္ခဏာကို ခိုင်ခံ့စေပါသည်။",
    dur: "50",
    sess: 4,
    badge: "Fatherhood",
    myBadge: "ဖခင်၏ အခန်းကဏ္ဍ",
    scripture: "Psalm 103:13",
    myScripture: "ဆာလံ ၁၀၃:၁၃ — «အဘသည် မိမိသားတို့ကို သနားစုံမက်သကဲ့သို့၊ ထာဝရဘုရားသည် ကြောက်ရွံ့သောသူတို့ကို သနားစုံမက်တော်မူ၏။»",
    topics: [
      "Addressing the father-absence epidemic in Myanmar",
      "The power of a father's spoken blessing",
      "Practical ways for busy fathers to stay bonded"
    ],
    myTopics: [
      "မြန်မာလူ့ဘောင်တွင် ဖခင်များ အဝေးရောက်/အချိန်မပေးနိုင်ခြင်း အခက်အခဲကို ကျော်လွှားခြင်း",
      "ဖခင်ထံမှ ထွက်ပေါ်လာသော ကောင်းချီးစကားများ၏ တန်ခိုးအာနိသင်",
      "အလုပ်များသော ဖခင်များ သားသမီးနှင့် ရင်းနှီးနွေးထွေးစွာ နေထိုင်နိုင်မည့် လက်တွေ့နည်းလမ်းများ"
    ],
    action: "Place your hand on your child's shoulder tonight and speak words of blessing.",
    myAction: "ယနေ့ညတွင် ကလေး၏ ပခုံးပေါ် လက်တင်၍ ချစ်ခြင်းမေတ္တာနှင့် ကောင်းချီးပေးသော စကားများကို ရိုးသားစွာ ပြောဆိုဆုတောင်းပေးပါ။",
    reflect: "How do your childhood memories of your father shape your parenting today?",
    myReflect: "သင့်ငယ်ဘဝက သင့်ကိုယ်ပိုင်ဖခင်နှင့် ပတ်သက်သည့် အမှတ်တရများသည် ယနေ့ သင့်မိဘအုပ်ထိန်းမှုပုံစံအပေါ် မည်သို့ လွှမ်းမိုးမှု ရှိနေပါသလဲ။"
  },
  {
    id: 8,
    cat: "digital",
    youtube: "FBtNGyBDZIM",
    icon: "💼",
    grad: "linear-gradient(135deg,#2c3e50,#4a6278)",
    title: "Working Parents: Career & Home",
    myTitle: "အလုပ်လုပ်သော မိဘများ- အလုပ်နှင့် အိမ်ထောင် ဟန်ချက်ညီစေခြင်း",
    sub: "Balancing work pressures without forfeiting childhood moments.",
    mySub: "အလုပ်ခွင် ဖိအားများကြားမှ သားသမီးများ၏ တန်ဖိုးရှိသော ငယ်ဘဝ အခိုက်အတန့်များကို လက်မလွတ်စေခြင်း။",
    dur: "40",
    sess: 3,
    badge: "Career & Family",
    myBadge: "အလုပ်နှင့် မိသားစု",
    scripture: "Psalm 127:2",
    myScripture: "ဆာလံ ၁၂၇:၂ — «သင်တို့သည် မိုးမလင်းမီထ၍၊ ညဉ့်နက်မှ အိပ်ရာသို့ဝင်လျက်၊ ပင်ပန်းစွာစားရသောအစာကို စားသော်လည်း အချည်းနှီးဖြစ်၏။ စင်စစ် ချစ်တော်မူသောသူတို့အား ချမ်းသာစွာ အိပ်ပျော်ခြင်းအခွင့်ကို ပေးတော်မူ၏။»",
    topics: [
      "A flourishing marriage is the greatest gift to your child",
      "The transition ritual: leaving work stress at the door",
      "Maximising the Golden 15 Minutes of morning and bedtime"
    ],
    myTopics: [
      "ခိုင်မာသာယာသော အိမ်ထောင်ရေးသည် သားသမီးများအတွက် အကြီးမားဆုံး လက်ဆောင်ဖြစ်ခြင်း",
      "အလုပ်ခွင် ဖိစီးမှုများကို အိမ်တံခါးဝတွင် ထားရစ်ခဲ့နိုင်မည့် စိတ်ပိုင်းဆိုင်ရာ အလေ့အထ",
      "နံနက်ခင်းနှင့် ညအိပ်ရာဝင်ချိန် ရွှေရောင် မိနစ် (၁၅) မိနစ်ကို အကျိုးရှိစွာ အသုံးချခြင်း"
    ],
    action: "Plan a Date Night with your spouse this week — no work talk.",
    myAction: "ယခုအပတ်တွင် ဇနီးမောင်နှံနှစ်ဦး သီးသန့် အပြင်ထွက် စကားပြောချိန် (Date Night) သတ်မှတ်ပြီး အလုပ်အကြောင်း မပြောဘဲ နေကြည့်ပါ။",
    reflect: "Do your children see parents who genuinely love and enjoy each other?",
    myReflect: "သင့်သားသမီးများသည် မိဘနှစ်ပါး အချင်းချင်း ရိုးသားစွာ ချစ်ခင်မြတ်နိုးကြသည်ကို မြင်တွေ့ခံစားရပါသလား။"
  },
  {
    id: 9,
    cat: "faith",
    youtube: "uQByH6xNFfM",
    icon: "📖",
    grad: "linear-gradient(135deg,#1a6b3c,#239b56)",
    title: "Nurturing Foundational Faith",
    myTitle: "ခိုင်မာသော ယုံကြည်ခြင်း အခြေခံကို ပျိုးထောင်ခြင်း",
    sub: "The family altar is a joyful sanctuary for God's presence.",
    mySub: "မိသားစု ဝတ်ပြုကိုးကွယ်ခြင်းသည် ဘုရားသခင်၏ မျက်မှောက်တော်ကို ရွှင်လန်းစွာ ခံစားရသော နေရာဖြစ်ပါသည်။",
    dur: "45",
    sess: 3,
    badge: "Faith",
    myBadge: "ယုံကြည်ခြင်း",
    scripture: "Deuteronomy 11:18-19",
    myScripture: "တရားဟောရာ ၁၁:၁၈-၁၉ — «ထိုကြောင့် ယခုငါမှာထားသော စကားကို နှလုံးသွင်းရမည်။ သားသမီးတို့အား ကြိုးစား၍ သွန်သင်ရမည်။ အိမ်၌ထိုင်လျက်နေသည်ဖြစ်စေ၊ ခရီးသွားသည်ဖြစ်စေ၊ အိပ်လျက်ထလျက်ရှိသည်ဖြစ်စေ၊ ထိုစကားကို အမြဲပြောဟောရမည်။»",
    topics: [
      "Why church cannot replace home discipleship",
      "Age-appropriate family devotions children enjoy",
      "Walking with children compassionately through doubts"
    ],
    myTopics: [
      "အသင်းတော်သည် အိမ်တွင်း တပည့်တော်ဖြစ်စေခြင်းကို လုံးဝ အစားမထိုးနိုင်ခြင်း",
      "ကလေးများ ပျော်ရွှင်နှစ်သက်သော အသက်အရွယ်အလိုက် မိသားစု ဝတ်ပြုကိုးကွယ်မှု အစီအစဉ်",
      "ကလေးများ သံသယနှင့် မေးခွန်းများ မေးလာသည့်အခါ မေတ္တာနှင့် စိတ်ရှည်စွာ လမ်းပြပေးခြင်း"
    ],
    action: "Start a 10-minute family devotional: read one parable together.",
    myAction: "(၁၀) မိနစ် မိသားစု ဝတ်ပြုချိန် စတင်ပါ: သမ္မာကျမ်းစာပုံပြင် တစ်ခုကို အတူတကွဖတ်ရှုပြီး ရိုးရှင်းစွာ ဆုတောင်းပါ။",
    reflect: "Do your children experience God as a loving Father through you?",
    myReflect: "သင့်သားသမီးများသည် သင့်ကိုကြည့်ခြင်းအားဖြင့် ဘုရားသခင်ကို မေတ္တာရှင် ဖခင်အဖြစ် တွေ့ကြုံခံစားရပါသလား။"
  },
  {
    id: 10,
    cat: "character",
    youtube: "dJLSp6Nh80g",
    icon: "🛡️",
    grad: "linear-gradient(135deg,#922b21,#c0392b)",
    title: "Healthy Sexuality in the Family",
    myTitle: "မိသားစုအတွင်း ကျန်းမာသော လိင်ပိုင်းဆိုင်ရာ အသိပညာပေးခြင်း",
    sub: "Do not let the internet be your child's first teacher on sexuality.",
    mySub: "အင်တာနက်သည် သင့်သားသမီးအတွက် လိင်ပိုင်းဆိုင်ရာ ပထမဆုံး ဆရာမဖြစ်ပါစေနှင့်။",
    dur: "50",
    sess: 4,
    badge: "Values Education",
    myBadge: "တန်ဖိုးထားမှုဆိုင်ရာ သင်ကြားခြင်း",
    scripture: "1 Corinthians 6:19-20",
    myScripture: "၁ ကောရိန္သု ၆:၁၉-၂၀ — «သင်တို့၏ ကိုယ်ခန္ဓာသည် ဘုရားသခင်ပေးသနားတော်မူသော သန့်ရှင်းသောဝိညာဉ်တော် ကျိန်းဝပ်ရာ ဗိမာန်ဖြစ်သည်ကို မသိကြသလော။ ထိုကြောင့် သင်တို့၏ ကိုယ်ခန္ဓာအားဖြင့် ဘုရားသခင်၏ ဂုဏ်တော်ကို ထင်ရှားစေကြလော့။»",
    topics: [
      "Safe touch and bodily consent for young children",
      "Discussing puberty without shame or taboo",
      "Mentoring teens through romantic curiosity and digital temptations"
    ],
    myTopics: [
      "ကလေးငယ်များအတွက် မိမိခန္ဓာကိုယ် လုံခြုံမှုနှင့် ခွင့်ပြုချက်မရှိဘဲ မထိမကိုင်ရမည့် နယ်နိမိတ်များ",
      "အရွယ်ရောက်ချိန် အပြောင်းအလဲများကို ရှက်ရွံ့စရာမလိုဘဲ ပွင့်လင်းစွာ ဆွေးနွေးပေးခြင်း",
      "ဆယ်ကျော်သက်များ၏ ချစ်ကြိုက်မှု စိတ်ဝင်စားမှုနှင့် အွန်လိုင်း သွေးဆောင်မှုများကို လမ်းပြပေးခြင်း"
    ],
    action: "Ensure your child understands private body boundaries and their trusted adults.",
    myAction: "သင့်ကလေးအား မိမိခန္ဓာကိုယ်၏ သီးသန့်နယ်နိမိတ်များနှင့် အန္တရာယ်ကြုံပါက အားကိုးယုံကြည်ရမည့် လူကြီးများကို ရှင်းပြထားပါ။",
    reflect: "Would your child come to you first with questions about their body?",
    myReflect: "သင့်ကလေးသည် မိမိခန္ဓာကိုယ်ဆိုင်ရာ မေးခွန်းများကို သင့်ထံ ပထမဆုံး လာရောက်မေးမြန်းရဲပါသလား။"
  },
  {
    id: 11,
    cat: "faith",
    youtube: "v_bMaW2yHT8",
    icon: "✨",
    grad: "linear-gradient(135deg,#0e6655,#148f77)",
    title: "Parenting Through Every Life Stage",
    myTitle: "ဘဝအဆင့်တိုင်းတွင် သားသမီးများကို ပြုစုပျိုးထောင်ခြင်း",
    sub: "Transition from caregiver to coach, mentor, and lifelong friend.",
    mySub: "ပြုစုစောင့်ရှောက်သူမှသည် လေ့ကျင့်ပေးသူ၊ အကြံပေးမိတ်ဆွေ၊ ထာဝရ မိတ်ဆွေစစ်အဖြစ်သို့ ပြောင်းလဲခြင်း။",
    dur: "45",
    sess: 3,
    badge: "All Ages",
    myBadge: "အသက်အရွယ်မရွေး",
    scripture: "Proverbs 22:6",
    myScripture: "သုတ္တံ ၂၂:၆ — «သူငယ်သွားရာလမ်းဝ၌ ဆုံးမသွန်သင်လော့။ သို့ပြုလျှင် အိုသောအသက်သို့ ရောက်သော်လည်း၊ ထိုလမ်းမှ မလွှဲမရှောင်ဘဲ နေလိမ့်မည်။»",
    topics: [
      "The 4 seasons of parenting posture",
      "The art of launching adult children with blessing",
      "Leaving a multi-generational spiritual legacy"
    ],
    myTopics: [
      "မိဘအုပ်ထိန်းမှု ပုံစံ ရာသီဥတု (၄) မျိုး",
      "အရွယ်ရောက်ပြီးသော သားသမီးများကို ကောင်းချီးပေး၍ လွတ်လပ်စွာ ရပ်တည်စေခြင်း",
      "မျိုးဆက်ပေါင်းများစွာ တည်တံ့မည့် ဝိညာဉ်ရေးရာ အမွေအနှစ် ချန်ထားရစ်ခြင်း"
    ],
    action: "Write a future blessing prayer letter for each child.",
    myAction: "သားသမီးတစ်ဦးစီ၏ အနာဂတ်အတွက် ကောင်းချီးမင်္ဂလာ ဆုတောင်းပေးစာ တစ်စောင် ရေးသားပေးပါ။",
    reflect: "Has your parenting style matured to match your child's current stage?",
    myReflect: "သင့်မိဘအုပ်ထိန်းမှု ပုံစံသည် သင့်သားသမီး၏ လက်ရှိ အရွယ်နှင့် စိတ်ပိုင်းဆိုင်ရာ ရင့်ကျက်မှုအဆင့်နှင့် ကိုက်ညီပါသလား။"
  }
];

const QUIZ = [
  {
    q: "When your child makes a major mistake, what is your first instinctive reaction?",
    myQ: "သင့်ကလေး အမှားကြီးတစ်ခု လုပ်မိသည့်အခါ သင့်၏ ပထမဆုံး စိတ်အလိုအလျောက် တုံ့ပြန်မှုသည် အဘယ်နည်း။",
    opts: [
      { t: "Raise my voice or criticize sharply.", myT: "အသံမြှင့် အော်ဟစ်ခြင်း သို့မဟုတ် ပြင်းထန်စွာ ပြစ်တင်ဝေဖန်ခြင်း။", s: 1 },
      { t: "Give the silent treatment so they feel guilty.", myT: "အမှားကို နောင်တရစေရန် စကားမပြောဘဲ နေခြင်း (Silent treatment)။", s: 2 },
      { t: "Pause, self-regulate, then sit and calmly discuss what happened.", myT: "ခေတ္တရပ်နားကာ စိတ်ကို ထိန်းချုပ်ပြီးမှ အတူထိုင်၍ အေးဆေးစွာ ဆွေးနွေးခြင်း။", s: 4 },
      { t: "Let it slide to avoid household tension.", myT: "အိမ်တွင်း စကားများရန်ဖြစ်မည်ကို စိုးရိမ်၍ မျက်ကွယ်ပြု လျစ်လျူရှုလိုက်ခြင်း။", s: 2 }
    ]
  },
  {
    q: "How are screen-time boundaries managed in your home right now?",
    myQ: "လက်ရှိ သင့်အိမ်ထောင်တွင် ဖုန်းနှင့် စခရင် (Screen-time) သုံးစွဲမှုကို မည်သို့ ထိန်းကျောင်းပါသနည်း။",
    opts: [
      { t: "Almost daily arguments when we ask kids to put devices away.", myT: "ဖုန်းချခိုင်းတိုင်း နေ့စဉ်နီးပါး ရန်ဖြစ်စကားများရသည်။", s: 1 },
      { t: "Clear family tech agreements respected by both parents and children.", myT: "မိဘရော သားသမီးပါ အပြန်အလှန် လေးစားလိုက်နာသော မိသားစု နည်းပညာ သဘောတူညီချက် ရှိသည်။", s: 4 },
      { t: "Kids have unlimited access as long as they don't disturb us.", myT: "လူကြီးများကို အနှောင့်အယှက် မပေးသရွေ့ ကလေးများ လွတ်လပ်စွာ သုံးခွင့်ရှိသည်။", s: 1 },
      { t: "We threaten to confiscate devices but rarely follow through.", myT: "ဖုန်းသိမ်းမည်ဟု ခြိမ်းခြောက်လေ့ရှိသော်လည်း လက်တွေ့တွင် မသိမ်းဖြစ်ပါ။", s: 2 }
    ]
  },
  {
    q: "How often do you have focused one-on-one conversations with each child?",
    myQ: "သားသမီး တစ်ဦးချင်းစီနှင့် နှစ်ကိုယ်ကြား သီးသန့် အာရုံစိုက် စကားပြောဖြစ်သည့် အကြိမ်ရေ မည်မျှရှိပါသနည်း။",
    opts: [
      { t: "Almost every day — intentional bedtime chats or mealtime connection.", myT: "နေ့တိုင်းနီးပါး — ညအိပ်ရာဝင်ချိန် သို့မဟုတ် ထမင်းစားချိန်တွင် ရင်းနှီးစွာ စကားပြောဖြစ်ပါသည်။", s: 4 },
      { t: "Once or twice a week, usually during weekend outings.", myT: "တစ်ပတ်လျှင် တစ်ကြိမ် သို့မဟုတ် နှစ်ကြိမ် (အများအားဖြင့် စနေ/တနင်္ဂနွေ အပြင်သွားချိန်တွင်)။", s: 3 },
      { t: "Rarely — our dialogue is mostly transactional.", myT: "ရှားပါးသည် — ကျွန်ုပ်တို့၏ စကားပြောဆိုမှုသည် အလုပ်သဘော အမိန့်ပေးမှုသာ အများစုဖြစ်သည်။", s: 2 },
      { t: "My child has grown guarded and prefers retreating alone.", myT: "ကလေးသည် အကန့်အသတ်ထားရှိလာပြီး တစ်ယောက်တည်း သီးသန့်နေခြင်းကိုသာ ပိုနှစ်သက်သည်။", s: 1 }
    ]
  },
  {
    q: "How aligned are Father and Mother on household discipline?",
    myQ: "သားသမီးများကို စည်းကမ်းထိန်းသိမ်းရာတွင် ဖခင်နှင့် မိခင်အကြား မည်မျှ သဘောထားညီညွတ်မှု ရှိပါသနည်း။",
    opts: [
      { t: "Very unified — we discuss privately and present a consistent front.", myT: "အလွန် စည်းလုံးညီညွတ်သည် — သီးသန့် အရင်တိုင်ပင်ပြီး ကလေးရှေ့တွင် တူညီသော သဘောထားကို ပြသသည်။", s: 4 },
      { t: "We often contradict each other in front of the kids.", myT: "ကလေးများရှေ့တွင်ပင် အချင်းချင်း ဆန့်ကျင်ကန့်ကွက် စကားများလေ့ရှိသည်။", s: 1 },
      { t: "One parent carries nearly all parenting responsibility.", myT: "မိဘတစ်ဦးတည်းကသာ ကလေးထိန်းသိမ်းမှု တာဝန်အားလုံးကို ထမ်းထားရသည်။", s: 2 },
      { t: "We rarely discuss parenting philosophy due to busy schedules.", myT: "အလုပ်များလွန်းသဖြင့် မိဘအုပ်ထိန်းမှု ခံယူချက်များကို အချင်းချင်း ဆွေးနွေးဖြစ်ခဲသည်။", s: 2 }
    ]
  },
  {
    q: "How are prayer and spiritual values integrated into your family's daily rhythms?",
    myQ: "သင့်မိသားစု၏ နေ့စဉ်ဘဝတွင် ဆုတောင်းခြင်းနှင့် ဝိညာဉ်ရေးရာ တန်ဖိုးများကို မည်သို့ ပေါင်းစပ်ထားပါသနည်း။",
    opts: [
      { t: "We rely almost entirely on Sunday church programmes.", myT: "တနင်္ဂနွေ အသင်းတော် အစီအစဉ်များအပေါ်တွင်သာ အဓိက အားကိုးထားသည်။", s: 2 },
      { t: "Consistent family prayers and children bring their own fears to God.", myT: "ပုံမှန် မိသားစု ဆုတောင်းခြင်းရှိပြီး ကလေးများသည် မိမိတို့၏ စိုးရိမ်မှုများကို ဘုရားသခင်ထံ ကိုယ်တိုင် အပ်နှံဆုတောင်းတတ်ကြသည်။", s: 4 },
      { t: "Brief mealtime blessings but rarely deeper spiritual moments.", myT: "ထမင်းစားချိန် အစားအသောက် ကောင်းချီးတောင်းခြင်းလောက်သာ ရှိပြီး နက်ရှိုင်းသော ဝိညာဉ်ရေး ဆွေးနွေးမှု ရှားပါးသည်။", s: 2 },
      { t: "We long for family devotionals but feel unsure how to start.", myT: "မိသားစု ဝတ်ပြုကိုးကွယ်မှု ပြုလုပ်လိုသော်လည်း မည်သို့ စတင်ရမည်ကို မသေချာပါ။", s: 3 }
    ]
  }
];

const ARCHETYPES = {
  high: {
    title: "The Heart-Connected Parent",
    myTitle: "နှလုံးသားချင်း နီးကပ်ချိတ်ဆက်သော မိဘ",
    icon: "🌟",
    color: "#27ae60",
    desc: "Your family has a strong foundation of emotional warmth. Your next opportunity is reinforcing digital resilience and multi-generational spiritual legacy.",
    myDesc: "သင့်မိသားစုသည် မေတ္တာနှင့် နွေးထွေးသော ဆက်ဆံရေး အခြေခံကောင်းများ ရှိနှင့်ပြီးဖြစ်ပါသည်။ ယခုအခါ ဒစ်ဂျစ်တယ်ခေတ် အသိပညာနှင့် မျိုးဆက်များစွာအတွက် ဝိညာဉ်ရေးရာ အမွေအနှစ်များကို ပိုမိုခိုင်မာစေရန် အထူးအခွင့်အရေး ရှိပါသည်။",
    mods: [5, 10, 11]
  },
  mid: {
    title: "The Foundation-Building Parent",
    myTitle: "အခြေခံကောင်းကို တည်ဆောက်နေသော မိဘ",
    icon: "🌱",
    color: "#F5A800",
    desc: "You deeply desire to raise wholesome children, but busy schedules create friction. Focusing on emotional connection and clear digital boundaries will bring immediate peace.",
    myDesc: "သင်သည် သားသမီးများကို ကောင်းမွန်စွာ ပြုစုပျိုးထောင်လိုသော စေတနာဆန္ဒ ကြီးမားသော်လည်း နေ့စဉ် အလုပ်တာဝန် ဖိစီးမှုများကြောင့် အခက်အခဲအချို့ ကြုံတွေ့နေရပါသည်။ စိတ်ခံစားမှု ဆက်ဆံရေးနှင့် ဒစ်ဂျစ်တယ် စည်းဘောင်များကို ရှင်းလင်းစွာ ချမှတ်ခြင်းဖြင့် ချက်ချင်း ငြိမ်သက်ခြင်းကို တွေ့ရှိရပါမည်။",
    mods: [2, 4, 6]
  },
  low: {
    title: "The Relationship-Restoring Parent",
    myTitle: "မိသားစုဆက်ဆံရေးကို ပြန်လည်ကုစားရမည့် မိဘ",
    icon: "🔥",
    color: "#e74c3c",
    desc: "Your household is in a wearying season. Take heart — the path forward begins with personal role modelling and restoring unconditional emotional safety.",
    myDesc: "လက်ရှိတွင် သင့်အိမ်ထောင်သည် မောပန်းနွမ်းနယ်စရာ ကာလတစ်ခုကို ဖြတ်သန်းနေရပေမည်။ စိတ်အားမလျှော့ပါနှင့် — ရှေ့ဆက်ရမည့် လမ်းစသည် မိမိကိုယ်တိုင် စံနမူနာပြခြင်းနှင့် သားသမီးအတွက် အကန့်အသတ်မရှိသော မေတ္တာနှင့် စိတ်ချလုံခြုံမှုကို ပြန်လည်တည်ဆောက်ခြင်းမှ စတင်ပါသည်။",
    mods: [1, 2, 7]
  }
};

const TESTIMONIALS = [
  {
    name: "Rev. David Thang Mung",
    role: "Senior Pastor",
    myRole: "အကြီးတန်း သင်းအုပ်ဆရာ",
    church: "Grace Community Church, Yangon",
    myChurch: "Grace Community Church၊ ရန်ကုန်မြို့",
    color: "#003087",
    init: "DT",
    stars: 5,
    youtube: "MPe_rOu_zUk",
    quote: "The Parenting Project is the answer our church needed. After 11 weeks of small-group sessions, marriages were renewed and parents found courage to have conversations they had avoided for years.",
    myQuote: "«The Parenting Project ဟာ ကျွန်ုပ်တို့ အသင်းတော်အတွက် ဘုရားသခင် ပေးသနားတဲ့ အဖြေတစ်ခုပါပဲ။ ၁၁ ပတ်ကြာ ဆဲလ်အဖွဲ့ငယ်တွေမှာ မိဘတွေ အတူတကွ လေ့လာကြပြီးတဲ့အခါ အိမ်ထောင်ရေးတွေ ပြန်လည်နွေးထွေးလာပြီး နှစ်ပေါင်းများစွာ မပြောရဲခဲ့တဲ့ သားသမီးတွေနဲ့ ပွင့်လင်းတဲ့ စကားဝိုင်းတွေကို ရဲရဲဝံ့ဝံ့ စတင်နိုင်ခဲ့ကြပါတယ်။»"
  },
  {
    name: "Ko Aung & Ma Thida",
    role: "Parents of 3 children",
    myRole: "သားသမီး ၃ ဦး၏ မိဘများ",
    church: "Calvary Baptist Church, Mandalay",
    myChurch: "Calvary Baptist Church၊ မန္တလေးမြို့",
    color: "#F5A800",
    init: "AT",
    stars: 5,
    youtube: "a6CyfwDrPjk",
    quote: "The Digital Household module completely changed our home. The nightly battles over phones are gone. Our teenagers now put devices away willingly and talk before bed.",
    myQuote: "«ဒစ်ဂျစ်တယ်ခေတ် မိသားစု စီမံခန့်ခွဲမှု သင်ခန်းစာကြောင့် ကျွန်တော်တို့ အိမ်ထောင် အကြီးအကျယ် ပြောင်းလဲသွားခဲ့ပါတယ်။ ညတိုင်း ဖုန်းလုပြီး စကားများရတဲ့ ဒုက္ခတွေ လုံးဝ မရှိတော့ပါဘူး။ အခုဆို ဆယ်ကျော်သက် သားသမီးတွေဟာ ညအိပ်ရာဝင်ချိန်မှာ ဖုန်းတွေကို ကိုယ်တိုင် သေတ္တာထဲ လာထည့်ပြီး မိဘတွေနဲ့ စကားပြောလာကြပါပြီ။»"
  },
  {
    name: "Daw Su Myat Noe",
    role: "Family Ministry Coordinator",
    myRole: "မိသားစု ဓမ္မအမှု ညှိနှိုင်းရေးမှူး",
    church: "Lychee Garden Church, Naypyidaw",
    myChurch: "လမုခင်း အသင်းတော်၊ နေပြည်တော်",
    color: "#1e8449",
    init: "SM",
    stars: 5,
    youtube: "EnZpPoiRMTs",
    quote: "We trained 12 facilitators and now 80 parent couples meet weekly. The curriculum is deeply practical and the Burmese language materials made adoption effortless.",
    myQuote: "«ကျွန်မတို့ အသင်းတော်မှာ ဦးဆောင်သူ ၁၂ ဦးကို လေ့ကျင့်ပေးခဲ့ပြီး အခုဆို မိဘဇနီးမောင်နှံ ၈၀ ကျော် အပတ်စဉ် ပုံမှန် တွေ့ဆုံနေကြပါတယ်။ သင်ရိုးဟာ အလွန်လက်တွေ့ကျပြီး မြန်မာဘာသာစကားနဲ့ စာအုပ်စာတမ်းတွေ ပြည့်စုံတာကြောင့် မိဘတွေ စိတ်အားထက်သန်စွာ ပါဝင်ကြပါတယ်။»"
  }
];

// ==========================================
// OFFICIAL YOUTUBE VIDEO LIBRARY DATA
// From https://www.youtube.com/@TheParentingProject
// ==========================================
let VIDEOS = [
  {
    id: "trailer",
    youtube: "5sohQQF_FqM",
    title: "Official 2025 Trailer — The Parenting Project",
    myTitle: "The Parenting Project ၂၀၂၅ တရားဝင် မိတ်ဆက်ဗီဒီယို",
    badge: "Official Promo",
    myBadge: "တရားဝင် မိတ်ဆက်ဗီဒီယို",
    thumb: "https://i.ytimg.com/vi/5sohQQF_FqM/hqdefault.jpg"
  },
  {
    id: 1,
    youtube: "hKSMxbFee1U",
    title: "Module 1: Being a Positive Role Model",
    myTitle: "မော်ဂျူး ၁: ကောင်းသော စံနမူနာပြ မိဘဖြစ်ခြင်း",
    badge: "Module 01",
    myBadge: "မော်ဂျူး ၀၁",
    thumb: "https://i.ytimg.com/vi/hKSMxbFee1U/hqdefault.jpg"
  },
  {
    id: 2,
    youtube: "GVK5Wc0NZE4",
    title: "Module 2: Building Deep Connection",
    myTitle: "မော်ဂျူး ၂: နက်ရှိုင်းသော မိသားစု ဆက်ဆံရေး တည်ဆောက်ခြင်း",
    badge: "Module 02",
    myBadge: "မော်ဂျူး ၀၂",
    thumb: "https://i.ytimg.com/vi/GVK5Wc0NZE4/hqdefault.jpg"
  },
  {
    id: 3,
    youtube: "lmtVOhpszCQ",
    title: "Module 3: Healthy Parental Authority",
    myTitle: "မော်ဂျူး ၃: မေတ္တာနှင့် တည်ဆောက်ထားသော မိဘဩဇာ",
    badge: "Module 03",
    myBadge: "မော်ဂျူး ၀၃",
    thumb: "https://i.ytimg.com/vi/lmtVOhpszCQ/hqdefault.jpg"
  },
  {
    id: 4,
    youtube: "q1NTvlZhv-Y",
    title: "Module 4: Filling the Emotional Tank",
    myTitle: "မော်ဂျူး ၄: သားသမီး၏ စိတ်ခံစားချက် အင်အား ဖြည့်ဆည်းပေးခြင်း",
    badge: "Module 04",
    myBadge: "မော်ဂျူး ၀၄",
    thumb: "https://i.ytimg.com/vi/q1NTvlZhv-Y/hqdefault.jpg"
  },
  {
    id: 5,
    youtube: "Pt-ZYVIAGBg",
    title: "Module 5: Navigating the Digital Household",
    myTitle: "မော်ဂျူး ၅: ဒစ်ဂျစ်တယ်ခေတ် မိသားစု စီမံခန့်ခွဲမှု",
    badge: "Module 05",
    myBadge: "မော်ဂျူး ၀၅",
    thumb: "https://i.ytimg.com/vi/Pt-ZYVIAGBg/hqdefault.jpg"
  },
  {
    id: 6,
    youtube: "KEUAW5PsV8A",
    title: "Module 6: Boundaries & Positive Discipline",
    myTitle: "မော်ဂျူး ၆: စည်းဘောင်များနှင့် အပြုသဘောဆောင်သော ဆုံးမပဲ့ပြင်ခြင်း",
    badge: "Module 06",
    myBadge: "မော်ဂျူး ၀၆",
    thumb: "https://i.ytimg.com/vi/KEUAW5PsV8A/hqdefault.jpg"
  },
  {
    id: 7,
    youtube: "FfwH7uOiq7M",
    title: "Module 7: The Father's Heart & Presence",
    myTitle: "မော်ဂျူး ၇: ဖခင်၏ နှလုံးသားနှင့် အတူရှိနေပေးခြင်း",
    badge: "Module 07",
    myBadge: "မော်ဂျူး ၀၇",
    thumb: "https://i.ytimg.com/vi/FfwH7uOiq7M/hqdefault.jpg"
  },
  {
    id: 8,
    youtube: "FBtNGyBDZIM",
    title: "Module 8: Working Parents: Career & Home",
    myTitle: "မော်ဂျူး ၈: အလုပ်လုပ်သော မိဘများ- အလုပ်နှင့် အိမ်ထောင် ဟန်ချက်ညီစေခြင်း",
    badge: "Module 08",
    myBadge: "မော်ဂျူး ၀၈",
    thumb: "https://i.ytimg.com/vi/FBtNGyBDZIM/hqdefault.jpg"
  },
  {
    id: 9,
    youtube: "uQByH6xNFfM",
    title: "Module 9: Nurturing Foundational Faith",
    myTitle: "မော်ဂျူး ၉: ခိုင်မာသော ယုံကြည်ခြင်း အခြေခံကို ပျိုးထောင်ခြင်း",
    badge: "Module 09",
    myBadge: "မော်ဂျူး ၀၉",
    thumb: "https://i.ytimg.com/vi/uQByH6xNFfM/hqdefault.jpg"
  },
  {
    id: 10,
    youtube: "dJLSp6Nh80g",
    title: "Module 10: Healthy Sexuality in the Family",
    myTitle: "မော်ဂျူး ၁၀: မိသားစုအတွင်း ကျန်းမာသော လိင်ပိုင်းဆိုင်ရာ အသိပညာပေးခြင်း",
    badge: "Module 10",
    myBadge: "မော်ဂျူး ၁၀",
    thumb: "https://i.ytimg.com/vi/dJLSp6Nh80g/hqdefault.jpg"
  },
  {
    id: 11,
    youtube: "v_bMaW2yHT8",
    title: "Module 11: Parenting Through Every Life Stage",
    myTitle: "မော်ဂျူး ၁၁: ဘဝအဆင့်တိုင်းတွင် သားသမီးများကို ပြုစုပျိုးထောင်ခြင်း",
    badge: "Module 11",
    myBadge: "မော်ဂျူး ၁၁",
    thumb: "https://i.ytimg.com/vi/v_bMaW2yHT8/hqdefault.jpg"
  }
];

const FAQS = [
  {
    q: "Is there any cost for churches to use this curriculum?",
    myQ: "အသင်းတော်များအနေဖြင့် ဤသင်ရိုးညွှန်းတမ်းကို အသုံးပြုရန် ကုန်ကျစရိတ် ရှိပါသလား။",
    a: "Absolutely NO FEES — 100% FREE. CBN Asia provides The Parenting Project as a ministry gift to empower local churches across Myanmar to raise godly families.",
    myA: "လုံးဝ ကုန်ကျစရိတ် မရှိပါ — ၁၀၀% အခမဲ့ ဖြစ်ပါသည်။ CBN Asia သည် မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသန္တရ အသင်းတော်များ ခိုင်မာသော ခရစ်ယာန်မိသားစုများ ပျိုးထောင်နိုင်စေရန်အတွက် The Parenting Project ကို မေတ္တာလက်ဆောင်အဖြစ် ပံ့ပိုးပေးခြင်း ဖြစ်ပါသည်။"
  },
  {
    q: "How long does it take to complete all 11 modules?",
    myQ: "မော်ဂျူး (၁၁) ခုလုံးကို သင်ကြားပြီးမြောက်ရန် အချိန် မည်မျှ ကြာမြင့်မည်နည်း။",
    a: "Most churches run one module per week in small groups over 11–12 weeks. The format is fully flexible and can fit your existing cell group or family ministry calendar.",
    myA: "အသင်းတော် အများစုသည် တစ်ပတ်လျှင် မော်ဂျူးတစ်ခုနှုန်းဖြင့် အုပ်စုငယ်များတွင် ၁၁ ပတ်မှ ၁၂ ပတ်အတွင်း ပြုလုပ်ကြပါသည်။ ဤပုံစံသည် အလွန် ပြောင်းလွယ်ပြင်လွယ်ရှိပြီး သင့်အသင်းတော်၏ လက်ရှိ ဆဲလ်အဖွဲ့ငယ်များ သို့မဟုတ် မိသားစု မိတ်သဟာယ အစီအစဉ်များနှင့် ကိုက်ညီအောင် ညှိနှိုင်းဆောင်ရွက်နိုင်ပါသည်။"
  },
  {
    q: "Who can serve as a small group facilitator?",
    myQ: "အုပ်စုငယ် ဦးဆောင်သူ (Facilitator) အဖြစ် မည်သူများ ပါဝင်ဆောင်ရွက်နိုင်သနည်း။",
    a: "Any mature couple or cell group leader appointed by the pastoral team. CBN Asia provides complete facilitator training videos, leader handbooks, and discussion guides in Myanmar language.",
    myA: "သင်းအုပ်ဆရာနှင့် ခေါင်းဆောင်မှုအဖွဲ့မှ တာဝန်ပေးအပ်သော ရင့်ကျက်သည့် ဇနီးမောင်နှံများ သို့မဟုတ် ဆဲလ်အဖွဲ့ငယ် ခေါင်းဆောင်များ ဦးဆောင်နိုင်ပါသည်။ CBN Asia မှ ဦးဆောင်သူ လေ့ကျင့်ရေး ဗီဒီယိုများ၊ ခေါင်းဆောင်လက်စွဲစာအုပ်များနှင့် ဆွေးနွေးမှု လမ်းညွှန်များကို မြန်မာဘာသာဖြင့် အပြည့်အစုံ ပံ့ပိုးပေးပါသည်။"
  },
  {
    q: "Is this material suitable for parents of toddlers and teenagers?",
    myQ: "ဤသင်ရိုးသည် ကလေးငယ်များ၏ မိဘများနှင့် ဆယ်ကျော်သက် မိဘများအတွက် သင့်တော်ပါသလား။",
    a: "Yes! Principles span toddlers to young adults, with case studies grouped by developmental stage so every parent finds relevant, immediately applicable guidance.",
    myA: "ဟုတ်ကဲ့၊ အလွန်သင့်တော်ပါသည်။ သင်ခန်းစာ အခြေခံသဘောတရားများသည် လမ်းလျှောက်စအရွယ်မှသည် အရွယ်ရောက်ပြီးသူအထိ သက်ဆိုင်ပြီး လက်တွေ့သာဓကများကိုလည်း သက်ဆိုင်ရာ အသက်အရွယ်အုပ်စုအလိုက် ခွဲခြားဖော်ပြထားသဖြင့် မိဘတိုင်း ချက်ချင်း လက်တွေ့ကျင့်သုံးနိုင်ပါသည်။"
  },
  {
    q: "Is the content available in Myanmar (Burmese) language?",
    myQ: "သင်ထောက်ကူပစ္စည်းများအားလုံး မြန်မာဘာသာဖြင့် ရရှိနိုင်ပါသလား။",
    a: "Yes — all 11 modules are fully translated into Myanmar language, including video subtitles, participant workbooks, and facilitator guides.",
    myA: "ဟုတ်ကဲ့၊ မော်ဂျူး (၁၁) ခုလုံးကို မြန်မာဘာသာသို့ အပြည့်အစုံ ဘာသာပြန်ဆိုထားပြီး ဗီဒီယိုစာတန်းထိုးများ၊ သင်တန်းသားလက်စွဲစာအုပ်များနှင့် ဦးဆောင်သူလမ်းညွှန်များ အားလုံး စုံလင်စွာ ပါဝင်ပါသည်။"
  },
  {
    q: "How do we get started as a partner church?",
    myQ: "မိတ်ဖက်အသင်းတော်အဖြစ် မည်သို့ စတင်လက်တွဲနိုင်သနည်း။",
    a: "Simply click 'Register Your Church' and complete the short form. Our Myanmar CBN Asia team will contact you within 1–2 business days with your access credentials and starter kit.",
    myA: "«သင့်အသင်းတော်ကို စာရင်းသွင်းပါ» ခလုတ်ကို နှိပ်ပြီး ဖောင်တိုလေးကို ဖြည့်စွက်ပေးရုံသာ ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ မြန်မာနိုင်ငံ CBN Asia အဖွဲ့သည် ၁-၂ ရုံးဖွင့်ရက်အတွင်း သင့်ထံသို့ သင်ရိုးအသုံးပြုခွင့်နှင့် စတင်အသုံးပြုရန် လမ်းညွှန်ပစ္စည်းများကို ဆက်သွယ်ပေးပို့ပါမည်။"
  }
];

const BENEFITS = [
  {
    icon: "🎬",
    title: "HD Video Content in Myanmar",
    myTitle: "မြန်မာဘာသာဖြင့် အရည်အသွေးမြင့် ဗီဒီယို သင်ခန်းစာများ",
    desc: "11 professionally produced teaching videos with full Myanmar language subtitles, available online and offline.",
    myDesc: "မြန်မာစာတန်းထိုးနှင့် အသံဖြင့် ကျွမ်းကျင်စွာ ရိုက်ကူးထုတ်လုပ်ထားသော မော်ဂျူး (၁၁) ခု သင်ခန်းစာဗီဒီယိုများကို အွန်လိုင်းရော အော့ဖ်လိုင်းပါ အသုံးပြုနိုင်ပါသည်။"
  },
  {
    icon: "📋",
    title: "Complete Facilitator Guidebook",
    myTitle: "သင်တန်းဦးဆောင်သူ လက်စွဲစာအုပ် အပြည့်အစုံ",
    desc: "Leader handbook with discussion prompts, moderation tips, and sensitive-topic guidance in Myanmar language.",
    myDesc: "အုပ်စုငယ် ဆွေးနွေးပွဲများ ဦးဆောင်ရန် မေးခွန်းများ၊ နည်းစနစ်များနှင့် အရေးကြီး အကြောင်းအရာများကို ကိုင်တွယ်ဖြေရှင်းနည်း လမ်းညွှန်စာအုပ် (မြန်မာဘာသာဖြင့်)။"
  },
  {
    icon: "📱",
    title: "Mobile App Access",
    myTitle: "မိုဘိုင်းအက်ပ်ဖြင့် အလွယ်တကူ လေ့လာနိုင်ခြင်း",
    desc: "Parents access content via smartphone with offline download — no stable internet connection required.",
    myDesc: "မိဘများသည် စမတ်ဖုန်းဖြင့် အင်တာနက်မလိုဘဲ အော့ဖ်လိုင်း ဒေါင်းလုဒ်ဆွဲကာ အချိန်မရွေး လေ့လာနိုင်ပါသည်။"
  },
  {
    icon: "🤝",
    title: "Ongoing CBN Asia Mentorship",
    myTitle: "CBN Asia အဖွဲ့၏ အစဉ်တစိုက် အကြံပေးကူညီမှု",
    desc: "Our Myanmar team walks alongside your family ministry from launch through module completion celebration.",
    myDesc: "သင်တန်း စတင်ဖွင့်လှစ်ချိန်မှ သင်ခန်းစာများ အောင်မြင်စွာ ပြီးဆုံးသည်အထိ ကျွန်ုပ်တို့၏ မြန်မာပြည်အဖွဲ့က သင့်အသင်းတော်နှင့်အတူ အနီးကပ် လက်တွဲကူညီပါမည်။"
  }
];

const STEPS = [
  {
    num: "01",
    icon: "📋",
    title: "Registration & Onboarding",
    myTitle: "စာရင်းသွင်းခြင်းနှင့် စတင်ပြင်ဆင်ခြင်း",
    desc: "Your church enrolls, assigns a family coordinator, and receives official curriculum access credentials and starter kit.",
    myDesc: "သင့်အသင်းတော်မှ စာရင်းပေးသွင်းပြီး မိသားစုဓမ္မအမှု တာဝန်ခံတစ်ဦးကို သတ်မှတ်ကာ တရားဝင် သင်ရိုးညွှန်းတမ်းနှင့် အစပျိုးပစ္စည်းများကို လက်ခံရယူပါ။"
  },
  {
    num: "02",
    icon: "🎓",
    title: "Facilitator Training",
    myTitle: "ဦးဆောင်သူများအား လေ့ကျင့်ပေးခြင်း",
    desc: "Facilitators are equipped with tools to lead safe, non-judgmental discussions that invite genuine sharing and growth.",
    myDesc: "အပြစ်မတင်ဘဲ လွတ်လပ်စွာ ရင်ဖွင့်နိုင်ပြီး အချင်းချင်း တည်ဆောက်ပေးနိုင်သော အဖွဲ့ငယ် ဆွေးနွေးပွဲများကို ဦးဆောင်နိုင်စေရန် လေ့ကျင့်ပေးပါသည်။"
  },
  {
    num: "03",
    icon: "🎬",
    title: "90-Minute Weekly Sessions",
    myTitle: "အပတ်စဉ် (၉၀) မိနစ် အုပ်စုငယ် မိတ်သဟာယ",
    desc: "Watch a 15–20 min module video together, engage in guided small-group dialogue, and close with family prayer.",
    myDesc: "၁၅-၂၀ မိနစ်ကြာ မော်ဂျူးဗီဒီယိုကို အတူကြည့်ရှုပြီး လမ်းညွှန်မေးခွန်းများဖြင့် ဆွေးနွေးကာ မိသားစုများအတွက် အတူတကွ ဆုတောင်းပေးကြပါသည်။"
  },
  {
    num: "04",
    icon: "🏠",
    title: "Home Practice & Reflection",
    myTitle: "အိမ်တွင်း လက်တွေ့ကျင့်သုံးမှုနှင့် ဆန်းစစ်ခြင်း",
    desc: "Parents apply the weekly challenge with their children at home and share reflections the following week.",
    myDesc: "မိဘများသည် သားသမီးများနှင့်အတူ အပတ်စဉ် စိန်ခေါ်ချက်ကို အိမ်တွင် လက်တွေ့လုပ်ဆောင်ပြီး နောက်အပတ်တွင် ပြန်လည်ဝေငှကြပါသည်။"
  }
];

// Myanmar translations dictionary for static elements
const MY = {
  // Navigation
  "nav-m": "မော်ဂျူး (၁၁) ခု",
  "nav-login-txt": "အကောင့်ဝင်ရန်",
  "nav-ch": "အသင်းတော်များအတွက်",
  "nav-qz": "မိဘဆန်းစစ်ချက်",
  "nav-ab": "အစီအစဉ်အကြောင်း",
  "nav-ts": "သက်သေခံချက်များ",
  "nav-fq": "အမေး/အဖြေများ",
  "nav-reg": "အသင်းတော် စာရင်းသွင်းရန်",
  "drw-m": "မော်ဂျူး (၁၁) ခု",
  "drw-login-txt": "အသင်းတော် အကောင့်ဝင်ရန်",
  "drw-ch": "အသင်းတော်များအတွက်",
  "drw-qz": "မိဘဆန်းစစ်ချက်",
  "drw-ab": "အစီအစဉ်အကြောင်း",
  "drw-ts": "သက်သေခံချက်များ",
  "drw-fq": "အမေး/အဖြေများ",
  "drw-reg": "အသင်းတော် စာရင်းသွင်းရန်",

  // Hero Section
  "h-badge": "CBN Asia မိသားစုတပည့်တော်ဖြစ်စေခြင်း အစီအစဉ် · မြန်မာနိုင်ငံ",
  "h-title1": "မိဘများကို လက်တွဲခွန်အားဖြည့်ပေးခြင်း၊",
  "h-title2": "နောင်မျိုးဆက်သစ်တို့ကို ခိုင်ခံ့စွာ ပျိုးထောင်ခြင်း",
  "h-desc": "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသန္တရ အသင်းတော်များအတွက် သမ္မာကျမ်းစာ စံနှုန်းများပေါ်တွင် အခြေပြုထားသော မိဘသင်ရိုးညွှန်းတမ်း — လုံးဝအခမဲ့ (၁၀၀%)။ သားသမီးများ၏ စရိုက်လက္ခဏာ၊ ယုံကြည်ခြင်းနှင့် စိတ်ပိုင်းဆိုင်ရာ ဖွံ့ဖြိုးမှုကို ဘုရားသခင်၏ ကျေးဇူးတော်ဖြင့် ပျိုးထောင်ပေးရန် ဖြစ်ပါသည်။",
  "h-btn1": "သင်ခန်းစာ မော်ဂျူး (၁၁) ခုကို လေ့လာပါ",
  "h-btn-trailer-txt": "၂၀၂၅ မိတ်ဆက်ဗီဒီယို ကြည့်ရှုရန်",
  "h-btn2": "သင့်အသင်းတော်ကို အခမဲ့ စာရင်းသွင်းပါ",
  "hf-1": "တရားဝင် CBN Asia မိသားစုအမှုတော်ဆောင်ခြင်း",
  "hf-2": "မြန်မာနှင့် အင်္ဂလိပ် နှစ်ဘာသာသုံး သင်ထောက်ကူများ",
  "h-free": "ဒေသန္တရ အသင်းတော်များအတွက် ၁၀၀% အခမဲ့",
  "fb-t1": "အဆင့်သတ်မှတ်ချက် ၄.၉ / ၅",
  "fb-s1": "မြန်မာနိုင်ငံရှိ အသင်းတော်ခေါင်းဆောင်များ",
  "fb-t2": "လက်တွေ့ကျ မော်ဂျူး (၁၁) ခု",
  "fb-s2": "ဦးဆောင်သူလက်စွဲနှင့် မိုဘိုင်းအက်ပ်",
  "s1": "လက်တွေ့ကျ မော်ဂျူးများ",
  "s2": "မိတ်ဖက် အသင်းတော်များ",
  "s3": "သင်တန်းဆင်း မိဘများ",
  "s4": "မိသားစုများ၏ စိတ်ကျေနပ်မှု",

  // Curriculum Modules
  "m-tag": "ပြည့်စုံစုံလင်သော သင်ရိုးညွှန်းတမ်း",
  "m-title": "မိသားစု တပည့်တော်ဖြစ်စေခြင်း မော်ဂျူး (၁၁) ခု",
  "m-sub": "မော်ဂျူးတိုင်းတွင် ဗီဒီယိုသင်ခန်းစာ၊ အဖွဲ့ငယ်ဦးဆောင်သူလက်စွဲ၊ မိဘလေ့လာရေးစာအုပ်နှင့် အိမ်တွင်းလက်တွေ့စိန်ခေါ်ချက်များ စုံလင်စွာပါဝင်ပါသည်",
  "pill-all": "အားလုံး",
  "pill-char": "စရိုက်လက္ခဏာ",
  "pill-conn": "ဆက်ဆံရေး ရင်းနှီးမှု",
  "pill-dig": "ဒစ်ဂျစ်တယ်ခေတ်",
  "pill-faith": "ယုံကြည်ခြင်း",

  // Video Section
  "v-tag": "တရားဝင် ဗီဒီယို စာကြည့်တိုက်",
  "v-title": "The Parenting Project ဗီဒီယိုများကို လက်တွေ့ ကြည့်ရှုပါ",
  "v-sub": "@TheParentingProject မှ တရားဝင် သင်ရိုးညွှန်းတမ်း မော်ဂျူး မိတ်ဆက်များနှင့် မိဘများ၏ လက်တွေ့ဘဝ အသွင်ပြောင်းလဲမှု ဗီဒီယိုများကို လေ့လာပါ။",
  "v-note": "တရားဝင် YouTube ချန်နယ်:",
  "ppr-m-prev-txt": "ရှေ့သို့",
  "ppr-m-next-txt": "နောက်သို့",
  "ppr-m-yt-txt": "YouTube တွင် ကြည့်ရှုပါ",
  "ppr-m-guide-txt": "သင်ရိုးလမ်းညွှန် အပြည့်အစုံ ကြည့်ရှုရန်",

  // Quiz Section
  "q-title": "မိဘအုပ်ထိန်းမှုပုံစံ ဆန်းစစ်လေ့လာခြင်း",
  "q-sub": "မေးခွန်း (၅) ခု ဖြေဆိုပြီး မိမိ၏ မိဘအုပ်ထိန်းမှုပုံစံနှင့် သင့်တော်သော သင်ခန်းစာအကြံပြုချက်များကို ရယူပါ",
  "qs-title": "မိဘအုပ်ထိန်းမှု အခြေအနေ ဆန်းစစ်ချက်",
  "qs-sub": "(၃) မိနစ်ခန့်သာ အချိန်ယူရပါမည်",
  "quiz-start-btn": "ဆန်းစစ်ချက် စတင်ရန်",
  "r-title-label": "သင့်မိဘအုပ်ထိန်းမှု ပုံစံ ဆန်းစစ်ချက်ရလဒ်",
  "rec-label": "သင့်အတွက် အထူးအကြံပြုလိုသော မော်ဂျူးများ",
  "q-retake": "ပြန်လည် ဖြေဆိုမည်",

  // Church Section
  "ch-tag": "အသင်းတော် မိတ်ဖက်လက်တွဲမှု",
  "ch-title": "The Parenting Project သင်ရိုးကို သင့်အသင်းတော်သို့ ဆောင်ယူပါ",
  "ch-sub": "CBN Asia သည် မော်ဂျူး (၁၁) ခုပါဝင်သော သင်ရိုးညွှန်းတမ်း၊ ဦးဆောင်သူသင်တန်းနှင့် မိုဘိုင်းအက်ပ်တို့ကို မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသန္တရ အသင်းတော်များအတွက် အခမဲ့ (၁၀၀%) ပံ့ပိုးပေးပါသည်",
  "open-reg-btn": "သင့်အသင်းတော်ကို ယခုပင် စာရင်းသွင်းပါ",
  "dl-kit-btn": "အချက်အလက် စာရွက်စာတမ်းများ ဒေါင်းလုဒ်ရယူပါ",
  "cb-label": "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ မိတ်ဖက်အသင်းတော်များ",

  // Registration Modal Head
  "rm-title": "သင့်အသင်းတော်ကို စာရင်းသွင်းပါ",
  "rm-sub": "The Parenting Project Myanmar တွင် မိတ်ဖက်အသင်းတော်အဖြစ် ပါဝင်လက်တွဲပါ။",

  // About / Community Model
  "ab-tag": "အသင်းတော် အသိုက်အဝန်းပုံစံ",
  "ab-title": "သင့်အသင်းတော်တွင် မည်သို့ လက်တွေ့အကောင်အထည်ဖော်မည်နည်း",
  "ab-sub": "အုပ်စုငယ်တစ်ခုလျှင် မိဘ (၆) ဦးမှ (၁၂) ဦးအထိ ပါဝင်နိုင်သော အဖွဲ့ငယ်/ဆဲလ်အုပ်စု (Small Group) မိတ်သဟာယပုံစံဖြင့် ၁၁ ပတ်ကြာ ပြုလုပ်ပါသည်",

  // Welcome Host Banner
  "hb-title": "The Parenting Project မှ နွေးထွေးစွာ ကြိုဆိုပါသည်",
  "hb-sub": "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ ဒေသန္တရ အသင်းတော်များနှင့် လက်တွဲ၍ ခရစ်တော်ဗဟိုပြု ခရစ်ယာန်မိသားစုများကို တည်ဆောက်ခြင်း",

  // Testimonials
  "t-tag": "လက်တွေ့ သက်သေခံချက်များ",
  "t-title": "သင်းအုပ်ဆရာများနှင့် မိဘများ၏ သက်သေခံချက်များ",
  "t-sub": "မြန်မာနိုင်ငံတစ်ဝှမ်းရှိ မိသားစုများ The Parenting Project ကြောင့် မိမိတို့အိမ်ထောင်မိသားစု မည်သို့ အသွင်ပြောင်းလဲခဲ့ပုံကို ဝေငှထားပါသည်",

  // FAQ
  "faq-tag": "သိရှိလိုသည်များ",
  "faq-title": "မကြာခဏမေးသော မေးခွန်းများနှင့် အဖြေများ",
  "faq-sub": "သင့်အသင်းတော်တွင် The Parenting Project ကို စတင်အသုံးပြုခြင်းနှင့်ပတ်သက်၍ သိရှိလိုသည်များ",

  // Footer
  "f-about": "CBN Asia မှ ဒေသန္တရ အသင်းတော်များနှင့် ပူးပေါင်း၍ မိဘများကို လက်တွဲခွန်အားဖြည့်ပေးကာ ခရစ်တော်၌ ခိုင်မာသော မိသားစုများ ပျိုးထောင်ပေးသည့် ဝိညာဉ်ရေးရာ အစီအစဉ်ဖြစ်ပါသည်။",
  "f-ql": "အရေးကြီး လင့်ခ်များ",
  "f-ct": "မြန်မာနိုင်ငံ ဆက်သွယ်ရန်",
  "f-nl": "အသစ်တင်ပြချက်များ ရယူရန်",
  "f-nl-sub": "အပတ်စဉ် မိဘသင်ခန်းစာများနှင့် အသင်းတော် သတင်းလွှာများကို လက်ခံရယူပါ",
  "nl-btn": "စာရင်းသွင်းမည်",
  "f-addr": "ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",
  "f-copy": "© ၂၀၂၆ The Parenting Project မြန်မာ · CBN Asia ၏ အစီအစဉ် · မူပိုင်ခွင့် အားလုံးရယူပြီး။",
  "fl-m": "မော်ဂျူး (၁၁) ခု",
  "fl-login-txt": "အသင်းတော် အကောင့်ဝင်ရန်",
  "fl-ch": "အသင်းတော်များအတွက်",
  "fl-qz": "မိဘဆန်းစစ်ချက်",
  "fl-ab": "မည်သို့လည်ပတ်သနည်း",
  "fl-fq": "မေးခွန်းနှင့်အဖြေများ"
};

// STATE
let lang = 'en', filter = 'all', searchQ = '', quizStep = 0, quizAns = [], regStep = 1, regData = {};

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function storeEn() {
  for (const k in MY) {
    const el = document.getElementById(k);
    if (el && !el.dataset.en) {
      el.dataset.en = el.textContent;
    }
  }
}

function applyLang() {
  document.body.classList.toggle('lang-my', lang === 'my');
  
  if (lang === 'my') {
    for (const k in MY) {
      setText(k, MY[k]);
    }
    const searchEl = document.getElementById('search');
    if (searchEl) searchEl.placeholder = "သင်ခန်းစာ မော်ဂျူးများကို ရှာဖွေပါ...";
    const emailEl = document.getElementById('nl-email');
    if (emailEl) emailEl.placeholder = "သင့်အီးမေးလ် ထည့်ပါ...";
  } else {
    for (const k in MY) {
      const el = document.getElementById(k);
      if (el && el.dataset.en) {
        el.textContent = el.dataset.en;
      }
    }
    const searchEl = document.getElementById('search');
    if (searchEl) searchEl.placeholder = "Search modules...";
    const emailEl = document.getElementById('nl-email');
    if (emailEl) emailEl.placeholder = "Your email...";
  }

  // Re-render dynamic components
  renderModules();
  renderBenefits();
  renderSteps();
  renderTestimonials();
  renderFAQ();
  if (typeof updateVideoCarouselLanguage === 'function') updateVideoCarouselLanguage();
  
  // Re-render quiz if currently active
  const qScreen = document.getElementById('quiz-q-screen');
  if (qScreen && !qScreen.classList.contains('hidden')) {
    renderQ();
  }
  const rScreen = document.getElementById('quiz-result-screen');
  if (rScreen && !rScreen.classList.contains('hidden')) {
    showResult();
  }
  
  // Re-render reg modal if open
  const regOverlay = document.getElementById('reg-overlay');
  if (regOverlay && regOverlay.classList.contains('show')) {
    renderReg();
  }

  // Update authentication navbar state
  if (typeof checkAuthStatus === 'function') {
    checkAuthStatus();
  }
}

function initLang() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const saved = localStorage.getItem('tpp_lang');
    if (urlParams.get('lang') === 'my' || saved === 'my') {
      lang = 'my';
      const btn = document.getElementById('lang-btn');
      if (btn) btn.textContent = '🇬🇧 English';
      applyLang();
    }
  } catch (e) {}
}

// NAVIGATION
function initNav() {
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
  });
  
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  
  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  
  const close = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  };
  
  document.getElementById('drawer-close').addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', close));
  
  document.getElementById('lang-btn').addEventListener('click', () => {
    lang = lang === 'en' ? 'my' : 'en';
    try { localStorage.setItem('tpp_lang', lang); } catch (e) {}
    document.getElementById('lang-btn').textContent = lang === 'my' ? '🇬🇧 English' : '🇲🇲 မြန်မာ';
    applyLang();
    showToast(lang === 'my' ? 'မြန်မာဘာသာသို့ ပြောင်းလဲပြီးပါပြီ' : 'Switched to English');
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// COUNTERS
function runCounters() {
  document.querySelectorAll('.stat-n[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / 1800, 1);
      const v = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = v >= 1000 ? v.toLocaleString() : v;
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = (target >= 1000 ? target.toLocaleString() : target) + (target >= 200 ? '+' : '');
      }
    };
    requestAnimationFrame(step);
  });
}

// MODULES
function renderModules() {
  const grid = document.getElementById('modules-grid');
  if (!grid) return;
  const isMy = lang === 'my';
  const filtered = MODULES.filter(m => {
    const matchCat = filter === 'all' || m.cat === filter;
    const matchSearch = !searchQ || 
      m.title.toLowerCase().includes(searchQ) || 
      m.myTitle.includes(searchQ) || 
      (m.badge && m.badge.toLowerCase().includes(searchQ)) ||
      (m.myBadge && m.myBadge.includes(searchQ));
    return matchCat && matchSearch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state"><div style="font-size:3rem">🔍</div><p>${isMy ? 'ရှာဖွေမှုနှင့်ကိုက်ညီသော သင်ခန်းစာ မတွေ့ရှိပါ။' : 'No modules found. Try a different search.'}</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map(m => `
    <div class="mod-card" data-id="${m.id}" tabindex="0">
      <div class="mod-card-top" style="background:${m.grad}">
        <div class="mod-num">${String(m.id).padStart(2, '0')}</div>
        <div class="mod-icon">${m.icon}</div>
      </div>
      <div class="mod-body">
        <div class="mod-badge">${isMy ? m.myBadge : m.badge}</div>
        <div class="mod-title">${isMy ? m.myTitle : m.title}</div>
        <div class="mod-sub">${isMy ? m.mySub : m.sub}</div>
        <div class="mod-meta">
          <span>🎬 ${isMy ? 'သင်ခန်းစာ ' + m.sess + ' ပိုင်း' : m.sess + ' Sessions'}</span>
          <span>⏱️ ${isMy ? m.dur + ' မိနစ်' : m.dur + ' mins'}</span>
        </div>
      </div>
      <div class="mod-foot">
        <span>${isMy ? 'အသေးစိတ် လေ့လာရန်' : 'View Module Details'}</span>
        <span>→</span>
      </div>
    </div>`).join('');

  grid.querySelectorAll('.mod-card').forEach(c => {
    c.addEventListener('click', () => openMod(+c.dataset.id));
  });
}

function openMod(id) {
  const m = MODULES.find(x => x.id === id);
  if (!m) return;
  const isMy = lang === 'my';

  const bodyEl = document.getElementById('mod-body');
  if (!bodyEl) return;
  bodyEl.innerHTML = `
    <div class="mod-modal-top" style="background:${m.grad}">
      <div class="mod-modal-big-num">${String(m.id).padStart(2, '0')}</div>
      <div class="mod-modal-ico">${m.icon}</div>
    </div>
    <div class="mod-modal-body">
      <div class="mm-badge">${isMy ? m.myBadge : m.badge}</div>
      <div class="mm-title">${isMy ? m.myTitle : m.title}</div>
      <div class="mm-sub">"${isMy ? m.mySub : m.sub}"</div>
      <div>
        <div class="mm-section-label">${isMy ? 'အဓိက ဆွေးနွေးမည့် အကြောင်းအရာများ' : 'Key Topics'}</div>
        <div class="mm-topics">
          ${(isMy ? m.myTopics : m.topics).map(tp => `<div class="mm-topic"><span class="mm-bull">▸</span><span>${tp}</span></div>`).join('')}
        </div>
      </div>
      <div class="mm-cards">
        <div class="mm-card">
          <div class="mm-card-lbl">${isMy ? 'အပတ်စဉ် လက်တွေ့စိန်ခေါ်ချက်' : 'Weekly Action Step'}</div>
          <div class="mm-card-val">${isMy ? m.myAction : m.action}</div>
        </div>
        <div class="mm-card">
          <div class="mm-card-lbl">${isMy ? 'ကိုယ်တိုင် ပြန်လည်ဆန်းစစ်ရန် မေးခွန်း' : 'Reflection Question'}</div>
          <div class="mm-card-val">${isMy ? m.myReflect : m.reflect}</div>
        </div>
      </div>
      <div class="scripture-box">
        <div class="scripture-lbl">${isMy ? 'သမ္မာကျမ်းစာ အခြေခံချက်' : 'Biblical Anchor'}</div>
        <div class="scripture-val">${isMy ? m.myScripture : m.scripture}</div>
      </div>
      <div class="mm-cta">
        ${m.youtube ? `
        <button class="btn btn-glass-gold btn-watch-mod" style="margin-bottom:.75rem" onclick="openVideoModalById('${m.youtube}', '${(isMy ? m.myTitle : m.title).replace(/'/g, "\\'")}')">
          <span style="font-size:1.15rem;margin-right:6px">▶</span>
          <span>${isMy ? 'ဤသင်ခန်းစာ နမူနာဗီဒီယို ကြည့်ရှုရန်' : 'Watch Module Teaser Video'}</span>
        </button>` : ''}
        <button class="btn btn-blue btn-lg" style="width:100%;justify-content:center" onclick="closeMod();document.getElementById('church').scrollIntoView({behavior:'smooth'})">
          ${isMy ? 'ဤသင်ခန်းစာကို ရယူရန် စာရင်းသွင်းပါ →' : 'Register to Access This Module →'}
        </button>
      </div>
    </div>`;
  show('mod-overlay');
}

function closeMod() {
  hide('mod-overlay');
}

function initModules() {
  const searchEl = document.getElementById('search');
  if (searchEl) {
    searchEl.addEventListener('input', e => {
      searchQ = e.target.value.toLowerCase();
      renderModules();
    });
  }
  
  const filtersEl = document.getElementById('filters');
  if (filtersEl) {
    filtersEl.addEventListener('click', e => {
      const p = e.target.closest('.pill');
      if (!p) return;
      document.querySelectorAll('.pill').forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      filter = p.dataset.f;
      renderModules();
    });
  }
  
  const closeBtn = document.getElementById('mod-close');
  if (closeBtn) closeBtn.addEventListener('click', closeMod);

  const overlay = document.getElementById('mod-overlay');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeMod();
    });
  }
}

// QUIZ
function initQuiz() {
  document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
  document.getElementById('q-next').addEventListener('click', nextQ);
  document.getElementById('q-prev').addEventListener('click', prevQ);
  document.getElementById('q-retake').addEventListener('click', resetQuiz);
}

function startQuiz() {
  quizStep = 0;
  quizAns = [];
  hide('quiz-start-screen');
  show('quiz-q-screen');
  renderQ();
}

function renderQ() {
  const q = QUIZ[quizStep];
  const isMy = lang === 'my';
  
  document.getElementById('q-num-label').textContent = isMy ? `မေးခွန်း ${quizStep + 1} / ၅` : `Question ${quizStep + 1} of 5`;
  document.getElementById('prog-fill').style.width = `${((quizStep + 1) / 5) * 100}%`;
  document.getElementById('q-num').textContent = String(quizStep + 1).padStart(2, '0');
  document.getElementById('q-text').textContent = isMy ? q.myQ : q.q;
  
  document.getElementById('q-opts').innerHTML = q.opts.map((o, i) => `
    <button class="q-opt${quizAns[quizStep] === i ? ' sel' : ''}" data-i="${i}">
      ${isMy ? o.myT : o.t}
    </button>`).join('');

  document.querySelectorAll('.q-opt').forEach(b => {
    b.addEventListener('click', () => {
      quizAns[quizStep] = +b.dataset.i;
      document.querySelectorAll('.q-opt').forEach(x => x.classList.toggle('sel', x === b));
      document.getElementById('q-next').removeAttribute('disabled');
    });
  });

  const nextBtn = document.getElementById('q-next');
  nextBtn.setAttribute('disabled', '');
  if (quizAns[quizStep] !== undefined) {
    nextBtn.removeAttribute('disabled');
  }

  const prevBtn = document.getElementById('q-prev');
  prevBtn.style.opacity = quizStep === 0 ? '0.4' : '1';
  prevBtn.disabled = quizStep === 0;
  prevBtn.textContent = isMy ? '← နောက်သို့' : '← Back';
  
  nextBtn.textContent = quizStep === 4 
    ? (isMy ? 'ရလဒ် ကြည့်ရှုရန် →' : 'View Results →')
    : (isMy ? 'ရှေ့သို့ →' : 'Next →');
}

function nextQ() {
  if (quizAns[quizStep] === undefined) return;
  if (quizStep < 4) {
    quizStep++;
    renderQ();
  } else {
    showResult();
  }
}

function prevQ() {
  if (quizStep > 0) {
    quizStep--;
    renderQ();
  }
}

function showResult() {
  let total = 0;
  QUIZ.forEach((q, i) => {
    if (quizAns[i] !== undefined) total += q.opts[quizAns[i]].s;
  });
  
  const pct = total / 20;
  const a = pct >= 0.75 ? ARCHETYPES.high : pct >= 0.5 ? ARCHETYPES.mid : ARCHETYPES.low;
  const isMy = lang === 'my';
  
  hide('quiz-q-screen');
  const rs = document.getElementById('quiz-result-screen');
  rs.classList.remove('hidden');
  
  document.getElementById('r-icon').textContent = a.icon;
  document.getElementById('r-archetype').textContent = isMy ? a.myTitle : a.title;
  document.getElementById('r-archetype').style.cssText = `background:${a.color}22;color:${a.color};font-size:1.05rem;font-weight:800;padding:.6rem 1.6rem;border-radius:50px;display:inline-block;margin:.75rem 0`;
  document.getElementById('r-desc').textContent = isMy ? a.myDesc : a.desc;
  
  document.getElementById('rec-list').innerHTML = a.mods.map(id => {
    const m = MODULES.find(x => x.id === id);
    if (!m) return '';
    return `<button class="rec-chip" onclick="closeMod();openMod(${m.id})">${String(m.id).padStart(2, '0')} ${isMy ? m.myTitle : m.title}</button>`;
  }).join('');
}

function resetQuiz() {
  hide('quiz-result-screen');
  show('quiz-start-screen');
}

// CHURCH BENEFITS
function renderBenefits() {
  const isMy = lang === 'my';
  document.getElementById('benefits-list').innerHTML = BENEFITS.map(b => `
    <div class="benefit">
      <div class="b-icon">${b.icon}</div>
      <div>
        <div class="b-title">${isMy ? b.myTitle : b.title}</div>
        <div class="b-desc">${isMy ? b.myDesc : b.desc}</div>
      </div>
    </div>`).join('');
}

// COMMUNITY STEPS
function renderSteps() {
  const isMy = lang === 'my';
  document.getElementById('steps-grid').innerHTML = STEPS.map(s => `
    <div class="step-card">
      <div class="step-nbadge">${isMy ? 'အဆင့် ' + s.num : 'STEP ' + s.num}</div>
      <div class="step-ico">${s.icon}</div>
      <div class="step-title">${isMy ? s.myTitle : s.title}</div>
      <div class="step-desc">${isMy ? s.myDesc : s.desc}</div>
    </div>`).join('');
}

// REGISTRATION
function initRegModal() {
  const regBtn = document.getElementById('open-reg-btn');
  if (regBtn) {
    regBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'register.html';
    });
  }
  const dlBtn = document.getElementById('dl-kit-btn');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      const isMy = lang === 'my';
      showToast(isMy ? '📄 အချက်အလက် စာရွက်စာတမ်းများ ပြင်ဆင်နေပါသည်...' : '📄 Info Pack is being prepared...');
      setTimeout(() => showToast(isMy ? '✅ စာရွက်စာတမ်းများ အောင်မြင်စွာ ဒေါင်းလုဒ်ပြီးပါပြီ!' : '✅ Info Pack downloaded!'), 2000);
    });
  }
  const regClose = document.getElementById('reg-close');
  if (regClose) regClose.addEventListener('click', closeReg);
  const regOverlay = document.getElementById('reg-overlay');
  if (regOverlay) {
    regOverlay.addEventListener('click', e => {
      if (e.target === regOverlay) closeReg();
    });
  }
}

function openReg() {
  window.location.href = 'register.html';
}

function closeReg() {
  hide('reg-overlay');
}

function updateSteps() {
  document.querySelectorAll('.step-dot').forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i + 1 < regStep) d.classList.add('done');
    else if (i + 1 === regStep) d.classList.add('active');
  });
}

function fg(lbl, type, id, ph, val = '') {
  return `<div class="fg"><label>${lbl}</label><input type="${type}" id="${id}" placeholder="${ph}" value="${val}"/></div>`;
}

function renderReg() {
  updateSteps();
  const body = document.getElementById('reg-body');
  const act = document.getElementById('reg-actions');
  const isMy = lang === 'my';

  if (regStep === 1) {
    body.innerHTML = `
      <div class="reg-step">
        ${fg(isMy ? 'အသင်းတော် အမည် *' : 'Church Name *', 'text', 'rf-church', isMy ? 'ဥပမာ - Grace Community Church' : 'e.g. Grace Community Church', regData.church || '')}
        ${fg(isMy ? 'မြို့နယ် / မြို့ *' : 'City / Township *', 'text', 'rf-city', isMy ? 'ဥပမာ - ရန်ကုန်မြို့၊ မန္တလေးမြို့...' : 'e.g. Yangon, Mandalay...', regData.city || '')}
        ${fg(isMy ? 'ဂိုဏ်းဂဏ / ကွန်ရက် အဖွဲ့အစည်း' : 'Denomination / Network', 'text', 'rf-denom', isMy ? 'ဥပမာ - နှစ်ခြင်း၊ ပင်တေကုတ္တေ...' : 'e.g. Baptist, Pentecostal...', regData.denom || '')}
      </div>`;
    act.innerHTML = `<button class="btn btn-blue" id="reg-n1">${isMy ? 'ရှေ့သို့ ဆက်သွားမည် →' : 'Next Step →'}</button>`;
    
    document.getElementById('reg-n1').addEventListener('click', () => {
      const c = document.getElementById('rf-church').value.trim();
      const ci = document.getElementById('rf-city').value.trim();
      if (!c || !ci) {
        showToast(isMy ? '⚠️ အသင်းတော် အမည်နှင့် မြို့ကို ထည့်သွင်းပေးပါ။' : '⚠️ Church name and city are required.');
        return;
      }
      regData.church = c;
      regData.city = ci;
      regData.denom = document.getElementById('rf-denom').value.trim();
      regStep = 2;
      renderReg();
    });
  } else if (regStep === 2) {
    body.innerHTML = `
      <div class="reg-step">
        ${fg(isMy ? 'တာဝန်ခံ ဆက်သွယ်ရမည့်သူ အမည် *' : 'Coordinator Name *', 'text', 'rf-coord', isMy ? 'အမည်အပြည့်အစုံ' : 'Full name', regData.coord || '')}
        ${fg(isMy ? 'ဆက်သွယ်ရန် အီးမေးလ် *' : 'Contact Email *', 'email', 'rf-email', 'email@church.org', regData.email || '')}
        ${fg(isMy ? 'ဖုန်းနံပါတ် / Viber *' : 'Phone / Viber *', 'tel', 'rf-phone', '+95 9...', regData.phone || '')}
      </div>`;
    act.innerHTML = `
      <button class="btn btn-ghost-b" id="reg-b2">${isMy ? '← နောက်သို့' : '← Back'}</button>
      <button class="btn btn-blue" id="reg-n2">${isMy ? 'နောက်ဆုံးအဆင့်သို့ →' : 'Final Step →'}</button>`;
      
    document.getElementById('reg-b2').addEventListener('click', () => {
      regStep = 1;
      renderReg();
    });
    
    document.getElementById('reg-n2').addEventListener('click', () => {
      const co = document.getElementById('rf-coord').value.trim();
      const em = document.getElementById('rf-email').value.trim();
      if (!co || !em) {
        showToast(isMy ? '⚠️ တာဝန်ခံ အမည်နှင့် အီးမေးလ် ထည့်သွင်းပေးပါ။' : '⚠️ Name and email are required.');
        return;
      }
      regData.coord = co;
      regData.email = em;
      regData.phone = document.getElementById('rf-phone').value.trim();
      regStep = 3;
      renderReg();
    });
  } else if (regStep === 3) {
    body.innerHTML = `
      <div class="reg-step">
        <div class="fg">
          <label>${isMy ? 'ပါဝင်တက်ရောက်မည့် ခန့်မှန်း မိသားစုဦးရေ' : 'Expected number of participating families'}</label>
          <select id="rf-fam">
            <option value="">${isMy ? '-- ရွေးချယ်ပါ --' : '-- Select --'}</option>
            <option value="1–20">1–20</option>
            <option value="21–50">21–50</option>
            <option value="51–100">51–100</option>
            <option value="100+">100+</option>
          </select>
        </div>
        <div class="fg">
          <label>${isMy ? 'အသင်းတော်ရှိ မိဘများ အဓိကကြုံတွေ့နေရသော အခက်အခဲများ (ဖြည့်စွက်လိုပါက)' : 'Main parenting challenges in your congregation (optional)'}</label>
          <textarea id="rf-notes" placeholder="${isMy ? 'ဥပမာ - ဖုန်းစွဲလမ်းခြင်း၊ မိဘနှင့် သားသမီး ဆက်ဆံရေး အလှမ်းဝေးခြင်း...' : 'e.g. screen addiction, communication breakdown...'}">${regData.notes || ''}</textarea>
        </div>
        <div style="background:var(--bg);border-radius:.65rem;padding:.85rem 1rem;font-size:.85rem;color:var(--muted);line-height:1.6">
          ✅ <strong>${regData.church}</strong> — ${regData.city}<br/>
          👤 ${regData.coord} · ${regData.email}
        </div>
      </div>`;
    act.innerHTML = `
      <button class="btn btn-ghost-b" id="reg-b3">${isMy ? '← နောက်သို့' : '← Back'}</button>
      <button class="btn btn-gold" id="reg-sub">${isMy ? '🎉 အသင်းတော် စာရင်းသွင်းမည်!' : '🎉 Register Church!'}</button>`;
      
    document.getElementById('reg-b3').addEventListener('click', () => {
      regStep = 2;
      renderReg();
    });
    
    document.getElementById('reg-sub').addEventListener('click', () => {
      regData.fam = document.getElementById('rf-fam').value;
      regData.notes = document.getElementById('rf-notes').value;
      submitReg();
    });
  }
}

function submitReg() {
  const isMy = lang === 'my';
  
  // Forward to local Excel & Google Sheet
  const payload = {
    churchName: regData.church || '',
    region: 'Yangon',
    city: regData.city || '',
    denom: regData.denom || 'Independent',
    coordName: regData.coord || '',
    email: regData.email || '',
    phone: regData.phone || '',
    fam: regData.fam || '10–25 Families'
  };
  fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(e => console.warn(e));
  fetch("https://script.google.com/macros/s/AKfycbxIwsbpij2D4dpSUo3P5kCgStH2p2cucr1hQBMGOMU6ETx99ilTfaWyCMx0mtZFsiS3/exec", {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).catch(e => console.warn(e));

  document.querySelectorAll('.step-dot').forEach(d => {
    d.classList.remove('active');
    d.classList.add('done');
  });

  document.getElementById('reg-body').innerHTML = `
    <div class="reg-success">
      <div style="font-size:3.5rem">🎉</div>
      <h3>${isMy ? 'The Parenting Project မိသားစုမှ နွေးထွေးစွာ ကြိုဆိုပါသည်!' : 'Welcome to the Family!'}</h3>
      <p style="line-height:1.8">
        ${isMy 
          ? `<strong>${regData.church}</strong> အသင်းတော်ကို မြန်မာနိုင်ငံ CBN Asia ၏ မိတ်ဖက်အသင်းတော်အဖြစ် အောင်မြင်စွာ မှတ်ပုံတင်ပြီးပါပြီ။ ကျွန်ုပ်တို့အဖွဲ့သည် တာဝန်ခံ <strong>${regData.coord}</strong> ထံသို့ အီးမေးလ် <strong>${regData.email}</strong> မှတစ်ဆင့် ၁-၂ ရုံးဖွင့်ရက်အတွင်း ဆက်သွယ်ပေးပို့ပါမည်။`
          : `<strong>${regData.church}</strong> has been registered as a CBN Asia Partner Church in Myanmar. Our team will contact <strong>${regData.coord}</strong> at <strong>${regData.email}</strong> within 1–2 business days.`}
      </p>
      <button class="dl-btn" onclick="showToast('${isMy ? '📄 ဦးဆောင်သူလက်စွဲ ဒေါင်းလုဒ်ဆွဲနေပါသည်...' : '📄 Facilitator Starter Kit downloading...'}')">
        📥 ${isMy ? 'ဦးဆောင်သူ အစပျိုးလက်စွဲစာအုပ် ဒေါင်းလုဒ်ရယူပါ' : 'Download Facilitator Starter Kit'}
      </button>
    </div>`;

  document.getElementById('reg-actions').innerHTML = `
    <button class="btn btn-blue" onclick="document.getElementById('reg-overlay').classList.remove('show');document.body.style.overflow=''">
      ${isMy ? 'ပိတ်မည်' : 'Close'}
    </button>`;
}

// TESTIMONIALS
function renderTestimonials() {
  const isMy = lang === 'my';
  document.getElementById('testi-grid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-q-icon">"</div>
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <div class="testi-quote">${isMy ? t.myQuote : t.quote}</div>
      <div class="testi-author">
        <div class="testi-av" style="background:${t.color}">${t.init}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${isMy ? t.myRole : t.role}</div>
          <div class="testi-church">${isMy ? t.myChurch : t.church}</div>
        </div>
      </div>
      ${t.youtube ? `
      <div style="margin-top:1rem;border-top:1px solid rgba(0,0,0,0.06);padding-top:.75rem">
        <button class="testi-watch-btn" onclick="openVideoModalById('${t.youtube}', '${(isMy ? t.name : t.name).replace(/'/g, "\\'")}')">
          <span style="font-size:.9rem">▶</span>
          <span>${isMy ? 'ဗီဒီယို သက်သေခံချက် ကြည့်ရှုရန်' : 'Watch Video Story'}</span>
        </button>
      </div>` : ''}
    </div>`).join('');
}

// FAQ
function renderFAQ() {
  const isMy = lang === 'my';
  document.getElementById('faq-list').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="fi${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${isMy ? f.myQ : f.q}</span>
        <span class="faq-chev">⌄</span>
      </button>
      <div class="faq-ans">
        <div class="faq-ans-inner">${isMy ? f.myA : f.a}</div>
      </div>
    </div>`).join('');
}

window.toggleFaq = i => {
  const el = document.getElementById('fi' + i);
  const open = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(x => x.classList.remove('open'));
  if (!open) el.classList.add('open');
};

// HELPERS
function show(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('show');
  }
}

function hide(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('hidden');
    el.classList.remove('show');
  }
}

window.showToast = msg => {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
};

window.openMod = openMod;

window.nlSubmit = e => {
  e.preventDefault();
  const isMy = lang === 'my';
  document.getElementById('nl-form').classList.add('hidden');
  const okEl = document.getElementById('nl-ok');
  okEl.textContent = isMy ? '🎉 အသင်းတော်သတင်းလွှာ စာရင်းသွင်းပြီးပါပြီ! ကျေးဇူးတင်ပါသည်။' : '🎉 Subscribed! Thank you.';
  okEl.classList.remove('hidden');
  return false;
};

// SCROLL ANIMATION
function initScrollAnim() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (e.target.classList.contains('hero-stats')) runCounters();
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) obs.observe(heroStats);
}

// ==========================================
// 3D COVER-FLOW VIDEO CAROUSEL & CINEMA LIGHTBOX
// Signature feature inspired by theparentingproject.id
// ==========================================
let curVideoIdx = 0;
let modalVideoIdx = 0;
let videoProgressInterval = null;
let videoProgressVal = 0;
const AUTO_DURATION = 6500;

// USER PRIVILEGE & CONTENT ACCESS CONTROLS (PAYWALL / GRANT SYSTEM)
let userPrivilege = {
  loggedIn: false,
  isGranted: false,
  status: 'guest',
  email: '',
  churchName: '',
  displayName: ''
};

let liveContentRules = {
  "1": { "access": "free" },
  "2": { "access": "granted" },
  "3": { "access": "granted" },
  "4": { "access": "granted" },
  "5": { "access": "granted" },
  "6": { "access": "granted" },
  "7": { "access": "granted" },
  "8": { "access": "granted" },
  "9": { "access": "granted" },
  "10": { "access": "granted" },
  "11": { "access": "granted" }
};

function isVideoAccessible(videoItemOrId) {
  if (!videoItemOrId) return true;
  // If user is logged in, unlock modules 1 to 11 immediately!
  if (userPrivilege.loggedIn || userPrivilege.isGranted) return true;
  let id = typeof videoItemOrId === 'object' ? videoItemOrId.id : videoItemOrId;
  if (id === 'trailer' || id === 0 || id === '0' || id === 1 || id === '1') return true;
  const rule = liveContentRules[String(id)];
  if (rule && rule.access === 'free') return true;
  return !!userPrivilege.isGranted;
}

function initVideoCarousel() {
  const stage = document.getElementById('ppr-vc-stage');
  const dotsContainer = document.getElementById('ppr-vc-nav');
  const strip = document.getElementById('ppr-vc-strip');
  if (!stage || !dotsContainer) return;

  const isMy = lang === 'my';

  // 1. Build Stage Cards
  stage.innerHTML = VIDEOS.map((v, i) => {
    const isLocked = !isVideoAccessible(v);
    return `
    <div class="ppr-vc-card ${isLocked ? 'is-locked' : ''}" data-idx="${i}" onclick="handleCardClick(${i})" role="button" tabindex="0" aria-label="${isMy ? v.myTitle : v.title}">
      ${isLocked ? `<div class="ppr-vc-lock-badge"><span>🔒</span> <span>${isMy ? 'ခွင့်ပြုချက် လိုအပ်' : 'Restricted'}</span></div>` : ''}
      <img src="${v.thumb}" alt="${isMy ? v.myTitle : v.title}" class="ppr-vc-thumb"/>
      <div class="ppr-vc-play">
        ${isLocked 
          ? `<svg viewBox="0 0 24 24" style="fill:none;stroke:#ffcc00;stroke-width:2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>` 
          : `<svg viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"/></svg>`
        }
      </div>
      <div class="ppr-vc-overlay">
        <div class="ppr-vc-tag" id="vc-tag-${i}">
          ${isLocked ? '🔒 ' : ''}${isMy ? v.myBadge : v.badge}
        </div>
        <div class="ppr-vc-title" id="vc-title-${i}">${isMy ? v.myTitle : v.title}</div>
      </div>
    </div>
  `;
  }).join('');

  // 2. Build Dots
  dotsContainer.innerHTML = VIDEOS.map((_, i) => `
    <button class="ppr-vc-dot" data-idx="${i}" onclick="goToVideo(${i})" aria-label="Go to video ${i + 1}"></button>
  `).join('');

  // 3. Build Strip
  if (strip) {
    strip.innerHTML = VIDEOS.map((v, i) => `
      <button class="ppr-vc-thumbbtn" data-idx="${i}" onclick="goToVideo(${i})" aria-label="Thumbnail ${i + 1}">
        <img src="${v.thumb}" alt="${isMy ? v.myTitle : v.title}"/>
      </button>
    `).join('');
  }

  // 4. Arrow navigation listeners
  const prevBtn = document.getElementById('ppr-vc-prev');
  const nextBtn = document.getElementById('ppr-vc-next');
  if (prevBtn) prevBtn.onclick = prevVideo;
  if (nextBtn) nextBtn.onclick = nextVideo;

  // 5. Swipe/Drag support
  initCarouselDrag(document.getElementById('ppr-vc-outer'));

  // 6. Pause auto on hover
  const outer = document.getElementById('ppr-vc-outer');
  if (outer) {
    outer.onmouseenter = pauseVideoAuto;
    outer.onmouseleave = resumeVideoAuto;
  }

  // Initial update
  updateVideoCarousel();
  startVideoAuto();
}

function updateVideoCarouselLanguage() {
  const isMy = lang === 'my';
  VIDEOS.forEach((v, i) => {
    const tagEl = document.getElementById('vc-tag-' + i);
    const titleEl = document.getElementById('vc-title-' + i);
    if (tagEl) tagEl.textContent = isMy ? v.myBadge : v.badge;
    if (titleEl) titleEl.textContent = isMy ? v.myTitle : v.title;
  });
  const modal = document.getElementById('videoModal');
  if (modal && modal.classList.contains('open')) {
    const title = document.getElementById('ppr-m-title');
    const v = VIDEOS[modalVideoIdx];
    if (title && v) title.textContent = isMy ? v.myTitle : v.title;
  }
}

function updateVideoCarousel() {
  const cards = document.querySelectorAll('.ppr-vc-card');
  const dots = document.querySelectorAll('.ppr-vc-dot');
  const thumbBtns = document.querySelectorAll('.ppr-vc-thumbbtn');
  const total = VIDEOS.length;

  cards.forEach(card => {
    const idx = parseInt(card.dataset.idx, 10);
    card.classList.remove('is-center', 'is-left', 'is-right', 'is-far-left', 'is-far-right');

    const diff = (idx - curVideoIdx + total) % total;
    if (diff === 0) {
      card.classList.add('is-center');
    } else if (diff === 1) {
      card.classList.add('is-right');
    } else if (diff === total - 1) {
      card.classList.add('is-left');
    } else if (diff === 2) {
      card.classList.add('is-far-right');
    } else if (diff === total - 2) {
      card.classList.add('is-far-left');
    }
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === curVideoIdx);
  });

  thumbBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === curVideoIdx);
    if (i === curVideoIdx && btn.parentElement) {
      const parent = btn.parentElement;
      parent.scrollTo({
        left: btn.offsetLeft - parent.clientWidth / 2 + btn.clientWidth / 2,
        behavior: 'smooth'
      });
    }
  });
}

function handleCardClick(idx) {
  if (idx === curVideoIdx) {
    openVideoModal(idx);
  } else {
    goToVideo(idx);
  }
}

function goToVideo(idx) {
  curVideoIdx = (idx + VIDEOS.length) % VIDEOS.length;
  updateVideoCarousel();
  resetVideoAuto();
}

function nextVideo() {
  goToVideo(curVideoIdx + 1);
}

function prevVideo() {
  goToVideo(curVideoIdx - 1);
}

function startVideoAuto() {
  stopVideoAuto();
  videoProgressVal = 0;
  const pBar = document.getElementById('ppr-vc-progress-bar');
  if (pBar) pBar.style.width = '0%';

  const stepTime = 50;
  const stepIncrement = (stepTime / AUTO_DURATION) * 100;

  videoProgressInterval = setInterval(() => {
    videoProgressVal += stepIncrement;
    if (videoProgressVal >= 100) {
      nextVideo();
    } else if (pBar) {
      pBar.style.width = `${videoProgressVal}%`;
    }
  }, stepTime);
}

function stopVideoAuto() {
  if (videoProgressInterval) {
    clearInterval(videoProgressInterval);
    videoProgressInterval = null;
  }
}

function pauseVideoAuto() {
  stopVideoAuto();
}

function resumeVideoAuto() {
  const modal = document.getElementById('videoModal');
  if (!modal || !modal.classList.contains('open')) {
    startVideoAuto();
  }
}

function resetVideoAuto() {
  startVideoAuto();
}

function initCarouselDrag(container) {
  if (!container) return;
  let startX = 0;
  let isDown = false;

  container.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDown = true;
    pauseVideoAuto();
  }, { passive: true });

  container.addEventListener('touchend', e => {
    if (!isDown) return;
    isDown = false;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) prevVideo();
      else nextVideo();
    }
    resumeVideoAuto();
  }, { passive: true });
}

// ==========================================
// CINEMA LIGHTBOX MODAL PLAYER & ACCESS GATE
// ==========================================
function openVideoModal(idx) {
  modalVideoIdx = (idx + VIDEOS.length) % VIDEOS.length;
  const v = VIDEOS[modalVideoIdx];
  const isMy = lang === 'my';

  // Check access permission
  if (!isVideoAccessible(v)) {
    showAccessGateModal(v);
    return;
  }

  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('ppr-modal-iframe');
  const videoPlayer = document.getElementById('ppr-modal-video');
  const title = document.getElementById('ppr-m-title');
  const counter = document.getElementById('ppr-m-counter');
  const ytLink = document.getElementById('ppr-m-yt');
  const ytTxt = document.getElementById('ppr-m-yt-txt');

  if (title) title.textContent = isMy ? (v.myTitle || v.title) : (v.title || v.myTitle);
  if (counter) counter.innerHTML = `${isMy ? 'ဗီဒီယို ' : 'Video '}<span>${modalVideoIdx + 1}</span>${isMy ? ' / ' : ' of '}<span>${VIDEOS.length}</span>`;

  // Direct video file or uploaded media
  if (v.videoType === 'file' || (!v.youtube && v.fileUrl)) {
    if (iframe) {
      iframe.style.display = 'none';
      iframe.src = '';
    }
    if (videoPlayer) {
      videoPlayer.style.display = 'block';
      videoPlayer.src = v.fileUrl;
      videoPlayer.load();
      videoPlayer.play().catch(e => console.log('Autoplay deferred:', e));
    }
    if (ytLink) {
      ytLink.href = v.fileUrl;
      if (ytTxt) ytTxt.textContent = isMy ? 'ဗီဒီယို ဖိုင်ဖွင့်ရန်' : 'Open Video File';
    }
  } else {
    // YouTube stream
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.src = '';
      videoPlayer.style.display = 'none';
    }
    if (iframe) {
      iframe.style.display = 'block';
      iframe.src = `https://www.youtube.com/embed/${v.youtube}?autoplay=1&rel=0`;
    }
    if (ytLink) {
      ytLink.href = `https://www.youtube.com/watch?v=${v.youtube}`;
      if (ytTxt) ytTxt.textContent = isMy ? 'YouTube တွင် ကြည့်မည်' : 'Watch on YouTube';
    }
  }

  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  pauseVideoAuto();
}

function showAccessGateModal(v) {
  const isMy = lang === 'my';
  const modal = document.getElementById('accessGateModal');
  if (!modal) return;

  const tagEl = document.getElementById('gate-tag');
  const titleEl = document.getElementById('gate-title');
  const modEl = document.getElementById('gate-module-name');
  const descEl = document.getElementById('gate-desc');
  const actionsEl = document.getElementById('gate-actions');

  const modName = isMy ? (v.myTitle || v.title) : (v.title || v.myTitle);
  if (modEl) modEl.textContent = modName;

  if (userPrivilege.loggedIn) {
    // Logged in church pending admin approval
    if (tagEl) tagEl.textContent = isMy ? '⏳ စိစစ်ဆဲ အသင်းတော်' : '⏳ Partner Verification Pending';
    if (titleEl) titleEl.textContent = isMy ? 'အပြည့်အစုံ ကြည့်ရှုခွင့် စိစစ်ဆဲ ဖြစ်ပါသည်' : 'Account Under Review';
    if (descEl) {
      descEl.innerHTML = isMy
        ? `မင်္ဂလာပါ <strong>${userPrivilege.churchName || userPrivilege.displayName || 'မိတ်ဖက်အသင်းတော်'}</strong>။ သင့်စာရင်းသွင်းမှုကို လက်ခံရရှိပြီးဖြစ်ကာ CBN Asia Myanmar ဆရာများမှ အတည်ပြုပေးရန် စိစစ်လျက်ရှိပါသည်။ Viber မှတစ်ဆင့် ဆက်သွယ်၍ အတည်ပြုချက်ကို အမြန်ဆုံး ရယူနိုင်ပါသည်။`
        : `Welcome <strong>${userPrivilege.churchName || userPrivilege.displayName || 'Partner Church'}</strong>! Your registration is currently pending admin verification by the CBN Myanmar ministry team. You can contact our coordinator directly on Viber to expedite your full access activation.`;
    }
    if (actionsEl) {
      actionsEl.innerHTML = `
        <a href="viber://chat?number=959788990123" class="gate-btn-viber">
          <span>💬</span>
          <span>${isMy ? 'Viber ဖြင့် ချက်ချင်း အတည်ပြုတောင်းဆိုရန် (+95 9 788 990 123)' : 'Expedite via Viber Coordinator (+95 9 788 990 123)'}</span>
        </a>
        <button type="button" class="gate-btn-secondary" onclick="closeAccessGateModal();openVideoModal(1)">
          <span>🎬</span>
          <span>${isMy ? 'မော်ဂျူး ၁ အခမဲ့ နမူနာဗီဒီယို ကြည့်ရှုမည်' : 'Watch Free Preview (Module 1)'}</span>
        </button>
        <button type="button" class="gate-btn-secondary" onclick="closeAccessGateModal()">
          <span>✕</span>
          <span>${isMy ? 'ပိတ်မည်' : 'Close Window'}</span>
        </button>
      `;
    }
  } else {
    // Guest user (not logged in)
    if (tagEl) tagEl.textContent = isMy ? '🔒 မိတ်ဖက်အသင်းတော် သီးသန့်' : '🔒 Partner Church Privilege';
    if (titleEl) titleEl.textContent = isMy ? 'သင်ရိုးဗီဒီယို အပြည့်အစုံ ကြည့်ရှုခွင့်' : 'Full Movie Access Restricted';
    if (descEl) {
      descEl.innerHTML = isMy
        ? `The Parenting Project ၏ အဓိက သင်ခန်းစာ ဗီဒီယိုများ (မော်ဂျူး ၂ မှ ၁၁ အထိ) သည် စာရင်းသွင်းအတည်ပြုထားသော မိတ်ဖက်အသင်းတော်များနှင့် ဆရာ/ဆရာမများအတွက် သီးသန့် ဖြစ်ပါသည်။ သင့်အသင်းတော် စာရင်းသွင်းထားပြီးပါက အကောင့်ဝင်ရောက်ပါ သို့မဟုတ် အခမဲ့ စာရင်းသွင်းပါ။`
        : `Full curriculum training films (Modules 2–11) are reserved for verified partner churches and facilitators. Please sign in to your registered account or register your church for 100% free access.`;
    }
    if (actionsEl) {
      actionsEl.innerHTML = `
        <a href="login.html" class="gate-btn-primary">
          <span>🔑</span>
          <span>${isMy ? 'အကောင့်ဝင်ရန် (Sign In)' : 'Sign In to Facilitator Account'}</span>
        </a>
        <a href="register.html" class="gate-btn-secondary">
          <span>✍️</span>
          <span>${isMy ? 'အသင်းတော် စာရင်းသွင်းမည် (၁၀၀% အခမဲ့)' : 'Register Your Church (100% Free)'}</span>
        </a>
        <button type="button" class="gate-btn-secondary" onclick="closeAccessGateModal();openVideoModal(1)">
          <span>🎬</span>
          <span>${isMy ? 'မော်ဂျူး ၁ အခမဲ့ နမူနာ ကြည့်ရှုရန်' : 'Watch Module 1 (Free Preview)'}</span>
        </button>
      `;
    }
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  pauseVideoAuto();
}

function closeAccessGateModal() {
  const modal = document.getElementById('accessGateModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  resumeVideoAuto();
}
window.showAccessGateModal = showAccessGateModal;
window.closeAccessGateModal = closeAccessGateModal;

function openTrailerModal() {
  openVideoModal(0);
}

function openVideoModalById(ytId, customTitle) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('ppr-modal-iframe');
  const title = document.getElementById('ppr-m-title');
  const counter = document.getElementById('ppr-m-counter');
  const ytLink = document.getElementById('ppr-m-yt');
  const isMy = lang === 'my';

  const matchIdx = VIDEOS.findIndex(x => x.youtube === ytId);
  if (matchIdx !== -1) {
    openVideoModal(matchIdx);
    return;
  }

  if (title) title.textContent = customTitle || "The Parenting Project";
  if (counter) counter.innerHTML = `<span>${isMy ? 'အထူးဗီဒီယို' : 'Special Video'}</span>`;
  if (ytLink) ytLink.href = `https://www.youtube.com/watch?v=${ytId}`;
  if (iframe) iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;

  if (modal) modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  pauseVideoAuto();
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('ppr-modal-iframe');
  const videoPlayer = document.getElementById('ppr-modal-video');
  if (iframe) iframe.src = '';
  if (videoPlayer) {
    videoPlayer.pause();
    videoPlayer.src = '';
  }
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  resumeVideoAuto();
}

function nextModalVideo() {
  openVideoModal(modalVideoIdx + 1);
}

function prevModalVideo() {
  openVideoModal(modalVideoIdx - 1);
}

function openModuleGuideFromVideo() {
  const v = VIDEOS[modalVideoIdx] || VIDEOS[0];
  closeVideoModal();
  const modId = typeof v.id === 'number' ? v.id : 1;
  openMod(modId);
}

// Global window mappings
window.openVideoModal = openVideoModal;
window.openTrailerModal = openTrailerModal;
window.openVideoModalById = openVideoModalById;
window.closeVideoModal = closeVideoModal;
window.openModuleGuideFromVideo = openModuleGuideFromVideo;
window.nextModalVideo = nextModalVideo;
window.prevModalVideo = prevModalVideo;
window.goToVideo = goToVideo;
window.nextVideo = nextVideo;
window.prevVideo = prevVideo;
window.handleCardClick = handleCardClick;

// Keyboard navigation
window.addEventListener('keydown', e => {
  const modal = document.getElementById('videoModal');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') closeVideoModal();
    else if (e.key === 'ArrowRight') nextModalVideo();
    else if (e.key === 'ArrowLeft') prevModalVideo();
  }
});

// ACTIVE NAV LINK
function initActiveNav() {
  window.addEventListener('scroll', () => {
    const secs = ['home', 'modules', 'videos', 'quiz', 'church', 'about', 'testimonials', 'faq'];
    let cur = '';
    secs.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) cur = id;
    });
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
    });
  });
}

function handleUrlActions() {
  try {
    const p = new URLSearchParams(window.location.search);
    const act = p.get('action');
    const sc = p.get('scroll');
    const l = p.get('lang');

    if (l === 'my') {
      lang = 'my';
      applyLang();
    }

    if (sc) {
      const el = document.getElementById(sc);
      if (el) {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, el.offsetTop - 60);
      }
    }
    if (act === 'mod1') openMod(1);
    else if (act === 'trailer') openTrailerModal();
    else if (act === 'videos') {
      const vEl = document.getElementById('videos');
      if (vEl) {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, vEl.offsetTop - 60);
      }
    }
    else if (act === 'quiz') startQuiz();
    else if (act === 'reg') openReg();
    else if (act === 'faq') toggleFaq(0);
  } catch (e) {}
}

// AUTHENTICATION & LOGIN STATE
async function checkAuthStatus() {
  let session = null;
  try {
    session = JSON.parse(localStorage.getItem('tpp_user_session'));
  } catch(e) {}

  const navLogin = document.getElementById('nav-login');
  const navReg = document.getElementById('nav-reg');
  const navUser = document.getElementById('nav-user');
  const userDisplayName = document.getElementById('user-display-name');
  const navLogoutTxt = document.getElementById('nav-logout-txt');
  
  const drwLogin = document.getElementById('drw-login');
  const drwReg = document.getElementById('drw-reg');
  const drwUserBox = document.getElementById('drw-user-box');
  const drwUserName = document.getElementById('drw-user-name');
  
  const heroBtn2 = document.getElementById('h-btn2');
  const openRegBtn = document.getElementById('open-reg-btn');
  const isMy = lang === 'my';

  // Fetch live content rules
  try {
    const resRules = await fetch('/api/content-rules');
    if (resRules.ok) {
      liveContentRules = await resRules.json();
    }
  } catch(e) {}

  if (session && session.loggedIn) {
    userPrivilege.loggedIn = true;
    userPrivilege.email = session.email || '';
    userPrivilege.displayName = session.displayName || 'Facilitator';
    userPrivilege.isGranted = !!session.isGranted;

    // Fetch live user privilege from server
    if (session.email) {
      try {
        const resUser = await fetch('/api/user-status?email=' + encodeURIComponent(session.email));
        if (resUser.ok) {
          const uData = await resUser.json();
          userPrivilege.isGranted = !!uData.isGranted;
          userPrivilege.status = uData.status || '';
          userPrivilege.churchName = uData.churchName || '';
          session.isGranted = !!uData.isGranted;
          session.churchName = uData.churchName || session.churchName;
          localStorage.setItem('tpp_user_session', JSON.stringify(session));
        }
      } catch(e) {}
    }

    // Check if user is recognized as Admin or Owner
    const staffPass = sessionStorage.getItem('cbn_staff_pass') || '';
    const isAdmin = isAdminOrOwner();

    // Logged in state
    if (navLogin) navLogin.style.display = 'none';
    if (navReg) navReg.style.display = 'none';
    if (navUser) {
      navUser.classList.add('active');
      const navAdminBtn = document.getElementById('nav-admin-btn');
      const userBadgeBtn = document.getElementById('nav-user-badge-btn');

      if (isAdmin) {
        if (navAdminBtn) navAdminBtn.style.display = 'inline-flex';
        if (userBadgeBtn) userBadgeBtn.classList.add('is-admin');
        if (userDisplayName) {
          const cName = userPrivilege.churchName || session.displayName || 'Administrator';
          userDisplayName.innerHTML = `👑 <strong>${cName}</strong> <span class="nav-privilege-pill nav-privilege-granted">🛡️ Admin</span>`;
        }
      } else {
        if (navAdminBtn) navAdminBtn.style.display = 'none';
        if (userBadgeBtn) userBadgeBtn.classList.remove('is-admin');
        if (userDisplayName) {
          const privBadge = userPrivilege.isGranted 
            ? `<span class="nav-privilege-pill nav-privilege-granted">${isMy ? '🟢 အပြည့်အစုံ' : '🟢 Full Access'}</span>`
            : `<span class="nav-privilege-pill nav-privilege-pending">${isMy ? '⏳ စိစစ်ဆဲ' : '⏳ Pending'}</span>`;
          const cName = userPrivilege.churchName || session.displayName;
          userDisplayName.innerHTML = `👤 <strong>${cName}</strong> ${privBadge}`;
        }
      }

      if (navLogoutTxt) {
        navLogoutTxt.textContent = isMy ? 'ထွက်မည်' : 'Sign Out';
      }
    }
    if (drwLogin) drwLogin.style.display = 'none';
    if (drwReg) drwReg.style.display = 'none';
    if (drwUserBox) {
      drwUserBox.style.display = 'block';
      const drwAdminBtn = document.getElementById('drw-admin-btn');
      if (drwAdminBtn) drwAdminBtn.style.display = isAdmin ? 'block' : 'none';
      if (drwUserName) {
        const privTxt = isAdmin ? ' (👑 Admin)' : (userPrivilege.isGranted ? ' (🟢 Full Access)' : ' (⏳ Pending Review)');
        drwUserName.textContent = `👤 ${userPrivilege.churchName || session.displayName}${privTxt}`;
      }
    }
    // Update CTAs to direct to curriculum modules
    if (heroBtn2) {
      heroBtn2.textContent = isMy ? '🎓 မော်ဂျူး (၁၁) ခု စတင်လေ့လာရန် →' : '🎓 Access 11 Facilitator Modules →';
      heroBtn2.href = '#videos';
    }
    if (openRegBtn) {
      openRegBtn.textContent = userPrivilege.isGranted || isAdmin
        ? (isMy ? '✓ မိတ်ဖက်အသင်းတော် အတည်ပြုပြီး (အပြည့်အစုံ)' : '✓ Verified Partner (Full Access)')
        : (isMy ? '⏳ မိတ်ဖက်အသင်းတော် အတည်ပြုချက် စောင့်ဆိုင်းဆဲ' : '⏳ Partner Verification Under Review');
      openRegBtn.href = '#videos';
    }
  } else {
    // Logged out state
    userPrivilege.loggedIn = false;
    userPrivilege.isGranted = false;
    userPrivilege.email = '';
    userPrivilege.churchName = '';

    const isAdmin = isAdminOrOwner();
    const guestSettingsBtn = document.getElementById('guest-settings-btn');
    if (guestSettingsBtn) {
      if (isAdmin) {
        guestSettingsBtn.style.borderColor = '#ffcc00';
        guestSettingsBtn.style.color = '#ffcc00';
        guestSettingsBtn.style.background = 'rgba(255,204,0,0.18)';
        guestSettingsBtn.title = "Admin Mode Active · Click to Open Hub";
      } else {
        guestSettingsBtn.style.borderColor = '';
        guestSettingsBtn.style.color = '';
        guestSettingsBtn.style.background = '';
      }
    }

    if (navLogin) navLogin.style.display = 'inline-flex';
    if (navReg) navReg.style.display = 'inline-flex';
    if (navUser) navUser.classList.remove('active');
    if (drwLogin) drwLogin.style.display = 'block';
    if (drwReg) drwReg.style.display = 'block';
    if (drwUserBox) drwUserBox.style.display = 'none';
    if (heroBtn2) {
      heroBtn2.textContent = isMy ? 'အသင်းတော် စာရင်းသွင်းမည် — အခမဲ့' : 'Register Your Church — Free';
      heroBtn2.href = 'register.html';
    }
    if (openRegBtn) {
      openRegBtn.textContent = isMy ? 'သင့်အသင်းတော်ကို ယခုပင် စာရင်းသွင်းပါ' : 'Register Your Church Now';
      openRegBtn.href = 'register.html';
    }
  }

  // Refresh video cards to update lock badges according to user privilege
  initVideoCarousel();
}

function logoutUser() {
  localStorage.removeItem('tpp_user_session');
  showToast(lang === 'my' ? 'အကောင့်မှ ထွက်ပြီးပါပြီ။' : 'Signed out successfully.');
  setTimeout(() => {
    checkAuthStatus();
    window.location.reload();
  }, 400);
}

// ==========================================
// INTEGRATED IN-PAGE ADMIN HUB & SETTINGS
// ==========================================
let inpageAdminData = [];
let inpageContentRules = {};
let inpageCurrentTab = 'users';

function isAdminOrOwner() {
  const staffPass = sessionStorage.getItem('cbn_staff_pass');
  if (staffPass) return true;
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}
  if (session) {
    if (session.isAdmin || session.role === 'admin' || session.role === 'owner') return true;
    const em = (session.email || '').toLowerCase();
    if (em === 'admin@cbn.org' || em === 'director@cbn.org' || em === 'owner@theparentingproject.org' || em.startsWith('admin@') || em.startsWith('cbn@')) return true;
  }
  return false;
}

function handleUserBadgeClick() {
  if (isAdminOrOwner()) {
    openAdminHub();
  } else {
    openSettingsModal();
  }
}

function openSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (!modal) return;
  updateSettingsModalUI();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

function updateSettingsModalUI() {
  const isMy = lang === 'my';
  const isAdmin = isAdminOrOwner();
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}

  const userInfo = document.getElementById('settings-user-info');
  const roleBadge = document.getElementById('settings-role-badge');
  const unlockedSec = document.getElementById('settings-admin-unlocked');
  const lockedSec = document.getElementById('settings-admin-locked');
  const langTxt = document.getElementById('settings-lang-txt');

  if (langTxt) {
    langTxt.textContent = isMy ? '🇺🇸 Switch to English' : '🇲🇲 မြန်မာဘာသာ သို့ ပြောင်းရန်';
  }

  if (session && session.loggedIn) {
    if (userInfo) userInfo.textContent = `${session.displayName || 'Facilitator'} (${session.email || 'No email'})`;
    if (roleBadge) {
      if (isAdmin) {
        roleBadge.innerHTML = `<span style="color:#ffcc00">👑 Ministry Administrator / Owner</span>`;
      } else {
        roleBadge.innerHTML = `<span style="color:#4cd964">● Partner Church Facilitator</span>`;
      }
    }
  } else {
    if (userInfo) userInfo.textContent = isMy ? 'ဧည့်သည်တော် (စာရင်းမသွင်းရသေးပါ)' : 'Guest Visitor (Not signed in)';
    if (roleBadge) {
      if (isAdmin) {
        roleBadge.innerHTML = `<span style="color:#ffcc00">👑 Staff Admin Mode Unlocked</span>`;
      } else {
        roleBadge.innerHTML = `<span style="color:rgba(255,255,255,0.6)">● Public Guest Mode</span>`;
      }
    }
  }

  if (unlockedSec && lockedSec) {
    unlockedSec.style.display = isAdmin ? 'block' : 'none';
    lockedSec.style.display = isAdmin ? 'none' : 'block';
  }
}

async function verifySettingsAdmin() {
  const input = document.getElementById('settings-staff-passcode');
  const err = document.getElementById('settings-pass-err');
  const code = (input ? input.value : '').trim();

  if (!code) {
    if (err) err.textContent = 'Please enter passcode.';
    return;
  }
  if (err) err.textContent = 'Verifying...';

  try {
    const res = await fetch('/api/admin-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ passcode: code })
    });
    const data = await res.json();
    if (res.ok && data.token) {
      sessionStorage.setItem('cbn_staff_pass', data.token);
      let session = null;
      try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}
      if (session) {
        session.isAdmin = true;
        localStorage.setItem('tpp_user_session', JSON.stringify(session));
      }
      showToast('🔓 Admin Mode Unlocked!');
      if (input) input.value = '';
      if (err) err.textContent = '';
      closeSettingsModal();
      checkAuthStatus();
      openAdminHub();
    } else {
      if (err) err.textContent = '❌ ' + (data.error || 'Incorrect passcode. Access Denied.');
    }
  } catch(e) {
    if (err) err.textContent = '⚠️ Network error: ' + e.message;
  }
}

function lockAdminSession() {
  sessionStorage.removeItem('cbn_staff_pass');
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}
  if (session) {
    session.isAdmin = false;
    localStorage.setItem('tpp_user_session', JSON.stringify(session));
  }
  showToast('🔒 Admin session locked.');
  updateSettingsModalUI();
  checkAuthStatus();
}

function openAdminHub() {
  if (!isAdminOrOwner()) {
    openSettingsModal();
    const passInput = document.getElementById('settings-staff-passcode');
    if (passInput) passInput.focus();
    return;
  }

  const modal = document.getElementById('adminHubModal');
  if (!modal) return;

  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';
  const dlExcel = document.getElementById('inpage-btn-dl-excel');
  if (dlExcel) dlExcel.href = `The_Parenting_Project_Myanmar_Database.xlsx?key=${encodeURIComponent(staffToken)}`;
  const dlCsv = document.getElementById('inpage-btn-dl-csv');
  if (dlCsv) dlCsv.href = `/api/registrations.csv?key=${encodeURIComponent(staffToken)}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  pauseVideoAuto();

  loadInpageAdminData();
  loadInpageContentRules();
  loadInpageVideosList();
}

function closeAdminHub() {
  const modal = document.getElementById('adminHubModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
  resumeVideoAuto();
  // Refresh main page status and cards
  checkAuthStatus();
}

function switchInpageAdminTab(tab) {
  inpageCurrentTab = tab;
  const btnUsers = document.getElementById('inpage-tab-users-btn');
  const btnContent = document.getElementById('inpage-tab-content-btn');
  const btnUpload = document.getElementById('inpage-tab-upload-btn');
  const viewUsers = document.getElementById('inpage-users-view');
  const viewContent = document.getElementById('inpage-content-view');
  const viewUpload = document.getElementById('inpage-upload-view');

  if (btnUsers) btnUsers.classList.toggle('active', tab === 'users');
  if (btnContent) btnContent.classList.toggle('active', tab === 'content');
  if (btnUpload) btnUpload.classList.toggle('active', tab === 'upload');

  if (viewUsers) viewUsers.style.display = tab === 'users' ? 'block' : 'none';
  if (viewContent) viewContent.style.display = tab === 'content' ? 'block' : 'none';
  if (viewUpload) viewUpload.style.display = tab === 'upload' ? 'block' : 'none';

  if (tab === 'content') {
    loadInpageContentRules();
  } else if (tab === 'upload') {
    loadInpageVideosList();
  }
}

async function loadInpageAdminData() {
  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';
  try {
    const res = await fetch('/api/registrations.json', {
      headers: { 'X-Staff-Auth': staffToken }
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    inpageAdminData = await res.json();
    renderInpageKPIs(inpageAdminData);
    renderInpageAdminTable(inpageAdminData);
  } catch(e) {
    console.error("Admin data fetch error:", e);
    const tbody = document.getElementById('inpage-table-body');
    if (tbody) tbody.innerHTML = `<tr><td colspan="11" style="text-align:center;padding:2rem;color:#ff8585">Error loading data: ${e.message}</td></tr>`;
  }
}

function renderInpageKPIs(list) {
  const kChurches = document.getElementById('inpage-kpi-churches');
  const kViber = document.getElementById('inpage-kpi-viber');
  const kFam = document.getElementById('inpage-kpi-families');

  if (kChurches) kChurches.textContent = list.length + " Churches";
  let viberCount = list.filter(x => x.status && (x.status.includes('Viber') || x.status.includes('Verified'))).length;
  if (kViber) kViber.textContent = (viberCount || Math.round(list.length * 0.7)) + " Connected";
  if (kFam) kFam.textContent = (list.length * 35) + "+ Families";
}

function renderInpageAdminTable(list) {
  const tbody = document.getElementById('inpage-table-body');
  if (!tbody) return;

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align:center;padding:2rem;color:rgba(255,255,255,0.6)">No churches found matching search criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(item => {
    let badgeClass = 'badge-new';
    if (item.status && item.status.includes('Verified')) badgeClass = 'badge-verified';
    else if (item.status === 'Contacted via Viber') badgeClass = 'badge-viber';
    else if (item.status === 'Training Scheduled') badgeClass = 'badge-scheduled';

    const cleanPhone = (item.phone || '').replace(/[^0-9+]/g, '');
    const isGranted = !!item.isGranted;

    return `
      <tr>
        <td style="font-weight:700;color:#ffcc00">${item.regId}</td>
        <td style="white-space:nowrap;font-size:0.78rem;color:rgba(255,255,255,0.7)">${item.timestamp}</td>
        <td>
          <strong>${item.churchName}</strong>
          <div style="font-size:0.75rem;color:rgba(255,255,255,0.5)">${item.denom || ''}</div>
        </td>
        <td><span style="background:rgba(255,255,255,0.08);padding:3px 8px;border-radius:4px;font-size:0.78rem">${item.region}</span></td>
        <td>${item.city}</td>
        <td>👤 <strong>${item.coordName}</strong></td>
        <td><a href="mailto:${item.email}" style="color:#64b5f6;text-decoration:none">${item.email}</a></td>
        <td>
          <a href="viber://chat?number=${encodeURIComponent(cleanPhone)}" style="color:#c7baff;text-decoration:none;font-weight:600" title="Open Viber Chat">
            💬 ${item.phone}
          </a>
        </td>
        <td style="white-space:nowrap">${item.fam}</td>
        <td><span class="badge ${badgeClass}">${item.status}</span></td>
        <td style="white-space:nowrap">
          ${isGranted 
            ? `<div style="display:flex;align-items:center;gap:6px">
                 <span class="badge badge-granted">🟢 Granted</span>
                 <button type="button" class="btn-xs btn-revoke" onclick="toggleInpageUserAccess('${encodeURIComponent(item.email)}', false)">Revoke</button>
               </div>`
            : `<div style="display:flex;align-items:center;gap:6px">
                 <span class="badge badge-pending">⏳ Restricted</span>
                 <button type="button" class="btn-xs btn-grant" onclick="toggleInpageUserAccess('${encodeURIComponent(item.email)}', true)">Grant Full</button>
               </div>`
          }
        </td>
      </tr>
    `;
  }).join('');
}

async function toggleInpageUserAccess(encodedEmail, grant) {
  const email = decodeURIComponent(encodedEmail);
  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';
  try {
    const res = await fetch('/api/admin/toggle-user-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Staff-Auth': staffToken
      },
      body: JSON.stringify({ email: email, grant: grant })
    });
    const data = await res.json();
    if (res.ok) {
      showToast(`${grant ? 'Granted Full Access' : 'Revoked Access'} for ${email}`);
      loadInpageAdminData();
    } else {
      showToast(data.error || 'Failed to update access', false);
    }
  } catch(e) {
    showToast('Network error: ' + e.message, false);
  }
}

async function loadInpageContentRules() {
  try {
    const res = await fetch('/api/content-rules');
    if (res.ok) {
      inpageContentRules = await res.json();
      renderInpageContentRules();
    }
  } catch(e) {
    console.error("Inpage content rules error:", e);
  }
}

function renderInpageContentRules() {
  const grid = document.getElementById('inpage-content-rules-grid');
  if (!grid) return;

  const modules = Object.keys(inpageContentRules).sort((a,b) => parseInt(a) - parseInt(b));
  grid.innerHTML = modules.map(id => {
    const item = inpageContentRules[id];
    const isFree = item.access === 'free';
    return `
      <div class="content-card">
        <div>
          <div class="content-card-top">
            <span class="content-card-num">Module ${id}</span>
            <span class="badge ${isFree ? 'badge-verified' : 'badge-granted'}">${isFree ? '🌐 Public Free Preview' : '🔒 Admin-Granted Only'}</span>
          </div>
          <div class="content-card-title">${item.title}</div>
          <div class="content-card-my">${item.myTitle}</div>
        </div>
        <div>
          <label style="display:block;font-size:0.75rem;color:rgba(255,255,255,0.6);margin-bottom:6px;font-weight:700;text-transform:uppercase">Access Requirement</label>
          <select id="inpage-rule-select-${id}" class="rule-select">
            <option value="free" ${isFree ? 'selected' : ''}>🌐 Free Sample (Anyone can watch)</option>
            <option value="granted" ${!isFree ? 'selected' : ''}>🔒 Admin-Granted Partner Churches Only</option>
          </select>
          <button type="button" class="btn-save-rule" onclick="saveInpageContentRule('${id}')">💾 Save Module ${id} Rule</button>
        </div>
      </div>
    `;
  }).join('');
}

async function saveInpageContentRule(id) {
  const select = document.getElementById(`inpage-rule-select-${id}`);
  const access = select ? select.value : 'granted';
  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';
  try {
    const res = await fetch('/api/admin/update-content-rule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Staff-Auth': staffToken
      },
      body: JSON.stringify({ moduleId: id, access: access })
    });
    const data = await res.json();
    if (res.ok) {
      showToast(`Module ${id} access set to: ${access.toUpperCase()}`);
      loadInpageContentRules();
    } else {
      showToast(data.error || 'Failed to update rule', false);
    }
  } catch(e) {
    showToast('Network error: ' + e.message, false);
  }
}

function filterInpageData() {
  const q = (document.getElementById('inpage-search-input') || {}).value || '';
  const qLower = q.toLowerCase();
  const reg = (document.getElementById('inpage-region-filter') || {}).value || '';
  const stat = (document.getElementById('inpage-status-filter') || {}).value || '';
  const acc = (document.getElementById('inpage-access-filter') || {}).value || '';

  const filtered = inpageAdminData.filter(item => {
    const mQ = !qLower || 
      item.churchName.toLowerCase().includes(qLower) ||
      item.coordName.toLowerCase().includes(qLower) ||
      item.city.toLowerCase().includes(qLower) ||
      item.phone.toLowerCase().includes(qLower);
    const mReg = !reg || item.region === reg;
    const mStat = !stat || (item.status && item.status.includes(stat));
    const mAcc = !acc || (acc === 'granted' ? !!item.isGranted : !item.isGranted);
    return mQ && mReg && mStat && mAcc;
  });

  renderInpageAdminTable(filtered);
}

// ==========================================
// DYNAMIC VIDEO LOADER & UPLOAD MANAGER
// ==========================================
let currentUploadVideoBase64 = null;
let currentUploadVideoFileName = '';
let currentUploadThumbBase64 = null;
let currentUploadThumbFileName = '';
let currentVideoSourceType = 'url';
let inpageVideosLibrary = [];

async function loadDynamicVideos() {
  try {
    const res = await fetch('/api/custom-videos');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        VIDEOS = data;
        VIDEOS.forEach(v => {
          if (v.id) {
            liveContentRules[String(v.id)] = { access: v.access || 'granted' };
          }
        });
        initVideoCarousel();
      }
    }
  } catch (err) {
    console.warn('Could not load dynamic videos:', err);
  }
}

function setVideoSourceType(type) {
  currentVideoSourceType = type;
  const btnUrl = document.getElementById('src-type-url-btn');
  const btnFile = document.getElementById('src-type-file-btn');
  const boxUrl = document.getElementById('box-video-url');
  const boxFile = document.getElementById('box-video-file');

  if (type === 'file') {
    if (btnFile) {
      btnFile.style.background = '#ffcc00';
      btnFile.style.color = '#061830';
      btnFile.style.fontWeight = '800';
    }
    if (btnUrl) {
      btnUrl.style.background = 'transparent';
      btnUrl.style.color = '#fff';
      btnUrl.style.fontWeight = 'normal';
    }
    if (boxFile) boxFile.style.display = 'block';
    if (boxUrl) boxUrl.style.display = 'none';
  } else {
    if (btnUrl) {
      btnUrl.style.background = '#ffcc00';
      btnUrl.style.color = '#061830';
      btnUrl.style.fontWeight = '800';
    }
    if (btnFile) {
      btnFile.style.background = 'transparent';
      btnFile.style.color = '#fff';
      btnFile.style.fontWeight = 'normal';
    }
    if (boxUrl) boxUrl.style.display = 'block';
    if (boxFile) boxFile.style.display = 'none';
  }
}

function handleVideoFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const lbl = document.getElementById('up-video-file-lbl');
  const sizeLbl = document.getElementById('up-video-file-size');
  const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

  if (lbl) lbl.textContent = `Selected: ${file.name}`;
  if (sizeLbl) sizeLbl.textContent = `File size: ${sizeMB} MB (${file.type || 'video/mp4'})`;

  const reader = new FileReader();
  reader.onload = (e) => {
    currentUploadVideoBase64 = e.target.result;
    currentUploadVideoFileName = file.name;
    showToast(`Video file "${file.name}" ready for upload`);
  };
  reader.readAsDataURL(file);
}

function handleThumbFileSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    currentUploadThumbBase64 = e.target.result;
    currentUploadThumbFileName = file.name;
    const preview = document.getElementById('up-thumb-preview');
    if (preview) preview.src = e.target.result;
    const urlInput = document.getElementById('up-thumb-url');
    if (urlInput) urlInput.value = `[Uploaded: ${file.name}]`;
    showToast(`Custom thumbnail image selected`);
  };
  reader.readAsDataURL(file);
}

function autoDetectYtThumb() {
  if (currentUploadThumbBase64) return;
  const input = document.getElementById('up-video-url');
  if (!input) return;
  const val = input.value.trim();
  let ytId = '';
  const m = val.match(/(?:v=|youtu\.be\/|embed\/|\/v\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  if (m) {
    ytId = m[1];
  } else if (/^[a-zA-Z0-9_-]{11}$/.test(val)) {
    ytId = val;
  }
  if (ytId) {
    const thumbUrl = `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`;
    const preview = document.getElementById('up-thumb-preview');
    const thumbInput = document.getElementById('up-thumb-url');
    if (preview) preview.src = thumbUrl;
    if (thumbInput) thumbInput.value = thumbUrl;
  }
}

function handleTargetModuleChange() {
  const select = document.getElementById('up-module-target');
  if (!select) return;
  const val = select.value;

  if (val === 'new_bonus') {
    resetVideoUploadForm();
    select.value = 'new_bonus';
    const heading = document.getElementById('upload-form-heading');
    if (heading) heading.textContent = 'Upload / Publish Bonus Video';
    return;
  }

  const existing = VIDEOS.find(v => String(v.id) === String(val));
  if (existing) {
    const heading = document.getElementById('upload-form-heading');
    if (heading) heading.textContent = `Update Content: ${existing.badge || 'Module ' + val}`;

    const titleEn = document.getElementById('up-title-en');
    const titleMy = document.getElementById('up-title-my');
    const capEn = document.getElementById('up-caption-en');
    const capMy = document.getElementById('up-caption-my');
    const access = document.getElementById('up-access');
    const thumbUrl = document.getElementById('up-thumb-url');
    const thumbPrev = document.getElementById('up-thumb-preview');
    const videoUrl = document.getElementById('up-video-url');

    if (titleEn) titleEn.value = existing.title || '';
    if (titleMy) titleMy.value = existing.myTitle || '';
    if (capEn) capEn.value = existing.caption || '';
    if (capMy) capMy.value = existing.myCaption || '';
    if (access) access.value = existing.access || (val === '1' || val === 'trailer' ? 'free' : 'granted');
    if (thumbUrl) thumbUrl.value = existing.thumb || '';
    if (thumbPrev && existing.thumb) thumbPrev.src = existing.thumb;

    if (existing.videoType === 'file' || (!existing.youtube && existing.fileUrl)) {
      setVideoSourceType('file');
      const lbl = document.getElementById('up-video-file-lbl');
      if (lbl) lbl.textContent = `Current File: ${existing.fileUrl}`;
    } else {
      setVideoSourceType('url');
      if (videoUrl) videoUrl.value = existing.youtube ? `https://www.youtube.com/watch?v=${existing.youtube}` : '';
    }
  }
}

function resetVideoUploadForm() {
  const form = document.getElementById('video-upload-form');
  if (form) form.reset();

  currentUploadVideoBase64 = null;
  currentUploadVideoFileName = '';
  currentUploadThumbBase64 = null;
  currentUploadThumbFileName = '';

  const heading = document.getElementById('upload-form-heading');
  if (heading) heading.textContent = 'Upload / Publish Video';

  const select = document.getElementById('up-module-target');
  if (select) select.value = 'new_bonus';

  const fileLbl = document.getElementById('up-video-file-lbl');
  if (fileLbl) fileLbl.textContent = 'Click or Drag Video File Here';
  const fileSizeLbl = document.getElementById('up-video-file-size');
  if (fileSizeLbl) fileSizeLbl.textContent = 'MP4, WebM or MOV';

  const preview = document.getElementById('up-thumb-preview');
  if (preview) preview.src = 'https://i.ytimg.com/vi/hKSMxbFee1U/hqdefault.jpg';

  const prog = document.getElementById('up-progress-wrap');
  if (prog) prog.style.display = 'none';

  setVideoSourceType('url');
}

async function handleVideoUploadSubmit(event) {
  event.preventDefault();
  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';

  const targetSelect = document.getElementById('up-module-target');
  let targetVal = targetSelect ? targetSelect.value : 'new_bonus';
  let videoId = targetVal;
  if (targetVal === 'new_bonus') {
    videoId = 'bonus_' + Date.now();
  }

  const titleEn = (document.getElementById('up-title-en') || {}).value || '';
  const titleMy = (document.getElementById('up-title-my') || {}).value || '';
  const capEn = (document.getElementById('up-caption-en') || {}).value || '';
  const capMy = (document.getElementById('up-caption-my') || {}).value || '';
  const access = (document.getElementById('up-access') || {}).value || 'granted';
  let thumbUrl = (document.getElementById('up-thumb-url') || {}).value || '';
  const rawVideoUrl = (document.getElementById('up-video-url') || {}).value || '';

  const progWrap = document.getElementById('up-progress-wrap');
  const progBar = document.getElementById('up-progress-bar');
  const progStatus = document.getElementById('up-progress-status');
  const progPercent = document.getElementById('up-progress-percent');
  const submitBtn = document.getElementById('up-submit-btn');

  function setProgress(pct, statusText) {
    if (progWrap) progWrap.style.display = 'block';
    if (progBar) progBar.style.width = pct + '%';
    if (progPercent) progPercent.textContent = pct + '%';
    if (progStatus) progStatus.textContent = statusText;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
  }

  try {
    let fileUrl = '';
    let youtubeId = '';

    // Step 1: Upload video file if file source selected
    if (currentVideoSourceType === 'file') {
      if (currentUploadVideoBase64) {
        setProgress(30, 'Uploading video file to server...');
        const res = await fetch('/api/admin/upload-media', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Staff-Auth': staffToken
          },
          body: JSON.stringify({
            filename: currentUploadVideoFileName || 'video.mp4',
            folder: 'videos',
            data: currentUploadVideoBase64
          })
        });
        const uploadData = await res.json();
        if (!res.ok) throw new Error(uploadData.error || 'Failed to upload video file');
        fileUrl = uploadData.url;
        setProgress(60, 'Video file uploaded successfully!');
      } else {
        const existing = VIDEOS.find(v => String(v.id) === String(videoId));
        if (existing && existing.fileUrl) {
          fileUrl = existing.fileUrl;
        } else {
          throw new Error('Please select a video file (.mp4/.webm) to upload.');
        }
      }
    } else {
      // YouTube URL
      const m = rawVideoUrl.match(/(?:v=|youtu\.be\/|embed\/|\/v\/|shorts\/)([a-zA-Z0-9_-]{11})/);
      if (m) youtubeId = m[1];
      else if (/^[a-zA-Z0-9_-]{11}$/.test(rawVideoUrl.trim())) youtubeId = rawVideoUrl.trim();
      else if (rawVideoUrl.trim().startsWith('http')) fileUrl = rawVideoUrl.trim();
      else if (rawVideoUrl.trim()) youtubeId = rawVideoUrl.trim();
    }

    // Step 2: Upload thumbnail if custom file selected
    if (currentUploadThumbBase64) {
      setProgress(75, 'Uploading thumbnail image...');
      const resThumb = await fetch('/api/admin/upload-media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Staff-Auth': staffToken
        },
        body: JSON.stringify({
          filename: currentUploadThumbFileName || 'thumb.jpg',
          folder: 'thumbnails',
          data: currentUploadThumbBase64
        })
      });
      const thumbData = await resThumb.json();
      if (!resThumb.ok) throw new Error(thumbData.error || 'Failed to upload thumbnail');
      thumbUrl = thumbData.url;
    }

    if (!thumbUrl && youtubeId) {
      thumbUrl = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
    }
    if (!thumbUrl) {
      thumbUrl = 'brand_hero_zoomed.jpg';
    }

    setProgress(90, 'Publishing metadata to content library...');

    let isNumeric = /^\d+$/.test(String(targetVal));
    let badgeEn = isNumeric ? `Module ${String(targetVal).padStart(2, '0')}` : (targetVal === 'trailer' ? 'Official Promo' : 'Bonus Video');
    let badgeMy = isNumeric ? `မော်ဂျူး ${String(targetVal).padStart(2, '0')}` : (targetVal === 'trailer' ? 'တရားဝင် မိတ်ဆက်ဗီဒီယို' : 'အထူး သင်ခန်းစာ');

    const videoPayload = {
      id: videoId,
      youtube: youtubeId,
      videoType: currentVideoSourceType,
      fileUrl: fileUrl,
      title: titleEn,
      myTitle: titleMy,
      badge: badgeEn,
      myBadge: badgeMy,
      thumb: thumbUrl,
      caption: capEn,
      myCaption: capMy,
      access: access
    };

    const saveRes = await fetch('/api/admin/save-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Staff-Auth': staffToken
      },
      body: JSON.stringify(videoPayload)
    });
    const saveData = await saveRes.json();
    if (!saveRes.ok) throw new Error(saveData.error || 'Failed to save video metadata');

    setProgress(100, '✅ Video successfully published!');
    showToast(`🎬 Video "${titleEn}" published successfully!`);

    await loadDynamicVideos();
    await loadInpageVideosList();
    await loadInpageContentRules();

    setTimeout(() => {
      if (progWrap) progWrap.style.display = 'none';
    }, 2500);

  } catch (err) {
    console.error('Video upload error:', err);
    showToast(err.message, false);
    if (progStatus) progStatus.textContent = '❌ Upload failed: ' + err.message;
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  }
}

async function loadInpageVideosList() {
  try {
    const res = await fetch('/api/custom-videos');
    if (res.ok) {
      inpageVideosLibrary = await res.json();
      renderInpageVideosList(inpageVideosLibrary);
    }
  } catch (err) {
    console.error('Failed to load inpage videos list:', err);
  }
}

function renderInpageVideosList(videos) {
  const container = document.getElementById('inpage-video-library-list');
  const countEl = document.getElementById('up-video-count');
  if (countEl) countEl.textContent = videos.length;
  if (!container) return;

  if (!videos.length) {
    container.innerHTML = '<div style="text-align:center;padding:2rem;color:rgba(255,255,255,0.5)">No videos uploaded yet.</div>';
    return;
  }

  container.innerHTML = videos.map((v, idx) => {
    const isFree = v.access === 'free';
    const isFile = v.videoType === 'file' || (!v.youtube && v.fileUrl);

    return `
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:0.75rem 1rem;display:flex;align-items:center;gap:12px;justify-content:space-between">
        <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1">
          <div style="position:relative;width:80px;height:48px;border-radius:6px;overflow:hidden;background:#000;flex-shrink:0">
            <img src="${v.thumb || 'brand_hero_zoomed.jpg'}" alt="${v.title}" style="width:100%;height:100%;object-fit:cover"/>
            <span style="position:absolute;bottom:2px;right:2px;background:rgba(0,0,0,0.75);font-size:0.6rem;padding:1px 4px;border-radius:3px;color:#fff">${isFile ? '📁 MP4' : '🔗 YT'}</span>
          </div>
          <div style="min-width:0;flex:1">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px">
              <span class="badge ${isFree ? 'badge-verified' : 'badge-granted'}" style="font-size:0.68rem;padding:1px 6px">
                ${isFree ? '🌐 Free' : '🔒 Granted'}
              </span>
              <span style="font-size:0.75rem;font-weight:700;color:#ffcc00">${v.badge || 'Lesson'}</span>
            </div>
            <div style="font-size:0.85rem;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${v.title}</div>
            <div style="font-size:0.72rem;color:rgba(255,255,255,0.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${v.myTitle || ''}</div>
          </div>
        </div>

        <div style="display:flex;gap:6px;flex-shrink:0">
          <button type="button" class="btn btn-outline btn-xs" onclick="openVideoModal(${idx})" title="Preview Movie">
            <span>▶️ Play</span>
          </button>
          <button type="button" class="btn btn-outline btn-xs" onclick="editInpageVideo('${v.id}')" title="Edit Content Details">
            <span>✏️ Edit</span>
          </button>
          <button type="button" class="btn-xs btn-revoke" onclick="deleteInpageVideo('${v.id}')" title="Delete Video Entry" style="cursor:pointer">
            <span>🗑️</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function editInpageVideo(id) {
  const video = inpageVideosLibrary.find(v => String(v.id) === String(id)) || VIDEOS.find(v => String(v.id) === String(id));
  if (!video) return;

  const select = document.getElementById('up-module-target');
  if (select) {
    let optionExists = Array.from(select.options).some(o => o.value === String(id));
    if (optionExists) {
      select.value = String(id);
    } else {
      select.value = 'new_bonus';
    }
  }

  const heading = document.getElementById('upload-form-heading');
  if (heading) heading.textContent = `Edit Content: ${video.title}`;

  const titleEn = document.getElementById('up-title-en');
  const titleMy = document.getElementById('up-title-my');
  const capEn = document.getElementById('up-caption-en');
  const capMy = document.getElementById('up-caption-my');
  const access = document.getElementById('up-access');
  const thumbUrl = document.getElementById('up-thumb-url');
  const thumbPrev = document.getElementById('up-thumb-preview');
  const videoUrl = document.getElementById('up-video-url');

  if (titleEn) titleEn.value = video.title || '';
  if (titleMy) titleMy.value = video.myTitle || '';
  if (capEn) capEn.value = video.caption || '';
  if (capMy) capMy.value = video.myCaption || '';
  if (access) access.value = video.access || 'granted';
  if (thumbUrl) thumbUrl.value = video.thumb || '';
  if (thumbPrev && video.thumb) thumbPrev.src = video.thumb;

  if (video.videoType === 'file' || (!video.youtube && video.fileUrl)) {
    setVideoSourceType('file');
    const lbl = document.getElementById('up-video-file-lbl');
    if (lbl) lbl.textContent = `Current File: ${video.fileUrl}`;
  } else {
    setVideoSourceType('url');
    if (videoUrl) videoUrl.value = video.youtube ? `https://www.youtube.com/watch?v=${video.youtube}` : '';
  }

  showToast(`Loaded "${video.title}" into editor`);
}

async function deleteInpageVideo(id) {
  if (!confirm(`Are you sure you want to delete video item (ID: ${id})?`)) return;
  const staffToken = sessionStorage.getItem('cbn_staff_pass') || 'cbn2026';

  try {
    const res = await fetch('/api/admin/delete-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Staff-Auth': staffToken
      },
      body: JSON.stringify({ id: id })
    });
    const data = await res.json();
    if (res.ok) {
      showToast(`Deleted video item: ${id}`);
      await loadDynamicVideos();
      await loadInpageVideosList();
      await loadInpageContentRules();
    } else {
      showToast(data.error || 'Failed to delete video', false);
    }
  } catch (err) {
    showToast('Network error: ' + err.message, false);
  }
}

window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.verifySettingsAdmin = verifySettingsAdmin;
window.lockAdminSession = lockAdminSession;
window.openAdminHub = openAdminHub;
window.closeAdminHub = closeAdminHub;
window.handleUserBadgeClick = handleUserBadgeClick;
window.switchInpageAdminTab = switchInpageAdminTab;
window.toggleInpageUserAccess = toggleInpageUserAccess;
window.saveInpageContentRule = saveInpageContentRule;
window.filterInpageData = filterInpageData;
window.updateSettingsModalUI = updateSettingsModalUI;
window.isAdminOrOwner = isAdminOrOwner;
window.logoutUser = logoutUser;
window.checkAuthStatus = checkAuthStatus;

window.setVideoSourceType = setVideoSourceType;
window.handleVideoFileSelect = handleVideoFileSelect;
window.handleThumbFileSelect = handleThumbFileSelect;
window.autoDetectYtThumb = autoDetectYtThumb;
window.handleTargetModuleChange = handleTargetModuleChange;
window.resetVideoUploadForm = resetVideoUploadForm;
window.handleVideoUploadSubmit = handleVideoUploadSubmit;
window.loadInpageVideosList = loadInpageVideosList;
window.renderInpageVideosList = renderInpageVideosList;
window.editInpageVideo = editInpageVideo;
window.deleteInpageVideo = deleteInpageVideo;
window.loadDynamicVideos = loadDynamicVideos;

// ==========================================
// MOBILE APP MODE LOGIC & LIVE UPGRADE NOTI
// ==========================================
function checkAppMode() {
  const isAppUrl = window.location.search.includes('app=true') || window.location.search.includes('mode=app');
  const isAppUA = navigator.userAgent && navigator.userAgent.includes('ParentingApp');
  
  // Detect Android WebView (wv, Version/4.0) or standalone mobile app
  const isAndroidWebView = /;\s*wv/i.test(navigator.userAgent) || 
                           (navigator.userAgent.includes('Android') && (navigator.userAgent.includes('Version/') || navigator.userAgent.includes('Crosswalk')));
  const isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
  
  // Detect phone screen on mobile devices
  const isMobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isPhoneWidth = window.innerWidth <= 820;

  // App mode activates if inside APK / WebView / standalone OR on mobile phone screen
  // Regular desktop browsers (Mac/PC/Laptops with screen > 820px) stay 100% UNTOUCHED!
  const isPhoneMode = isAppUrl || isAppUA || isAndroidWebView || isStandalone || (isMobileDevice && isPhoneWidth);

  if (isPhoneMode) {
    document.body.classList.add('is-mobile-app');
    document.documentElement.classList.add('is-mobile-app');
    // Only show upgrade download banner on mobile web browser, NOT inside the app itself
    if (!isAppUrl && !isAppUA && !isAndroidWebView) {
      setTimeout(() => {
        showUpgradeNotification();
      }, 3000);
    }
  }
}

function playUpgradeChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 celebratory chord
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.08 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.6);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.6);
    });
  } catch (e) {
    // Audio context may require user interaction
  }
}

function showUpgradeNotification() {
  if (document.getElementById('upgrade-noti-banner')) return;

  const banner = document.createElement('div');
  banner.id = 'upgrade-noti-banner';
  banner.innerHTML = `
    <div class="upgrade-noti-icon-wrap">🚀</div>
    <div class="upgrade-noti-content">
      <span class="upgrade-noti-badge">v1.1.0 Phone Edition Ready</span>
      <div class="upgrade-noti-title">ဗားရှင်းသစ် အဆင်သင့်ဖြစ်ပါပြီ</div>
      <div class="upgrade-noti-sub">ဖုန်းသီးသန့်ဒီဇိုင်း APK ကို ယခုချက်ချင်း ဒေါင်းလုဒ်လုပ်ပါ</div>
      <div class="upgrade-noti-actions">
        <a href="https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.1.0/ParentingProjectMyanmar.apk" target="_blank" class="upgrade-noti-btn-dl" onclick="triggerApkDownload(event)">
          📥 APK ဒေါင်းလုဒ်
        </a>
        <a href="viber://forward?text=The%20Parenting%20Project%20Myanmar%20v1.1.0%20APK:%20https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.1.0/ParentingProjectMyanmar.apk" class="upgrade-noti-btn-viber">
          💬 Viber
        </a>
        <button type="button" onclick="copyApkDownloadLink()" class="upgrade-noti-btn-copy">
          📋 Copy
        </button>
      </div>
    </div>
    <button class="upgrade-noti-close-btn" onclick="dismissUpgradeNoti()" aria-label="Close">✕</button>
  `;
  document.body.appendChild(banner);

  playUpgradeChime();
  if (navigator.vibrate) {
    try { navigator.vibrate([80, 50, 80]); } catch (e) {}
  }

  // System notification if permission was already granted
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification('The Parenting Project Myanmar', {
        body: 'ဖုန်းအရွယ်အစား ဗားရှင်းသစ် v1.1.0 APK ကို ဒေါင်းလုဒ်လုပ်နိုင်ပါပြီ!',
        icon: 'official_logo.png'
      });
    } catch (e) {}
  }

  // Keep visible longer so user has time to tap
  setTimeout(() => {
    dismissUpgradeNoti();
  }, 25000);
}

function triggerApkDownload(e) {
  const apkUrl = "https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.1.0/ParentingProjectMyanmar.apk";
  try {
    window.location.href = apkUrl;
  } catch (err) {
    window.open(apkUrl, '_blank');
  }
}

function copyApkDownloadLink() {
  const apkUrl = "https://github.com/sianhung-lab/the-parenting-project-myanmar/releases/download/v1.1.0/ParentingProjectMyanmar.apk";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(apkUrl).then(() => {
      alert("✅ APK ဒေါင်းလုဒ်လင့်ခ်ကို ကူးယူပြီးပါပြီ (Copied)! Chrome browser တွင် Paste လုပ်ပြီး တိုက်ရိုက်ဒေါင်းလုဒ်လုပ်နိုင်ပါသည်:\n" + apkUrl);
    }).catch(() => {
      prompt("APK Download Link:", apkUrl);
    });
  } else {
    prompt("APK Download Link:", apkUrl);
  }
}

function dismissUpgradeNoti() {
  const b = document.getElementById('upgrade-noti-banner');
  if (b) {
    b.style.transition = 'all 0.35s ease';
    b.style.transform = 'translateY(-140%)';
    b.style.opacity = '0';
    setTimeout(() => {
      if (b && b.parentNode) b.remove();
    }, 400);
  }
}

// ==========================================
// DEDICATED PHONE APP SUITE & 11-MODULE CINEMA
// ==========================================
let currentMobileModId = 1;
let currentFeedbackRating = 5;

function getCompletedModules() {
  try {
    return JSON.parse(localStorage.getItem('tpp_completed_modules')) || [];
  } catch (e) {
    return [];
  }
}

function saveCompletedModules(arr) {
  try {
    localStorage.setItem('tpp_completed_modules', JSON.stringify(arr));
  } catch (e) {}
  updateMobileProgressUI();
  renderMobileModuleChips();
}

function updateMobileProgressUI() {
  const completed = getCompletedModules();
  const count = completed.length;
  const pct = Math.round((count / 11) * 100);

  const countEl = document.getElementById('mobile-progress-count');
  if (countEl) {
    countEl.textContent = `${count} of 11 Completed (${pct}%)`;
  }
  const fillEl = document.getElementById('mobile-progress-fill');
  if (fillEl) {
    fillEl.style.width = `${pct}%`;
  }
}

function initMobileCinema() {
  renderMobileModuleChips();
  selectMobileModuleVideo(currentMobileModId, false);
  updateMobileProgressUI();
}

function renderMobileModuleChips() {
  const container = document.getElementById('mobile-modules-scroll');
  if (!container) return;

  const completed = getCompletedModules();
  const isMy = lang === 'my';

  container.innerHTML = MODULES.map(m => {
    const isAct = m.id === currentMobileModId;
    const isDone = completed.includes(m.id);
    const title = isMy ? m.myTitle : m.title;

    return `
      <div class="mobile-module-chip ${isAct ? 'active' : ''}" onclick="selectMobileModuleVideo(${m.id}, true)">
        <div class="mobile-chip-top">
          <span class="mobile-chip-badge">${m.icon} M${m.id}</span>
          <span class="mobile-chip-status">${isDone ? '✅' : '⏳'}</span>
        </div>
        <div class="mobile-chip-title">${title}</div>
        <div style="font-size:0.65rem;color:rgba(255,255,255,0.6);margin-top:3px">${m.dur} mins</div>
      </div>
    `;
  }).join('');
}

function selectMobileModuleVideo(modId, autoPlay = true) {
  currentMobileModId = modId;
  const mod = MODULES.find(m => m.id === modId);
  if (!mod) return;

  const isMy = lang === 'my';
  const iframe = document.getElementById('mobile-cinema-iframe');
  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${mod.youtube}?rel=0&enablejsapi=1${autoPlay ? '&autoplay=1' : ''}`;
  }

  // Update Photo 1 headline current title
  const currentTitleEl = document.getElementById('mobile-cinema-current-title');
  if (currentTitleEl) {
    currentTitleEl.textContent = `M${mod.id}: ${mod.title}`;
  }

  // Update Bottom Info Pill
  const pillEl = document.getElementById('mobile-cinema-bottom-pill');
  if (pillEl) {
    pillEl.textContent = `Module ${mod.id}: ${mod.title} | ${mod.dur || 15} mins`;
  }

  // Update 11-chip grid active state
  for (let i = 1; i <= 11; i++) {
    const chipBtn = document.getElementById(`chip-m${i}`);
    if (chipBtn) {
      chipBtn.classList.toggle('active', i === mod.id);
    }
  }

  const titleEl = document.getElementById('mobile-cinema-title');
  if (titleEl) {
    titleEl.textContent = `မော်ဂျူး ${mod.id}: ${isMy ? mod.myTitle : mod.title}`;
  }

  const subEl = document.getElementById('mobile-cinema-sub');
  if (subEl) {
    subEl.textContent = isMy ? mod.mySub : mod.sub;
  }

  // Update Completed Button state
  const completed = getCompletedModules();
  const isDone = completed.includes(mod.id);
  const btnComp = document.getElementById('btn-toggle-mod-completed');
  const txtComp = document.getElementById('txt-mod-completed');
  const icoComp = document.getElementById('ico-mod-completed');

  if (btnComp) {
    btnComp.classList.toggle('is-completed', isDone);
  }
  if (txtComp) {
    txtComp.textContent = isDone ? '✓ ပြီးဆုံးပြီး (Completed)' : 'ပြီးဆုံးကြောင်း မှတ်သားမည်';
  }
  if (icoComp) {
    icoComp.textContent = isDone ? '✅' : '✓';
  }

  // Sync dropdown in feedback form
  const fbSelect = document.getElementById('fb-module-select');
  if (fbSelect) {
    fbSelect.value = `Module ${mod.id}`;
  }

  renderMobileModuleChips();
}

function toggleModuleCompletedCurrent() {
  const completed = getCompletedModules();
  const idx = completed.indexOf(currentMobileModId);
  if (idx >= 0) {
    completed.splice(idx, 1);
    showToast(`မော်ဂျူး ${currentMobileModId} ကို မပြီးဆုံးသေးအဖြစ် ပြောင်းလိုက်ပါသည်`);
  } else {
    completed.push(currentMobileModId);
    playUpgradeChime();
    showToast(`🎉 မော်ဂျူး ${currentMobileModId} ပြီးဆုံးကြောင်း အောင်မြင်စွာ မှတ်သားပြီးပါပြီ!`);
    if (completed.length === 11) {
      setTimeout(() => {
        showToast('🏆 ဂုဏ်ယူပါသည်! မော်ဂျူး ၁၁ ခုစလုံး ပြီးဆုံးပါပြီ။ အောင်လက်မှတ်ကို ကြည့်ရှုနိုင်ပါပြီ!');
        openCertificateModal();
      }, 1000);
    }
  }
  saveCompletedModules(completed);
  selectMobileModuleVideo(currentMobileModId, false);
}

function openFeedbackForCurrentModule() {
  switchAppTab('prayer');
  switchPrayerFeedbackTab('feedback');
  const fbSelect = document.getElementById('fb-module-select');
  if (fbSelect) fbSelect.value = `Module ${currentMobileModId}`;
}

function openPrayerForCurrentModule() {
  switchAppTab('prayer');
  switchPrayerFeedbackTab('prayer');
  const catSelect = document.getElementById('prayer-cat');
  if (catSelect) catSelect.value = 'child';
}

// ==========================================
// PRAYER REQUESTS & COMMUNITY PRAYER WALL
// ==========================================
let livePrayers = [];

async function loadLivePrayers() {
  const container = document.getElementById('prayers-container');
  if (!container) return;

  try {
    const res = await fetch('/api/prayers');
    if (res.ok) {
      livePrayers = await res.json();
    }
  } catch (e) {
    console.log('Error loading prayers:', e);
  }

  if (!livePrayers || livePrayers.length === 0) {
    if (document.body.classList.contains('is-mobile-app')) {
      container.innerHTML = '';
      return;
    }
    container.innerHTML = `<div style="text-align:center;padding:1rem;color:rgba(255,255,255,0.6);font-size:0.8rem">ဆုတောင်းချက် မရှိသေးပါ။ သင်၏ မိသားစု ဆုတောင်းချက်ကို ပထမဆုံး စတင် တင်သွင်းနိုင်ပါသည် 🙏</div>`;
    return;
  }

  // In mobile app mode, do not render duplicate seed prayers (p-1, p-2, p-3) into prayers-container
  let displayPrayers = livePrayers;
  if (document.body.classList.contains('is-mobile-app')) {
    displayPrayers = livePrayers.filter(p => p.id && !p.id.toString().startsWith('p-') && p.id !== 'seed');
    if (displayPrayers.length === 0) {
      container.innerHTML = '';
      return;
    }
  }

  container.innerHTML = displayPrayers.map(p => {
    return `
      <div class="prayer-card" id="prayer-card-${p.id}">
        <div class="prayer-card-header">
          <span class="prayer-card-author">👤 ${p.author} <small style="font-weight:normal;color:rgba(255,255,255,0.6)">(${p.city})</small></span>
          <span class="prayer-card-cat">${p.catName || '🙏 ဆုတောင်းချက်'}</span>
        </div>
        <div class="prayer-card-text">${p.text}</div>
        <div class="prayer-card-footer">
          <span class="prayer-card-time">🕒 ${p.time}</span>
          <button type="button" class="prayer-btn-pray" onclick="incrementPrayer('${p.id}')">
            <span>🙏</span>
            <span id="pray-cnt-${p.id}">${p.prayerCount || 1}</span>
            <span>Parents Prayed</span>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

async function handlePrayerSubmit(e) {
  e.preventDefault();
  const authorInput = document.getElementById('prayer-author');
  const cityInput = document.getElementById('prayer-city');
  const catInput = document.getElementById('prayer-cat');
  const textInput = document.getElementById('prayer-text');
  const btn = document.getElementById('btn-submit-prayer');

  if (!textInput || !textInput.value.trim()) return;

  const payload = {
    author: (authorInput ? authorInput.value.trim() : '') || 'မေမေ/ဖေဖေ',
    city: (cityInput ? cityInput.value.trim() : '') || 'မြန်မာ',
    cat: catInput ? catInput.value : 'family',
    catName: catInput ? catInput.options[catInput.selectedIndex].text : '👨‍👩‍👧‍👦 မိသားစု ဆုတောင်းချက်',
    text: textInput.value.trim()
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'တင်သွင်းနေပါသည်...';
  }

  try {
    const res = await fetch('/api/prayers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      textInput.value = '';
      playUpgradeChime();
      showToast('🙏 သင်၏ မိသားစု ဆုတောင်းလွှာကို အောင်မြင်စွာ တင်သွင်းပြီးပါပြီ!');
      await loadLivePrayers();
    } else {
      showToast('ဆုတောင်းလွှာ တင်သွင်းမှု မအောင်မြင်ပါ။ ပြန်လည်ကြိုးစားပါ');
    }
  } catch (err) {
    showToast('Network error: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = '🙏 ဆုတောင်းလွှာ တင်သွင်းမည် (Submit Prayer)';
    }
  }
}

async function incrementPrayer(pId) {
  const cntEl = document.getElementById(`pray-cnt-${pId}`);
  if (cntEl) {
    let current = parseInt(cntEl.textContent, 10) || 0;
    cntEl.textContent = current + 1;
  }
  playUpgradeChime();
  if (navigator.vibrate) {
    try { navigator.vibrate(60); } catch(e) {}
  }
  showToast('❤️ ဆုတောင်းခြင်းတွင် ပါဝင်ပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်!');

  try {
    await fetch('/api/prayers/pray', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: pId })
    });
  } catch (e) {}
}

// ==========================================
// MODULE FEEDBACK & TESTIMONIALS
// ==========================================
let liveFeedback = [];

function setFeedbackRating(stars) {
  currentFeedbackRating = stars;
  const starBtns = document.querySelectorAll('#fb-stars-row .star-btn');
  starBtns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx < stars);
  });
}

async function loadLiveFeedback() {
  const container = document.getElementById('feedback-container');
  if (!container) return;

  try {
    const res = await fetch('/api/feedback');
    if (res.ok) {
      liveFeedback = await res.json();
    }
  } catch (e) {}

  if (!liveFeedback || liveFeedback.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:1rem;color:rgba(255,255,255,0.6);font-size:0.8rem">သုံးသပ်ချက် မရှိသေးပါ။ ပထမဆုံး စတင် ရေးသားနိုင်ပါသည် ⭐</div>`;
    return;
  }

  container.innerHTML = liveFeedback.map(fb => {
    const stars = '★'.repeat(fb.rating || 5) + '☆'.repeat(5 - (fb.rating || 5));
    return `
      <div class="prayer-card" style="border-left: 3px solid #ffcc00">
        <div class="prayer-card-header">
          <span class="prayer-card-author">👤 ${fb.author} <small style="color:#ffcc00">(${fb.church || 'မိတ်ဖက်မိဘ'})</small></span>
          <span style="color:#ffcc00;font-size:0.85rem">${stars}</span>
        </div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.6);margin-bottom:4px">📚 ${fb.module}: ${fb.moduleTitle || ''}</div>
        <div class="prayer-card-text">${fb.text}</div>
        <div class="prayer-card-time">🕒 ${fb.time || '2026-09-24'}</div>
      </div>
    `;
  }).join('');
}

async function handleFeedbackSubmit(e) {
  e.preventDefault();
  const modSelect = document.getElementById('fb-module-select');
  const textInput = document.getElementById('fb-text');
  const btn = document.getElementById('btn-submit-fb');

  if (!textInput || !textInput.value.trim()) return;

  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}

  const payload = {
    module: modSelect ? modSelect.value : 'General',
    moduleTitle: modSelect ? modSelect.options[modSelect.selectedIndex].text : '',
    rating: currentFeedbackRating,
    text: textInput.value.trim(),
    author: (session && session.displayName) ? session.displayName : 'Parent',
    church: (session && session.churchName) ? session.churchName : 'Christian Family'
  };

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'ပေးပို့နေပါသည်...';
  }

  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      textInput.value = '';
      playUpgradeChime();
      showToast('⭐ သင့်သုံးသပ်ချက်ကို အောင်မြင်စွာ လက်ခံရရှိပါပြီ။ ကျေးဇူးတင်ပါသည်!');
      await loadLiveFeedback();
    }
  } catch (err) {
    showToast('Network error: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = '✍️ သုံးသပ်ချက် ပေးပို့မည် (Submit Feedback)';
    }
  }
}

function switchPrayerFeedbackTab(tab) {
  const btnP = document.getElementById('sec-tab-prayer');
  const btnF = document.getElementById('sec-tab-feedback');
  const viewP = document.getElementById('view-prayer-wall');
  const viewF = document.getElementById('view-feedback');

  if (btnP) btnP.classList.toggle('active', tab === 'prayer');
  if (btnF) btnF.classList.toggle('active', tab === 'feedback');

  if (viewP) viewP.style.display = tab === 'prayer' ? 'block' : 'none';
  if (viewF) viewF.style.display = tab === 'feedback' ? 'block' : 'none';

  if (tab === 'prayer') loadLivePrayers();
  if (tab === 'feedback') loadLiveFeedback();
}

// ==========================================
// IN-APP FAST LOGIN (NO REDIRECT NEEDED)
// ==========================================
function openInAppLoginModal() {
  const m = document.getElementById('inapp-login-modal');
  if (m) m.classList.add('open');
}

function closeInAppLoginModal() {
  const m = document.getElementById('inapp-login-modal');
  if (m) m.classList.remove('open');
}

function handleMobileUserClick() {
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}
  if (session && session.loggedIn) {
    openSettingsModal();
  } else {
    openInAppLoginModal();
  }
}

function updateMobileUserUI() {
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}

  const btn = document.getElementById('mobile-app-btn-user');
  const ico = document.getElementById('mobile-user-icon');
  const lbl = document.getElementById('mobile-user-label');

  if (btn && lbl) {
    if (session && session.loggedIn) {
      btn.classList.add('is-logged-in');
      if (ico) ico.textContent = '👤';
      lbl.textContent = session.displayName ? session.displayName.split(' ')[0] : 'Member';
    } else {
      btn.classList.remove('is-logged-in');
      if (ico) ico.textContent = '🔑';
      lbl.textContent = 'Sign In';
    }
  }

  // Update Certificate info
  const certName = document.getElementById('cert-parent-name');
  const certChurch = document.getElementById('cert-church-name');
  if (certName && session && session.displayName) {
    certName.textContent = session.displayName;
  }
  if (certChurch && session && session.churchName) {
    certChurch.textContent = session.churchName;
  }
}

async function quickDemoLogin() {
  const sessionData = {
    email: 'parent@cbn.org',
    displayName: 'စံပြမိဘ (Myanmar Parent)',
    churchName: 'Grace Community Church',
    loggedIn: true,
    isGranted: true,
    role: 'parent',
    loginTime: new Date().toISOString()
  };

  localStorage.setItem('tpp_user_session', JSON.stringify(sessionData));
  userPrivilege.loggedIn = true;
  userPrivilege.isGranted = true;
  userPrivilege.displayName = sessionData.displayName;
  userPrivilege.churchName = sessionData.churchName;

  playUpgradeChime();
  showToast('✓ စံပြမိဘ အကောင့်ဖြင့် ဝင်ရောက်ပြီးပါပြီ (Modules 1-11 Unlocked)!');
  closeInAppLoginModal();
  updateMobileUserUI();
  checkAuthStatus();
  initMobileCinema();
}

async function handleInAppLoginSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('inapp-email');
  const passInput = document.getElementById('inapp-password');
  const btn = document.getElementById('btn-inapp-login');

  const emailVal = emailInput ? emailInput.value.trim() : '';
  const passVal = passInput ? passInput.value.trim() : '';

  if (btn) {
    btn.disabled = true;
    btn.textContent = 'စစ်ဆေးနေပါသည်...';
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailVal, password: passVal })
    });
    const data = await res.json();
    if (res.ok && data.status === 'success') {
      const sessionData = {
        email: emailVal,
        displayName: data.displayName || 'Parent Facilitator',
        churchName: data.churchName || 'Partner Church',
        loggedIn: true,
        isGranted: true,
        role: data.role || 'facilitator',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('tpp_user_session', JSON.stringify(sessionData));
      userPrivilege.loggedIn = true;
      userPrivilege.isGranted = true;
      userPrivilege.displayName = sessionData.displayName;
      userPrivilege.churchName = sessionData.churchName;

      playUpgradeChime();
      showToast(`✓ မင်္ဂလာပါ ${sessionData.displayName}! မော်ဂျူးအားလုံး ကြည့်ရှုနိုင်ပါပြီ`);
      closeInAppLoginModal();
      updateMobileUserUI();
      checkAuthStatus();
      initMobileCinema();
    } else {
      showToast('❌ ' + (data.error || 'အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားယွင်းနေပါသည်'));
    }
  } catch (err) {
    showToast('⚠️ Network Error: ' + err.message);
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = '🔑 အကောင့်ဝင်မည် (Sign In)';
    }
  }
}

// ==========================================
// DIGITAL CERTIFICATE & DAILY DEVOTIONAL
// ==========================================
function openCertificateModal() {
  updateMobileUserUI();
  const m = document.getElementById('certificate-modal');
  if (m) m.classList.add('open');
}

function closeCertificateModal() {
  const m = document.getElementById('certificate-modal');
  if (m) m.classList.remove('open');
}

function shareCertificateViber() {
  let session = null;
  try { session = JSON.parse(localStorage.getItem('tpp_user_session')); } catch(e) {}
  const name = session && session.displayName ? session.displayName : 'Parent';
  const text = encodeURIComponent(`🎓 The Parenting Project Myanmar — Certificate of Family Discipleship\nRecipient: ${name}\nCompleted all 11 biblical parenting modules with CBN Asia!\nJoin the project: https://parenting-project-myanmar.penglambot.workers.dev`);
  window.location.href = `viber://forward?text=${text}`;
}

function shareDailyBlessing() {
  const vText = document.getElementById('devotional-verse-text');
  const rText = document.getElementById('devotional-ref-text');
  const verse = vText ? vText.textContent.trim() : '';
  const ref = rText ? rText.textContent.trim() : '';
  const text = encodeURIComponent(`✨ ယနေ့အတွက် မိဘကောင်းချီး နှုတ်ကပတ်တော် (The Parenting Project Myanmar):\n\n${verse}\n— ${ref}\n\nအိမ်ထောင်မိသားစု ကောင်းချီးခံစားရပါစေ! 🙏\nhttps://parenting-project-myanmar.penglambot.workers.dev`);
  window.location.href = `viber://forward?text=${text}`;
}

// ==========================================
// MOBILE APP TAB SWITCHER & VIEW CONTROLLER
// ==========================================
function switchAppTab(tab) {
  const tabs = ['cinema', 'prayer', 'devotional', 'account', 'lessons', 'quiz'];
  tabs.forEach(t => {
    const btn = document.getElementById(`btn-app-tab-${t}`);
    if (btn) btn.classList.toggle('active', t === tab);
  });

  if (tab === 'account') {
    handleMobileUserClick();
    return;
  }

  const screenViews = {
    'cinema': document.getElementById('view-mobile-cinema'),
    'hub': document.getElementById('view-mobile-cinema'),
    'prayer': document.getElementById('view-mobile-prayer'),
    'devotional': document.getElementById('view-mobile-devotional')
  };

  const activeView = screenViews[tab];
  if (activeView) {
    document.querySelectorAll('.mobile-screen-view').forEach(v => {
      v.classList.remove('active');
      v.style.display = 'none';
    });
    activeView.classList.add('active');
    activeView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Hide top brand bar on subpages so that back-headers sit cleanly at top
  const mobileAppBar = document.getElementById('mobile-app-bar');
  if (tab === 'prayer' || tab === 'devotional') {
    document.body.classList.add('on-subpage');
    if (mobileAppBar) mobileAppBar.style.setProperty('display', 'none', 'important');
  } else {
    document.body.classList.remove('on-subpage');
    if (mobileAppBar) mobileAppBar.style.setProperty('display', 'flex', 'important');
  }

  if (tab === 'prayer') {
    loadLivePrayers();
  } else if (tab === 'devotional') {
    updateMobileProgressUI();
  }
}

function togglePrayerFormDrawer() {
  const drawer = document.getElementById('mobile-prayer-form-drawer');
  if (drawer) {
    const isHidden = drawer.style.display === 'none' || !drawer.style.display;
    drawer.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      drawer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

window.togglePrayerFormDrawer = togglePrayerFormDrawer;

window.initMobileCinema = initMobileCinema;
window.selectMobileModuleVideo = selectMobileModuleVideo;
window.toggleModuleCompletedCurrent = toggleModuleCompletedCurrent;
window.loadLivePrayers = loadLivePrayers;
window.handlePrayerSubmit = handlePrayerSubmit;
window.incrementPrayer = incrementPrayer;
window.loadLiveFeedback = loadLiveFeedback;
window.handleFeedbackSubmit = handleFeedbackSubmit;
window.setFeedbackRating = setFeedbackRating;
window.switchPrayerFeedbackTab = switchPrayerFeedbackTab;
window.openInAppLoginModal = openInAppLoginModal;
window.closeInAppLoginModal = closeInAppLoginModal;
window.handleMobileUserClick = handleMobileUserClick;
window.quickDemoLogin = quickDemoLogin;
window.handleInAppLoginSubmit = handleInAppLoginSubmit;
window.openCertificateModal = openCertificateModal;
window.closeCertificateModal = closeCertificateModal;
window.shareCertificateViber = shareCertificateViber;
window.shareDailyBlessing = shareDailyBlessing;
window.updateMobileUserUI = updateMobileUserUI;

// Re-check when app is resumed from background
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    checkAppMode();
  }
});

window.checkAppMode = checkAppMode;
window.switchAppTab = switchAppTab;
window.showUpgradeNotification = showUpgradeNotification;
window.dismissUpgradeNoti = dismissUpgradeNoti;

// INIT
function initApp() {
  checkAppMode();
  storeEn();
  initNav();
  initScrollAnim();
  initActiveNav();
  renderModules();
  initModules();
  initVideoCarousel();
  initQuiz();
  renderBenefits();
  renderSteps();
  initRegModal();
  renderTestimonials();
  renderFAQ();
  initLang();
  checkAuthStatus();
  handleUrlActions();
  loadDynamicVideos();
  initMobileCinema();
  updateMobileUserUI();
  loadLivePrayers();

  // Handle direct tab deep links (?tab=prayer, ?tab=devotional, ?tab=cinema)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const targetTab = urlParams.get('tab');
    if (targetTab) {
      switchAppTab(targetTab);
    }
  } catch(e) {}
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
