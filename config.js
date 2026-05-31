// ═══════════════════════════════════════════════════════════════
//  Zakaa Brand — Frontend Configuration File
//  Edit this file to update pricing, currency, and product catalog
// ═══════════════════════════════════════════════════════════════

// ─── Currency Settings ───────────────────────────────────────
// Update this value whenever the USD → EGP exchange rate changes.
// All EGP prices on the site are calculated from this rate automatically
// IF a product's "priceEGP" is set to null (auto-calculate mode).
const DOLLAR_RATE = 53; // 1 USD = 53 EGP  ← change this as needed

// ─── Site Settings ───────────────────────────────────────────
const SITE_CONFIG = {
  siteName: "Zakaa Brand",
  currency: {
    usdSymbol: "$",
    egpSymbol: "ج.م",
    dollarRate: DOLLAR_RATE, // referenced from above
  },
  shipping: {
    kuwaitEGP: 650,
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
    badge: "new",
    inStock: true,
    skills: [" التعرف علي الاشكال الهندسية (مربع - دائرة - مثلث )", " التعرف علي الالوان (احمر - اصفر - اخضر )", "التعرف علي الاحجام (كبير - وسط - صغير)","زيادة التركيز و الانتباه","زيادة التآزر البصري الحركي"],
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
    description: "اهداف اللعبة:\n• زيادة التركيز والانتباه والصبر لجميع الاعمار\n• تنمية مهارة التقليد (تقليد الاشكال المتاحة في الشيت)\n• تنمية مهارة التنسيق بين العين واليد وتناسق الشكل العام\n• يتعرف الطفل من خلالها على الاشكال والالوان\n• يطور القدرة على التفكير المنطقي",
    ageMin: 3,
    ageLabel: "3+ سنوات",
    badge: "popular",
    inStock: true,
    skills: [],
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
    description: `اهداف اللعبة : 
- تعليم الطفل الاعداد عن طريق اللعب ( خاصة مع اطفال صعوبات التعلم )
- التعرف علي الالوان 
- زيادة التركيز و الانتباه 
- التنسيق بين حركة العين و اليد
- زيادة التآزر البصري الحركي`,
    ageMin: 5,
    ageLabel: "Ages 5+",
    badge: null,
    inStock: true,
    skills: [],
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
    description: `اهداف اللعبة : 
- التعرف علي الالوان 
- زيادة التركيز و الانتباه 
- زيادة التآزر البصري الحركي 
- تقليل الاندفاعية`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
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
    description: `الاهداف :
•  تنمية مهارة المطابقة
•  الحد من الاندفاعية
•  التعرف علي الالوان 
•  زيادة التركيز و الانتباه 
-زيادة التآزر البصري الحركي
`,
    ageMin: 5,
    ageLabel: "Ages 5+",
    badge: "popular",
    inStock: true,
    skills: [],
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
    description: `-اهداف اللعبة : 
-زيادة التركيز و الانتباه 
•  زيادة التآزر البصري الحركي و التنسيق بين العين و اليد
-تنمي مهارة المطابقة و التقليد  
•  تقوية الذاكرة البصرية
- الحد من الاندفاعية و فرط الحركة`,
    ageMin: 7,
    ageLabel: "Ages 7+",
    badge: null,
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-007",
    name: "",
    category: "",
    imagePath: "images/photo_9_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 100,
    description: "",
    ageMin: 3,
    ageLabel: "Ages 3+",
    badge: null,
    inStock: true,
    skills: ["Balance", "Physics Intuition"],
    players: "1–4 players",
    playTime: "15–25 min",
  },
  {
    id: "product-008",
    name: "بورد التطابق",
    category: "",
    imagePath: "images/photo_10_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 85,
    description: `
الاهداف : 
١- مطابقة القطعة بالشكل المماثل لها
٢- زيادة التركيز و الانتباه
٣- التعرف علي الالوان
٤- زيادة التآزر البصري الحركي
٥- التنسيق بين حركة العين و اليد
٦- مطابقة القطعة بالشكل`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: ["Geography", "Cultural Awareness", "Trivia & Memory"],
    players: "1 player",
    playTime: "15–30 min",
  },
  {
    id: "product-009",
    name: "بازل الاعداد والعمليات الحسابية",
    category: "",
    imagePath: "images/photo_11_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 90,
    description: `الاهداف : 
١- تعليم الطفل الارقام عن طريق اللعب
٢- التدريب علي حل المسائل الحسابية
٣- زيادة التركيز و الانتباه
٤- زيادة التآزر البصري`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-010",
    name: "بازل الخضروات",
    category: "",
    imagePath: "images/photo_12_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 80,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-011",
    name: "بازل الفواكه",
    category: "",
    imagePath: "images/photo_13_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 80,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-012",
    name: "بازل التطابق “ انصاف الدوائر",
    category: "",
    imagePath: "images/photo_14_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 130,
    description: `اهدافها
- تنمية مهارات الطفل البصرية 
- تنمية مهاراة التطابق
- زيادة التركيز و الانتباه
- تقليل الاندفاعية عند الاطفال
- التميز بين الالوان المتداخلة
- التنسيق بين حركة اليد و العين
- زيادة التآزر البصري الحركي 
-بديل للالعاب الالكترونية`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-013",
    name: "لعبة نسخ النمط",
    category: " ",
    imagePath: "images/photo_15_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 130,
    description: `
- الاهداف
- استكشاف عالم التعلم من خلال اللعب مع مجموعة "انسخ النمط"!
- تميز الانماط و الالوان
- تنمية المهارات الحركية الدقيقة
- التنسيق بين حركة اليد و العين
- تقليل الاندافاعية
- مثالي لممارسة تنفيذ الاوامر
- وتعزيز التطور المعرفي
- وتطوير مهارات حل المشكلات`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-014",
    name: "لعبة : ابحث عن النمط",
    category: "",
    imagePath: "images/photo_16_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: `
الاهداف :
- زيادة التركيز و الانتباه
- يطور مهاراة التنسيق بين حركة العين و اليد
- يعزز الشكل و التعرف علي الالوان
- يحسن من تقليل الاندفاعية عند الطفل
- بديل للالعاب الالكترونية`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "45–90 min",
  },
  {
    id: "product-015",
    name: "",
    category: "",
    imagePath: "images/photo_17_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "15–30 min",
  },
  {
    id: "product-016",
    name: "",
    category: "",
    imagePath: "images/photo_18_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-017",
    name: "",
    category: "",
    imagePath: "images/photo_19_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "20–40 min",
  },
  {
    id: "product-018",
    name: "",
    category: "",
    imagePath: "images/photo_20_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–50 min",
  },
  {
    id: "product-019",
    name: "المربعات المتداخلة",
    category: "",
    imagePath: "images/photo_21_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: `اهداف النشاط
- لتنمية مهارة التقليد
- زيادة التركيز و الانتباه
- التنسيق بين حركة اليد و العين 
- زيادة التآزر البصري الحركي 
- تقليل الاندفاعية
- تنمية قدرات الطفل علي الابداع`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "20–40 min",
  },
  {
    id: "product-020",
    name: "",
    category: "",
    imagePath: "images/photo_22_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "30–60 min",
  },
  {
    id: "product-021",
    name: "",
    category: "",
    imagePath: "images/photo_23_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "45–90 min",
  },
  {
    id: "product-022",
    name: "",
    category: "",
    imagePath: "images/photo_24_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "5–15 min",
  },
  {
    id: "product-023",
    name: "",
    category: "",
    imagePath: "images/photo_25_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: "",
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "45–75 min",
  },
  {
    id: "product-024",
    name: "لعبة الاسهم",
    category: "",
    imagePath: "images/photo_4_2026-03-21_16-00-02.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: `اهداف اللعبة : 
•  التعرف علي الاتجاهات
•  التعرف علي الالوان ( احمر-اصفر-اخضر-ازرق )
•  زيادة التركيز و الانتباه 
( بحيث ان الطفل يكون مركز في ان كل اتجاه يمين لونه احمر و كل اتجاه شمال لونه اخضر و هكذا)
•  زيادة التآزر البصري الحركي`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "45–75 min",
  },
  {
    id: "product-025",
    name: "لعبة الذاكرة البصرية",
    category: "",
    imagePath: "images/705245620_2046815676186538_7275321992089774575_n.jpg",
    priceUSD: null,
    priceEGP: 150,
    description: `
-هتزود التركيز و الانتباه 
-تقوية الذاكرة البصرية
-هتزود التآزر البصري الحركي
-تنمية مهارات التنسيق بين العين و اليد و تناسق الشكل العام
-هتقلل من الاندفاعية
-بديل للالعاب الالكترونية
-يتم التعرف من خلالها علي الاشكال و الالوان`,
    ageMin: 6,
    ageLabel: "Ages 6+",
    badge: "new",
    inStock: true,
    skills: [],
    players: "1 player",
    playTime: "45–75 min",
  },
];

// ─── Export (accessed by app.js) ──────────────────────────────
// No module system needed — these are global variables loaded via <script>
