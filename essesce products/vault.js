// ECCENCE SHARED LOGIC & INVENTORY
const inventory = [
    { id: 1, name: "Acqua di Giò Profondo", gender: "Men", file: "Armani Beauty - Acqua di Giò Profondo - Eau de Parfum - Cologne for Men.png", price: 850, old: 1200, notes: ["Sea Notes", "Bergamot", "Fresh", "Executive"], stock: 3 },
    { id: 2, name: "Azzaro Most Wanted", gender: "Men", file: "Azzaro The Most Wanted Eau de Parfum Intense - Woody & Seductive Mens Cologne - Fougère, Ambery & Spicy Fragrance for Date Night - Lasting Wear - Luxury Perfumes for Men.png", price: 920, old: 1300, notes: ["Cardamom", "Toffee", "Sweet", "Dark"], stock: 5 },
    { id: 3, name: "Xerjoff Erba Pura", gender: "Unisex", file: "Erba Pura Eau de Parfum.png", price: 1050, old: 1500, notes: ["Orange", "Fruits", "Fresh"], stock: 2 },
    { id: 4, name: "JPG Le Male", gender: "Men", file: "Jean Paul Gaultier.png", price: 780, old: 1100, notes: ["Mint", "Vanilla", "Fresh"], stock: 8 },
    { id: 5, name: "JPG Scandal", gender: "Women", file: "Jean Paul Gaultier (1).png", price: 890, old: 1250, notes: ["Honey", "Blood Orange", "Sweet"], stock: 4 },
    { id: 6, name: "Kayali Vanilla 28", gender: "Women", file: "Kayali - Vanilla 28.png", price: 950, old: 1350, notes: ["Vanilla Orchid", "Brown Sugar", "Sweet"], stock: 6 },
    { id: 7, name: "Lattafa Art of Universe", gender: "Unisex", file: "Lattafa Art of Universe for Unisex Eau de Parfum Spray, 3_4 Ounce _ 100 ml.png", price: 720, old: 1000, notes: ["Spicy", "Amber", "Dark"], stock: 12 },
    { id: 8, name: "Lattafa Khamrah", gender: "Unisex", file: "Lattafa Khamrah - Vanilla, Warm Spicy, Amber, Cinnamon - Eau de Parfum Long-Lasting Fragrance for Unisex, 3_40 Ounce _ 100 ml.png", price: 810, old: 1150, notes: ["Cinnamon", "Dates", "Sweet"], stock: 10 },
    { id: 9, name: "LV Symphony", gender: "Unisex", file: "Products by Louis Vuitton_ Symphony.png", price: 1100, old: 1600, notes: ["Ginger", "Grapefruit", "Fresh", "Executive"], stock: 1 },
    { id: 10, name: "Valentino Donna", gender: "Women", file: "Valentino Donna Born in Roma Intense Eau de Parfum _ Dillard's.png", price: 980, old: 1400, notes: ["Black Currant", "Vanilla", "Sweet"], stock: 4 },
    { id: 11, name: "Valentino Uomo", gender: "Men", file: "Valentino Uomo Born in Roma Eau de Toilette with Violet & Vetiver.png", price: 870, old: 1200, notes: ["Mineral Notes", "Ginger", "Executive"], stock: 5 },
    { id: 12, name: "Xerjoff Alexandria II", gender: "Unisex", file: "Xerjoff - Eau de Parfum Alexandria II Parfum 100 ml Xerjoff.png", price: 1080, old: 1550, notes: ["Lavender", "Oud", "Dark", "Executive"], stock: 2 }
];

function getCart() {
    return JSON.parse(localStorage.getItem('eccence_cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('eccence_cart', JSON.stringify(cart));
    document.dispatchEvent(new CustomEvent('cartUpdated'));
}

function addToCart(product) {
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function clearCart() {
    localStorage.removeItem('eccence_cart');
    document.dispatchEvent(new CustomEvent('cartUpdated'));
}

// TRANSLATIONS
const translations = {
    en: {
        archive: "The Archive",
        vault: "Access Vault",
        acquisitions: "Acquisitions",
        total: "Total Value",
        checkout: "Initiate Checkout",
        enter_archive: "Enter The Archive",
        finder: "The Fragrance Finder",
        journal: "The Scent Journal",
        delivery: "Delivery Protocol",
        payment: "Payment Channel",
        finalize: "Finalize Acquisition",
        name: "Designation (Name)",
        address: "Shipping Coordinates (Address)",
        phone: "Contact Channel (Phone)",
        upload: "Upload Receipt",
        success: "Acquisition Initiated",
        return: "Return to Vault",
        stock: "units remaining in vault",
        explore: "Explore the Archive",
        back: "Back"
    },
    ar: {
        archive: "الأرشيف",
        vault: "دخول القبو",
        acquisitions: "المشتريات",
        total: "القيمة الإجمالية",
        checkout: "بدء الدفع",
        enter_archive: "دخول الأرشيف",
        finder: "مكتشف العطور",
        journal: "مجلة العطور",
        delivery: "بروتوكول التوصيل",
        payment: "قناة الدفع",
        finalize: "إتمام العملية",
        name: "الاسم",
        address: "إحداثيات الشحن (العنوان)",
        phone: "قناة التواصل (الهاتف)",
        upload: "رفع الإيصال",
        success: "تم بدء الطلب",
        return: "العودة للقبو",
        stock: "قطع متبقية في القبو",
        explore: "استكشف الأرشيف",
        back: "رجوع"
    }
};

function getLang() {
    return localStorage.getItem('eccence_lang') || 'en';
}

function setLang(lang) {
    localStorage.setItem('eccence_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.dispatchEvent(new CustomEvent('langChanged'));
}

function t(key) {
    return translations[getLang()][key] || key;
}

// Ensure RTL on load if needed
document.documentElement.dir = getLang() === 'ar' ? 'rtl' : 'ltr';

function getRecentlyViewed() {
    return JSON.parse(localStorage.getItem('eccence_recent') || '[]');
}

function addToRecentlyViewed(product) {
    let recent = getRecentlyViewed();
    recent = recent.filter(p => p.id !== product.id);
    recent.unshift(product);
    recent = recent.slice(0, 4);
    localStorage.setItem('eccence_recent', JSON.stringify(recent));
}
