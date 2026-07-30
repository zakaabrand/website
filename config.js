// ═══════════════════════════════════════════════════════════════
//  Zakaa Brand — Frontend Configuration File
//  Edit this file to update pricing, currency, and product catalog
// ═══════════════════════════════════════════════════════════════

// ─── Currency Settings ───────────────────────────────────────
// The exchange rate is fetched in real-time and cached in localStorage.
// This variable loads the cached rate, falling back to 53 if not yet fetched.
let DOLLAR_RATE = 53;

try {
  const cachedRate = localStorage.getItem("zakaa_dollar_rate");
  if (cachedRate) {
    const rate = parseFloat(cachedRate);
    if (!isNaN(rate) && rate > 0) {
      DOLLAR_RATE = rate;
    }
  }
} catch (e) {
  console.warn("localStorage access blocked or unavailable. Using default dollar rate.", e);
}

// ─── Site Settings ───────────────────────────────────────────
const SITE_CONFIG = {
  siteName: "Zakaa Brand",
  currency: {
    usdSymbol: "$",
    egpSymbol: "ج.م",
    dollarRate: DOLLAR_RATE, // referenced from above
    cacheDurationHours: 10,  // cache duration for real-time exchange rates (in hours)  (USD → EGP UPDATE)
  },
  shipping: {
    kuwaitEGP: 30,
    kuwaitKWD: 2
  },
  whatsappNumber: "+20 1200653165", // used for order/inquiry links
  showOutOfStock: false,           // hide products with inStock: false
};

// ─── Product Catalog (JSON Schema) ───────────────────────────
//
// SCHEMA REFERENCE FOR EACH PRODUCT:
// {
//   id:           (string)  unique identifier, e.g. "product-001"
//   name:         (string)  display name of the product
//   category:     (string)  category label shown on the card
//   imagePath:    (string)  path to the product image, relative to index.html
//   priceUSD:     (number)  price in US dollars
//   priceEGP:     (number|null) price in EGP — set to null to auto-calculate
//                            from priceUSD × DOLLAR_RATE
//   description:  (string)  full description shown when expanded
//   ageMin:       (number)  minimum recommended age (e.g. 4)
//   ageLabel:     (string)  display label (e.g. "Ages 4+")
//   badge:        ("new" | "popular" | null)  badge shown on the card image
//   inStock:      (boolean) whether the item is available
//   skills:       (string[]) list of skills/benefits this game develops
//   players:      (string)  e.g. "2–4 players"
//   playTime:     (string)  e.g. "20–40 min"
// }
//
// TO ADD A NEW PRODUCT: copy one block below, paste it at the end of
// the array (before the closing ]), fill in the fields, save the file.
// The website will automatically render the new card.

const PRODUCTS = [
  {
    id: "product-001",
    name: "بازل الأشكال الهندسية",
    category: "Logic & Puzzles",
    imagePath: "images/photo_2_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "بازل ممتع مصمم لتطوير المهارات الحركية الدقيقة لدى الأطفال والتنسيق بين اليد والعين. كل قطعة تأتي في مكان محدد، مما يدفع الأطفال إلى التفكير النقدي ومعالجة المشكلات المكانية أثناء اللعب.",
    ageMin: 4,
    ageLabel: " ٤+ سنوات",
    badge: "",
    inStock: true,
    skills: [
      "التعرف على الأشكال الهندسية (مربع - دائرة - مثلث)",
      "التعرف على الألوان (أحمر - أصفر - أخضر)",
      "التعرف على الأحجام (كبير - وسط - صغير)",
      "زيادة التركيز والانتباه",
      "زيادة التآزر البصري الحركي"
    ],
    players: "١ لاعب",
    playTime: "١٥–٣٠ دقيقة",
  },
  {
    id: "product-002",
    name: "لعبة التكوين",
    category: "",
    imagePath: "images/photo_3_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة ذكية تعتمد على تركيب الأشكال الخشبية الملونة لبناء تصميمات مختلفة وتتبع الأنماط المحددة، مما يطور الصبر والمهارات العقلية بطريقة تفاعلية وممتعة.",
    ageMin: 3,
    ageLabel: "3+ سنوات",
    badge: "",
    inStock: true,
    skills: [
      "زيادة التركيز والانتباه والصبر لجميع الأعمار",
      "تنمية مهارة تقليد الأنماط والأشكال",
      "التنسيق بين حركة العين واليد وتناسق الشكل العام",
      "التعرف على الأشكال الهندسية والألوان",
      "تطوير القدرة على التفكير المنطقي"
    ],
    players: "1 player",
    playTime: "10–20 min",
  },
  {
    id: "product-003",
    name: "بازل الاعداد",
    category: "",
    imagePath: "images/photo_5_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 125,
    description: "بازل تعليمي رائع مصمم لمساعدة الأطفال على تعلم الأرقام والعد بطريقة مرحة وملموسة، ويعتبر أداة ممتازة ومثالية خاصة للأطفال الذين يواجهون صعوبات التعلم في الحساب.",
    ageMin: 5,
    ageLabel: "Ages 5+",
    badge: null,
    inStock: true,
    skills: [
      "تعلم الأعداد والعد عن طريق اللعب",
      "التعرف على الألوان المختلفة",
      "زيادة التركيز والانتباه",
      "التنسيق بين حركة العين واليد",
      "زيادة التآزر البصري الحركي"
    ],
    players: "1 player",
    playTime: "20–35 min",
  },
  {
    id: "product-004",
    name: "بازل المفاتيح",
    category: "",
    imagePath: "images/photo_6_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 130,
    description: "لعبة خشبية فريدة وتفاعلية تتطلب من الطفل استخدام المفاتيح لحل الألغاز وتطوير الدقة الحركية، مما يمنحه شعوراً بالإنجاز ويعزز الهدوء والتركيز لديه.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "التعرف على الألوان وتطابقها",
      "زيادة التركيز والانتباه والتدقيق",
      "زيادة التآزر البصري الحركي",
      "الحد من الاندفاعية وتعلم الصبر"
    ],
    players: "1 player",
    playTime: "25–45 min",
  },
  {
    id: "product-005",
    name: "كوستر التطابق",
    category: "",
    imagePath: "images/photo_7_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 60,
    description: "كوستر خشبي مصمم بدقة يتحدى الطفل لمطابقة القطع الملونة مع النمط المطلوب، وهو أداة مثالية لتطوير الملاحظة البصرية الدقيقة والتركيز الهادئ.",
    ageMin: 5,
    ageLabel: "Ages 5+",
    badge: "",
    inStock: true,
    skills: [
      "تنمية مهارة مطابقة الأنماط",
      "الحد من الاندفاعية والتسرع",
      "التعرف على الألوان وتنسيقها",
      "زيادة التركيز والانتباه والتفاصيل",
      "زيادة التآزر البصري الحركي"
    ],
    players: "1 player",
    playTime: "10–30 min",
  },
  {
    id: "product-006",
    name: "مربعات التركيز و الذاكرة",
    category: "",
    imagePath: "images/photo_8_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 145,
    description: "لعبة متكاملة لتدريب الذاكرة البصرية والتحليل، حيث يقوم الطفل بإعادة تكوين الأنماط المعقدة باستخدام المربعات الملونة، مما يساهم بشكل فعال في تهدئة الحركة وتطوير الصبر.",
    ageMin: 7,
    ageLabel: "Ages 7+",
    badge: null,
    inStock: true,
    skills: [
      "زيادة التركيز البصري والانتباه",
      "التنسيق بين حركة العين واليد والتآزر الحركي",
      "تنمية مهارات المطابقة والتقليد للأشكال",
      "تقوية الذاكرة البصرية قصيرة المدى",
      "الحد من الاندفاعية وفرط الحركة"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-007",
    name: "بورد التطابق",
    category: "",
    imagePath: "images/photo_10_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 85,
    description: "لوحة خشبية تفاعلية جذابة تهدف إلى مساعدة الأطفال في مطابقة الأشكال وتحديد الفروقات البصرية واللونية بين القطع، مما يبني أساساً متيناً للملاحظة الذكية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "مطابقة الأشكال والقطع المتماثلة",
      "زيادة التركيز البصري والانتباه",
      "تمييز الألوان وتناسقها",
      "زيادة التآزر البصري الحركي",
      "التنسيق بين حركة العين واليد"
    ],
    players: "1 player",
    playTime: "15–30 min",
  },
  {
    id: "product-008",
    name: "بازل الاعداد والعمليات الحسابية",
    category: "",
    imagePath: "images/photo_11_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 90,
    description: "أداة تعليمية حركية ممتعة تبسط مبادئ الرياضيات والعمليات الحسابية البسيطة (مثل الجمع والطرح) من خلال اللعب اللمسي، مما يسهل استيعاب المفاهيم المجردة.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تعلم الأرقام والعد بطريقة ملموسة",
      "التدريب على حل العمليات الحسابية البسيطة",
      "زيادة التركيز والانتباه للمسائل",
      "زيادة التآزر البصري الحركي"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-009",
    name: "بازل الخضراوات",
    category: "",
    imagePath: "images/photo_12_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 80,
    description: "بازل خشبي تعليمي يعرّف الأطفال الصغار على أنواع الخضروات المختلفة وأشكالها وألوانها، مما يعزز مفرداتهم اللغوية ومهاراتهم المعرفية الأساسية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تسمية وتصنيف الخضراوات المختلفة",
      "تمييز الألوان وتدرجاتها البصرية",
      "مطابقة الأشكال بالظلال والفتحات المناسبة",
      "إثراء الحصيلة اللغوية والمعرفية لدى الطفل"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-010",
    name: "بازل الفواكه",
    category: "",
    imagePath: "images/photo_13_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 80,
    description: "بازل ملون ومحبب للأطفال يساعدهم على اكتشاف الفواكه اللذيذة وتصنيفها، ويعمل كأداة بصرية ممتعة لربط الأشكال بأسمائها الحقيقية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تسمية وتصنيف أنواع الفواكه",
      "تمييز الألوان وتدرجاتها البصرية",
      "مطابقة الأشكال والظلال بدقة",
      "إثراء الحصيلة اللغوية والمفردات"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-011",
    name: "بازل التطابق “ انصاف الدوائر",
    category: "",
    imagePath: "images/photo_14_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 130,
    description: "بازل مبتكر يعتمد على تكوين الدوائر الكاملة من أنصاف الدوائر الملونة، مما يعلم الأطفال مبدأ الأجزاء والكل ويوفر بديلاً صحياً وتفاعلياً ممتازاً للشاشات الإلكترونية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تنمية مهارات التمييز والمطابقة البصرية",
      "التعرف على علاقة الجزء بالكل (أنصاف الدوائر)",
      "زيادة التركيز والانتباه والهدوء",
      "الحد من الاندفاعية والتسرع",
      "تمييز الألوان المتداخلة والمتناسقة",
      "التآزر البصري الحركي والتنسيق الحركي"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-012",
    name: "لعبة نسخ النمط",
    category: " ",
    imagePath: "images/photo_15_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 130,
    description: "افتح لطفلك بوابة الإبداع والمنطق مع لعبة 'نسخ النمط'! من خلال استخدام خرز أو قطع ملونة لإعادة بناء الأشكال المعروضة على البطاقات، يتدرب الطفل على اتباع التعليمات وحل المشكلات الهندسية بنجاح.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تمييز الأنماط والأشكال والترتيب اللوني",
      "تنمية المهارات الحركية الدقيقة للأصابع",
      "التنسيق بين حركة اليد والعين",
      "الحد من الاندفاعية وزيادة الصبر",
      "التدريب على اتباع وتنفيذ التعليمات",
      "التطور المعرفي وحل المشكلات منطقياً"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-013",
    name: "لعبة : ابحث عن النمط",
    category: "",
    imagePath: "images/photo_16_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة بحث سريعة ومثيرة تتطلب من الطفل مطابقة الأنماط البصرية المعروضة على الكروت في أسرع وقت، مما يحفز الاستجابة البصرية السريعة والتفكير الفوري المنظم.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "زيادة قوة التركيز والملاحظة والانتباه",
      "تطوير التنسيق والتآزر البصري الحركي",
      "التعرف على الأشكال المتنوعة والألوان",
      "الحد من الاندفاعية وتنظيم التفكير",
      "بديل تفاعلي ومثالي للألعاب الإلكترونية"
    ],
    players: "1 player",
    playTime: "45–90 min",
  },
  {
    id: "product-014",
    name: "المنظار ١",
    category: "",
    imagePath: "images/photo_17_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة المنظار الممتعة تضع مهارات الملاحظة لدى طفلك تحت المجهر! حيث يتعلم كيفية البحث بذكاء ونظام (مسح بصري) وسط تفاصيل غنية ومليئة بالألوان للعثور على النمط المستهدف.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "المسح البصري الحاد والتنقيب المنظم",
      "التركيز والانتباه لأدق التفاصيل البصرية",
      "التعرف على الأشكال الهندسية المختلفة",
      "التآزر البصري الحركي والتحكم الحركي الدقيق"
    ],
    players: "1 player",
    playTime: "15–30 min",
  },
  {
    id: "product-015",
    name: "بورد التركيز",
    category: "",
    imagePath: "images/photo_18_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "بورد خشبي متطور مصمم خصيصاً لتحدي مستويات التركيز العالية، ويتطلب من الطفل التفكير ثنائي الأبعاد ومطابقة الزوايا والاتجاهات المعقدة لبناء نمط هندسي دقيق.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تطوير المرونة الذهنية والتفكير المنطقي",
      "إدراك الاتجاهات والزوايا الهندسية",
      "الإدراك البصري المكاني المعقد والأبعاد",
      "التركيز البصري المزدوج وتتبع العناصر",
      "التآزر البصري الحركي ودقة حركة اليد"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-016",
    name: "بورد الايس كريم",
    category: "",
    imagePath: "images/photo_19_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "بورد الأيس كريم اللطيف يدمج متعة التصميم بالتعلم المكاني المعرفي؛ حيث يقوم الطفل بترتيب نكهات المثلجات الملونة فوق بعضها بالترتيب الصحيح المعروض على البطاقات.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "التحكم الحركي الدقيق وتقوية عضلات الأصابع",
      "تتبع تتابع الألوان والأنماط البصرية",
      "الإدراك المكاني وفهم الترتيب (فوق وتحت)",
      "التعرف على الألوان وزيادة التركيز البصري"
    ],
    players: "1 player",
    playTime: "20–40 min",
  },
  {
    id: "product-017",
    name: "لوحة الارقام الذكية",
    category: "",
    imagePath: "images/photo_20_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لوحة تعليمية ذكية ومسح مسطح لربط الأعداد والرموز؛ تمكن الأطفال من تطوير التحكم في القلم والكتابة، بالإضافة إلى عد الأشكال بأسلوب علمي تفاعلي يمهد لدراسة الرياضيات.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تنمية مهارات العد والإحصاء والربط الرقمي",
      "الكتابة والتحكم الحركي الدقيق ومسك القلم",
      "المسح البصري والتركيز المنظم",
      "فهم مفهوم البيانات وتحويل الألوان إلى أرقام"
    ],
    players: "1 player",
    playTime: "30–50 min",
  },
  {
    id: "product-018",
    name: "المربعات المتداخلة",
    category: "",
    imagePath: "images/photo_21_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "نشاط خشبي رائع يستعين بمربعات متدرجة الأحجام لتعليم الأطفال كيفية بناء وتطابق مجسمات ثلاثية الأبعاد أو أنماط متراكبة، مما يعزز الإبداع البصري لديهم.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "تنمية مهارة التقليد والتطابق للأشكال",
      "زيادة قوة التركيز والانتباه البصري",
      "التنسيق بين حركة اليد والعين بدقة",
      "زيادة التآزر البصري الحركي",
      "الحد من الاندفاعية وبناء الصبر",
      "تنمية مهارات الإبداع والتفكير ثلاثي الأبعاد"
    ],
    players: "1 player",
    playTime: "20–40 min",
  },
  {
    id: "product-019",
    name: "الحلقات المتداخلة",
    category: "",
    imagePath: "images/photo_22_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة تركيب حلقية مشوقة تقدم للأطفال مفاهيم الأحجام النسبية (من الأكبر للأصغر والعكس)، وتنمي لديهم مهارات التفكير التحليلي وحل المشكلات الهندسية بشكل مبسط وعملي.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "إدراك العلاقات الحجمية (كبير، متوسط، صغير)",
      "التركيز البصري والتدقيق في الألوان والترتيب",
      "تطوير المرونة الذهنية وحل المشكلات بالاستكشاف",
      "التفكير التحليلي وتفكيك الأنماط البصرية"
    ],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-020",
    name: "شبكة الالوان",
    category: "",
    imagePath: "images/photo_23_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لوحة شبكية مدهشة وملونة تحث الطفل على ترتيب دبابيس أو قطع الألوان لتكوين أشكال ساحرة، وهي ممتازة لتدريب الأطفال على الجلوس الهادئ وزيادة مدى انتباههم الطويل.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "التمييز اللوني الدقيق وتحديد الزوايا الصحيحة",
      "زيادة مدى التركيز والانتباه للتفاصيل الدقيقة",
      "تطوير الثبات الحركي لمرضى تشتت الانتباه وفرط الحركة",
      "تقوية عضلات اليد والتحكم الحركي الدقيق بالأصابع",
      "تنسيق حركة اليد مع الرؤية البصرية بدقة"
    ],
    players: "1 player",
    playTime: "45–90 min",
  },
  {
    id: "product-021",
    name: "مستكشف الالوان الذكي",
    category: "",
    imagePath: "images/photo_24_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة ذكاء بصرية ممتعة للغاية تتطلب من الطفل تحريك وتدوير إطار مفرغ فوق شبكة من الألوان حتى يتطابق ترتيب الألوان مع النمط المطلوب، مما ينمي الذكاء المكاني والمنطق.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "الإدراك البصري المكاني وتوجيه الأشكال",
      "المرونة الذهنية وحل المشكلات عن طريق تدوير القطع",
      "التعرف على الأشكال الهندسية المتنوعة",
      "زيادة التآزر البصري الحركي والتحكم"
    ],
    players: "1 player",
    playTime: "25–40 min",
  },
  {
    id: "product-022",
    name: "تطابق بيض الالوان ",
    category: "",
    imagePath: "images/photo_25_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "بيض الألوان التعليمي هي لعبة مطابقة ثنائية ظريفة وتفاعلية؛ حيث يبحث الطفل عن النصفين المتطابقين اللذين يكملان البيضة باللون والشكل الهندسي الصحيح، ليتعلم الصبر والاستقلالية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "الإدراك البصري المكاني وتمييز المنحنيات",
      "الربط المنطقي والمطابقة الثنائية للقطع",
      "حل المشكلات عبر تجربة الخطأ والصواب للتركيب",
      "بناء الصبر والاستقلالية والاعتماد على النفس"
    ],
    players: "1 player",
    playTime: "30-40 min",
  },
  {
    id: "product-023",
    name: "لعبة الاسهم",
    category: "",
    imagePath: "images/photo_4_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "لعبة تفاعلية ممتعة تعتمد على مطابقة الأسهم الخشبية ذات الألوان والاتجاهات المتعددة، وهي وسيلة رائعة لمساعدة الأطفال على التمييز السريع والربط المنطقي بين الألوان والاتجاهات الجغرافية والحركية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "high_recommended",
    inStock: true,
    skills: [
      "التعرف على الاتجاهات وتوجيه الحركة (يمين، شمال، إلخ)",
      "التعرف على الألوان الأساسية وربطها بالاتجاه",
      "زيادة قوة التركيز والانتباه والربط الذهني المزدوج",
      "زيادة التآزر البصري الحركي والدقة"
    ],
    players: "1 player",
    playTime: "45–75 min",
  },
  {
    id: "product-024",
    name: "لعبة الذاكرة البصرية",
    category: "",
    imagePath: "images/705245620_2046815676186538_7275321992089774575_n.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "تحدي الذاكرة البصرية الرائع! لعبة ممتعة تنمي مهارات التذكر القريب وتنسيق الألوان وتحديد مواقع الأشكال الخشبية بدقة، مما يساعد طفلك على تقليل الاندفاعية ويوفر له بديلاً رائعاً ومسلياً عن الألعاب الإلكترونية.",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "",
    inStock: true,
    skills: [
      "زيادة التركيز والانتباه والتذكر البصري",
      "تقوية الذاكرة البصرية وتحديد المواقع",
      "زيادة التآزر البصري الحركي",
      "تنسيق حركة العين واليد وتناسق الأشكال",
      "الحد من الاندفاعية والتسرع",
      "بديل تفاعلي ومثالي للألعاب الإلكترونية",
      "التعرف على الأشكال والتباديل اللونية"
    ],
    players: "1 player",
    playTime: "45–75 min",
  },
];

// ─── Export (accessed by app.js) ──────────────────────────────
// No module system needed — these are global variables loaded via <script>
