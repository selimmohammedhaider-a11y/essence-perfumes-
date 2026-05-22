// ECCENCE SHARED LOGIC & INVENTORY
const inventory = [
    { id: 1, name: "Acqua di Giò Profondo", gender: "Men", file: "aqua_di_gio_profondo_1778787520010.png", price: 750, old: 1200, notes: ["Sea Notes", "Bergamot", "Fresh", "Executive"], stock: 3 },
    { id: 2, name: "Azzaro Most Wanted", gender: "Men", file: "essesce products/Azzaro The Most Wanted Eau de Parfum Intense - Woody & Seductive Mens Cologne - Fougère, Ambery & Spicy Fragrance for Date Night - Lasting Wear - Luxury Perfumes for Men.png", price: 800, old: 1300, notes: ["Cardamom", "Toffee", "Sweet", "Dark"], stock: 5 },
    { id: 3, name: "Xerjoff Erba Pura", gender: "Unisex", file: "essesce products/Erba Pura Eau de Parfum.png", price: 800, old: 1500, notes: ["Orange", "Fruits", "Fresh"], stock: 2 },
    { id: 4, name: "JPG Le Male", gender: "Men", file: "essesce products/Jean Paul Gaultier.png", price: 750, old: 1100, notes: ["Mint", "Vanilla", "Fresh"], stock: 8 },
    { id: 5, name: "JPG Scandal", gender: "Women", file: "essesce products/Jean Paul Gaultier (1).png", price: 750, old: 1250, notes: ["Honey", "Blood Orange", "Sweet"], stock: 4 },
    { id: 6, name: "Kayali Vanilla 28", gender: "Women", file: "essesce products/Kayali - Vanilla 28.png", price: 700, old: 1350, notes: ["Vanilla Orchid", "Brown Sugar", "Sweet"], stock: 6 },
    { id: 7, name: "Lattafa Art of Universe", gender: "Unisex", file: "essesce products/Lattafa Art of Universe for Unisex Eau de Parfum Spray, 3_4 Ounce _ 100 ml.png", price: 850, old: 1000, notes: ["Spicy", "Amber", "Dark"], stock: 12 },
    { id: 8, name: "Lattafa Khamrah", gender: "Unisex", file: "essesce products/Lattafa Khamrah - Vanilla, Warm Spicy, Amber, Cinnamon - Eau de Parfum Long-Lasting Fragrance for Unisex, 3_40 Ounce _ 100 ml.png", price: 750, old: 1150, notes: ["Cinnamon", "Dates", "Sweet"], stock: 10 },
    { id: 9, name: "LV Symphony", gender: "Women", file: "essesce products/Products by Louis Vuitton_ Symphony.png", price: 800, old: 1600, notes: ["Ginger", "Grapefruit", "Fresh", "Executive"], stock: 1 },
    { id: 10, name: "Valentino Donna", gender: "Women", file: "essesce products/Valentino Donna Born in Roma Intense Eau de Parfum _ Dillard's.png", price: 750, old: 1400, notes: ["Black Currant", "Vanilla", "Sweet"], stock: 4 },
    { id: 11, name: "Valentino Uomo", gender: "Men", file: "essesce products/Valentino Uomo Born in Roma Eau de Toilette with Violet & Vetiver.png", price: 870, old: 1200, notes: ["Mineral Notes", "Ginger", "Executive"], stock: 0 },
    { id: 12, name: "Xerjoff Alexandria II", gender: "Unisex", file: "essesce products/Xerjoff - Eau de Parfum Alexandria II Parfum 100 ml Xerjoff.png", price: 800, old: 1550, notes: ["Lavender", "Oud", "Dark", "Executive"], stock: 2 },
    { id: 13, name: "Heritage Fenwick", gender: "Men", file: "essesce products/Fenwick _ UK Department Store _ Fashion, Beauty, & More.png", price: 1250, old: 1800, notes: ["Legacy", "Woody"], stock: 0 },
    { id: 14, name: "Gift Selection No.12", gender: "Unisex", file: "essesce products/Fragrance Gift Guide_ 12 Perfumes to Give Each___.png", price: 1400, old: 2000, notes: ["Floral", "Citrus"], stock: 4 },
    { id: 15, name: "Seasonal Palette", gender: "Women", file: "essesce products/How to Choose Fragrances Based on Your Seasonal Color Palette.png", price: 950, old: 1300, notes: ["Spring", "Fresh"], stock: 6 },
    { id: 16, name: "Sun-Warmed Complex", gender: "Women", file: "essesce products/Quietly complex and sun-warmed_ Spring fragrance has outgrown stale florals.png", price: 1150, old: 1600, notes: ["Warm", "Solar"], stock: 3 },
    { id: 17, name: "Zodia Săgetător", gender: "Men", file: "essesce products/Top 10 Parfumuri Pentru Bărbați din Zodia Săgetător - Replique Parfumerie.png", price: 890, old: 1200, notes: ["Amber", "Spicy"], stock: 5 },
    { id: 18, name: "Elite Acquisition I", gender: "Men", file: "essesce products/download (10).png", price: 1300, old: 1900, notes: ["Executive", "Dark"], stock: 0 },
    { id: 19, name: "Elite Acquisition II", gender: "Men", file: "essesce products/download (11).png", price: 1350, old: 1950, notes: ["Executive", "Fresh"], stock: 0 },
    { id: 20, name: "Elite Acquisition III", gender: "Women", file: "essesce products/download (12).png", price: 1400, old: 2000, notes: ["Executive", "Woody"], stock: 3 },
    { id: 21, name: "Elite Acquisition IV", gender: "Women", file: "essesce products/download (13).png", price: 1450, old: 2100, notes: ["Executive", "Floral"], stock: 4 },
    { id: 22, name: "Elite Acquisition V", gender: "Unisex", file: "essesce products/download (14).png", price: 1500, old: 2200, notes: ["Executive", "Citrus"], stock: 5 },
    { id: 23, name: "Heritage Collection A", gender: "Men", file: "essesce products/download (5).png", price: 900, old: 1300, notes: ["Legacy", "Fresh"], stock: 7 },
    { id: 24, name: "Heritage Collection B", gender: "Men", file: "essesce products/download (6).png", price: 920, old: 1350, notes: ["Legacy", "Woody"], stock: 8 },
    { id: 25, name: "Heritage Collection C", gender: "Women", file: "essesce products/download (7).png", price: 950, old: 1400, notes: ["Legacy", "Floral"], stock: 9 },
    { id: 26, name: "Heritage Collection D", gender: "Women", file: "essesce products/download (8).png", price: 980, old: 1450, notes: ["Legacy", "Amber"], stock: 10 },
    { id: 27, name: "The Signature", gender: "Unisex", file: "essesce products/download.png", price: 1600, old: 2300, notes: ["Signature", "Luxury"], stock: 2 },
    { id: 28, name: "YSL MYSLF", gender: "Men", file: "myslf_1778786698132.png", price: 800, old: 1400, notes: ["Vanilla", "Spicy", "Dark"], stock: 5 },
    { id: 29, name: "YSL Y EDP", gender: "Men", file: "ysl_y_1778786751870.png", price: 800, old: 1650, notes: ["Fresh", "Executive"], stock: 5 },
    { id: 30, name: "LV Imagination", gender: "Men", file: "lv_imagination_1778786798091.png", price: 800, old: 5600, notes: ["Fresh", "Citrus"], stock: 3 },
    { id: 31, name: "LV Pacific Chill", gender: "Men", file: "lv_pacific_1778786810610.png", price: 800, old: 5600, notes: ["Fresh", "Fruity"], stock: 3 },
    { id: 32, name: "Dark Verse", gender: "Women", file: "essesce products/_i think lovely one.png", price: 1350, old: 1800, notes: ["Dark", "Woody"], stock: 4 },
    { id: 33, name: "PDM Delina Exclusif", gender: "Women", file: "Top Luxury Perfumes for Woman on Amazon.png", price: 750, old: 7200, notes: ["Rose", "Sweet", "Floral"], stock: 2 },
    { id: 34, name: "YSL Libre Intense", gender: "Women", file: "essesce products/How to Choose Fragrances Based on Your Seasonal Color Palette.png", price: 800, old: 3100, notes: ["Lavender", "Vanilla", "Sweet"], stock: 4 },
    { id: 35, name: "Valentino Born Roma", gender: "Women", file: "essesce products/Valentino Donna Born in Roma Intense Eau de Parfum _ Dillard's.png", price: 800, old: 2750, notes: ["Sweet", "Fruity"], stock: 5 },
    { id: 36, name: "YSL Babycat", gender: "Men", file: "11 Leather Perfumes For Any and Every Occasion.png", price: 5500, old: 6500, notes: ["Vanilla", "Spicy", "Dark"], stock: 0 },
    { id: 37, name: "ADG Profondo", gender: "Men", file: "aqua_di_gio_profondo_1778787520010.png", price: 850, old: 2400, notes: ["Sea Notes", "Fresh", "Executive"], stock: 4 },
    { id: 38, name: "Creed Aventus", gender: "Men", file: "essesce products/Top 10 Parfumuri Pentru Bărbați din Zodia Săgetător - Replique Parfumerie.png", price: 750, old: 9000, notes: ["Pineapple", "Woody", "Executive"], stock: 3 },
    { id: 39, name: "Lattafa Asad", gender: "Men", file: "10 Best Fragrances For Men 2024.png", price: 700, old: 1300, notes: ["Spicy", "Amber", "Dark"], stock: 10 },
    { id: 40, name: "Ajwad by Lattafa", gender: "Men", file: "Ajwad by Lattafa for Men - 2_04 oz EDP Spray.png", price: 850, old: 1050, notes: ["Woody", "Amber", "Dark"], stock: 8 },
    { id: 41, name: "Black Diamond Incense", gender: "Unisex", file: "BLACK DIAMOND INCENSE IBRAHIM AL QURASHI _ IBRAQ PERFUME _ IBRAHEEM AL QURASHI.png", price: 950, old: 4500, notes: ["Oud", "Incense", "Dark"], stock: 2 },
    { id: 42, name: "Black Carbon Diamond", gender: "Men", file: "Black Carbon Diamond Edp 150ml By Ibraheem Al Qurashi.png", price: 950, old: 3900, notes: ["Woody", "Spicy", "Dark", "Executive"], stock: 3 },
    { id: 43, name: "Emerald Soul Diamond", gender: "Unisex", file: "EMERALD SOUL DIAMOND IBRAQ EDP 150ML.png", price: 950, old: 4200, notes: ["Fresh", "Citrus", "Executive"], stock: 2 },
    { id: 44, name: "Imperial Valley", gender: "Unisex", file: "Imperial Valley  200 ML  EDP   by Gissah _ Unisex 🔝🏆🔥💥 😍 ❤️ _ Best Seller _ eBay.png", price: 1000, old: 3500, notes: ["Amber", "Woody", "Dark"], stock: 4 },
    { id: 45, name: "Lattafa Her Confession", gender: "Women", file: "Lattafa Her Confession - Vanilla, Floral, Amber, Musk.png", price: 800, old: 950, notes: ["Vanilla", "Floral", "Sweet"], stock: 7 },
    { id: 46, name: "Lattafa His Confession", gender: "Men", file: "Lattafa Lattafa Men's His Confession EDP Spray 3_4 oz Fragrances 6290360599113.png", price: 950, old: 950, notes: ["Woody", "Spicy", "Executive"], stock: 7 },
    { id: 47, name: "Lattafa Musamam Black", gender: "Men", file: "Lattafa Musamam Black Intense _ Eau de Parfum _ 100 ml.png", price: 800, old: 1200, notes: ["Oud", "Dark", "Spicy"], stock: 5 },
    { id: 48, name: "Spanish Tobacco", gender: "Men", file: "Spanish Tobacco by Ibraheem Al_Qurashi - Review by___.png", price: 800, old: 3600, notes: ["Tobacco", "Spicy", "Dark"], stock: 3 },
    { id: 49, name: "Tom Ford Black Orchid", gender: "Women", file: "Tom Ford Black Orchid EDP for women, created by master perfumer Givaudan_.png", price: 750, old: 4800, notes: ["Black Truffle", "Orchid", "Dark"], stock: 2 },
    { id: 50, name: "Badee Al Oud Amethyst", gender: "Women", file: "essesce products/Badee Al Oud Amethyst Perfume.png", price: 800, old: 1000, notes: ["Floral", "Sweet", "Amber"], stock: 6 },
    { id: 51, name: "Bulgari Man in Black", gender: "Men", file: "essesce products/Bulgari Man in Black.png", price: 750, old: 2500, notes: ["Leather", "Spicy", "Dark", "Executive"], stock: 4 },
    { id: 52, name: "Bade'e Al Oud Honor Glory", gender: "Men", file: "essesce products/Lattafa Bade'e Al Oud Honor Glory Edp 3_4 Oz.png", price: 800, old: 1050, notes: ["Woody", "Amber", "Dark"], stock: 6 },
    { id: 53, name: "Bade'e Al Oud For Glory", gender: "Unisex", file: "essesce products/Lattafa Bade'e Al Oud Oud For Glory Eau De Parfum 100 ml (unisex).png", price: 800, old: 980, notes: ["Oud", "Woody", "Dark"], stock: 8 },
    { id: 54, name: "Badee Al Oud Noble Blush", gender: "Women", file: "essesce products/Lattafa Perfumes - Badee Al Oud Noble Blush Eau De Parfum - 100 ml.png", price: 800, old: 1020, notes: ["Rose", "Floral", "Sweet"], stock: 5 },
    { id: 55, name: "Tom Ford Lost Cherry", gender: "Women", file: "essesce products/L'eau de parfum Lost Cherry de TOM FORD est aussi tentante et amusante qu'un bonbon_ Ses effluves enivrants de cerise noire se mêlent à des notes d'amande amère_.png", price: 750, old: 5800, notes: ["Cherry", "Almond", "Sweet"], stock: 2 },
    { id: 56, name: "Pink Diamond Sakura", gender: "Women", file: "essesce products/Pink Diamond - Sakura 200ML by Ibrahim Al Qurashi _ Elegant Floral Fragrance with Long-Lasting Freshness - عطر بينك دايموند - ساكورا 200 مل من إبراهيم القرشي _ لمسة زهرية راقية وثبات يدوم طويلاً.png", price: 750, old: 3100, notes: ["Floral", "Fresh", "Sweet"], stock: 3 }
];

function getCart() { return JSON.parse(localStorage.getItem('eccence_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('eccence_cart', JSON.stringify(cart)); document.dispatchEvent(new CustomEvent('cartUpdated')); }
function addToCart(product) { const cart = getCart(); cart.push(product); saveCart(cart); }
function removeFromCart(index) { const cart = getCart(); cart.splice(index, 1); saveCart(cart); }
function clearCart() { localStorage.removeItem('eccence_cart'); document.dispatchEvent(new CustomEvent('cartUpdated')); }
function toggleGiftWrap(status) { localStorage.setItem('eccence_gift_wrap', status); }
function isGiftWrapEnabled() { return localStorage.getItem('eccence_gift_wrap') === 'true'; }

const translations = {
    en: {
        nav_home: "Home", nav_archive: "The Archive", nav_collections: "Collections", nav_journal: "Journal",
        mega_men: "For Men", mega_women: "For Women", mega_unisex: "Unisex", mega_about: "Heritage",
        hero_tag: "Defining Luxury Since 1992", hero_title: "A Symphony of Invisible Elegance", hero_cta: "Explore Archive",
        archive_tag: "Curated Collections", archive_title: "The Fragrance Vault", filter_all: "All", filter_men: "Men",
        filter_women: "Women", filter_unisex: "Unisex", cart_title: "Your Acquisitions", total: "Total Value",
        checkout: "Initiate Checkout", gift_wrap: "Luxury Gift Wrapping Protocol", stock: "units remaining",
        back: "Back", search_placeholder: "Seek a fragrance...", newsletter_title: "Join the Inner Circle",
        newsletter_desc: "Receive access to exclusive batches and olfactory insights.", newsletter_btn: "Subscribe",
        concierge_welcome: "Welcome. How may we assist your journey?", concierge_input: "Inquire here...",
        concierge_send: "Send", quiz_title: "Olfactory Profiling", quiz_desc: "Select your desired environment:",
        quiz_option_dark: "Moonlit Gala", quiz_option_fresh: "Azure Coast", quiz_option_exec: "Executive Suite",
        quiz_option_sweet: "Royal Garden", quiz_recommend: "Your Olfactory Soulmate:", quiz_acquire: "Acquire Now",
        announcement: "Complementary International Shipping on Acquisitions Over 5000 EGP", wishlist_title: "Wishlist Vault"
    },
    ar: {
        nav_home: "الرئيسية", nav_archive: "الأرشيف", nav_collections: "المجموعات", nav_journal: "المجلة",
        mega_men: "للرجال", mega_women: "للنساء", mega_unisex: "للجنسين", mega_about: "التراث",
        hero_tag: "تعريف الفخامة منذ عام 1992", hero_title: "سمفونية من الأناقة غير المرئية", hero_cta: "استكشف الأرشيف",
        archive_tag: "مجموعات مختارة", archive_title: "قبو العطور", filter_all: "الكل", filter_men: "رجال",
        filter_women: "نساء", filter_unisex: "للجنسين", cart_title: "مقتنياتك", total: "القيمة الإجمالية",
        checkout: "بدء عملية الدفع", gift_wrap: "تغليف الهدايا الفاخر", stock: "قطعة متبقية",
        back: "رجوع", search_placeholder: "ابحث عن عطر...", newsletter_title: "انضم إلى الدائرة الداخلية",
        newsletter_desc: "احصل على وصول إلى دفعات حصرية ورؤى عطرية.", newsletter_btn: "اشتراك",
        concierge_welcome: "مرحباً بك. كيف يمكننا مساعدتك في رحلتك؟", concierge_input: "استفسر هنا...",
        concierge_send: "إرسال", quiz_title: "التنميط الشمي", quiz_desc: "اختر البيئة المفضلة لديك:",
        quiz_option_dark: "حفل ضوء القمر", quiz_option_fresh: "الساحل اللازوردي", quiz_option_exec: "جناح تنفيذي",
        quiz_option_sweet: "الحديقة الملكية", quiz_recommend: "رفيق روحك العطري:", quiz_acquire: "اقتني الآن",
        announcement: "شحن دولي مجاني للمقتنيات التي تزيد عن 5000 جنيه مصري", wishlist_title: "قبو الأمنيات"
    }
};

function getLang() { return localStorage.getItem('eccence_lang') || 'en'; }
function t(key) { return translations[getLang()][key] || key; }
function getRecentlyViewed() { return JSON.parse(localStorage.getItem('eccence_recent') || '[]'); }
function addToRecentlyViewed(product) {
    let recent = getRecentlyViewed();
    recent = recent.filter(p => p.id !== product.id);
    recent.unshift(product);
    recent = recent.slice(0, 4);
    localStorage.setItem('eccence_recent', JSON.stringify(recent));
}
