/* =========================================================

   BG'S KITCHEN

   CLEAN MENU + CART + WHATSAPP

========================================================= */

const WHATSAPP_NUMBER = "6287868194937";

const CART_KEY = "bgs_kitchen_cart";
const CART_TIME_KEY = "bgs_kitchen_cart_time";

// Cart otomatis hilang setelah 30 menit
const CART_EXPIRY = 30 * 60 * 1000;

// State untuk pilihan jumlah topping Seblak
let activeSeblakId = null;
let activeSeblakLevel = 0;
let seblakToppingQuantities = {};


/* =========================================================
   DATA MENU
========================================================= */

const menu = [

    // =========================
    // ICE CREAM
    // =========================

    { id: 1, name: "Es Potong Black Forest", category: "ice cream", price: 5000, description: "Es potong rasa black forest yang creamy dan manis." },
    { id: 2, name: "Es Potong Blueberry", category: "ice cream", price: 5000, description: "Es potong rasa blueberry yang segar dan creamy." },
    { id: 3, name: "Es Potong Bubblegum", category: "ice cream", price: 5000, description: "Es potong rasa bubblegum manis dengan sensasi playful." },
    { id: 4, name: "Es Potong Cappuccino", category: "ice cream", price: 5000, description: "Es potong dengan rasa cappuccino yang creamy." },
    { id: 5, name: "Es Potong Cheese", category: "ice cream", price: 5000, description: "Es potong rasa cheese yang gurih dan creamy." },
    { id: 6, name: "Es Potong Coklat", category: "ice cream", price: 5000, description: "Es potong rasa coklat yang creamy dan klasik." },
    { id: 7, name: "Es Potong Durian", category: "ice cream", price: 5000, description: "Es potong dengan rasa durian yang khas dan creamy." },
    { id: 8, name: "Es Potong Mangga", category: "ice cream", price: 5000, description: "Es potong rasa mangga yang manis dan segar." },
    { id: 9, name: "Es Potong Matcha", category: "ice cream", price: 5000, description: "Es potong dengan rasa matcha yang khas dan creamy." },
    { id: 10, name: "Es Potong Milo", category: "ice cream", price: 5000, description: "Es potong rasa Milo yang manis dan creamy." },
    { id: 11, name: "Es Potong Oreo", category: "ice cream", price: 5000, description: "Es potong dengan rasa Oreo yang creamy dan nikmat." },
    { id: 12, name: "Es Potong Red Velvet", category: "ice cream", price: 5000, description: "Es potong rasa red velvet yang lembut dan creamy." },
    { id: 13, name: "Es Potong Strawberry", category: "ice cream", price: 5000, description: "Es potong rasa strawberry yang manis dan creamy." },
    { id: 14, name: "Es Potong Tiramisu", category: "ice cream", price: 5000, description: "Es potong rasa tiramisu yang creamy dan nikmat." },
    { id: 15, name: "Es Potong Vanilla", category: "ice cream", price: 5000, description: "Es potong rasa vanilla yang lembut dan creamy." },
    { id: 16, name: "Es Krim Gabin", category: "ice cream", price: 10000, description: "Perpaduan gabin renyah dan es krim." },

    // =========================
    // DIMSUM
    // =========================

    { id: 17, name: "Dimsum Kecil Original", category: "dimsum", price: 10000, description: "Dimsum kecil original, isi 6 pcs." },
    { id: 18, name: "Dimsum Kecil Bakar", category: "dimsum", price: 12000, description: "Dimsum kecil dengan sentuhan bakar, isi 5 pcs." },
    { id: 19, name: "Dimsum Kecil Mentai", category: "dimsum", price: 12000, description: "Dimsum kecil dengan saus mentai, isi 5 pcs." },
    { id: 20, name: "Dimsum Besar Original", category: "dimsum", price: 12000, description: "Dimsum besar original, isi 4 pcs." },
    { id: 21, name: "Dimsum Besar Bakar", category: "dimsum", price: 15000, description: "Dimsum besar dengan aroma bakar, isi 4 pcs." },
    { id: 22, name: "Dimsum Besar Mentai", category: "dimsum", price: 15000, description: "Dimsum besar dengan saus mentai, isi 4 pcs." },
    { id: 23, name: "Dimsum Frozen", category: "dimsum", price: 35000, description: "Dimsum frozen isi 10 pcs." },
    { id: 24, name: "Wonton", category: "dimsum", price: 20000, description: "Wonton gurih dan lezat, isi 6 pcs." },

    // =========================
    // SNACK
    // =========================

    { id: 25, name: "Bakso Bakar Celuup", category: "snack", price: 10000, description: "Bakso bakar gurih dengan saus cocol." },
    { id: 26, name: "Gohyong", category: "snack", price: 13000, description: "Gohyong gurih dan crispy, isi 10 pcs." },
    { id: 27, name: "Mix Plater", category: "snack", price: 13000, description: "Kentang, sosis dan nugget dalam satu platter." },
    { id: 28, name: "Tahu Walik", category: "snack", price: 13000, description: "Tahu walik gurih dan renyah, isi 20 pcs." },

    // =========================
    // DRINKS
    // =========================

    { id: 29, name: "Lemon Tea", category: "drinks", price: 4000, description: "Perpaduan teh dan lemon yang menyegarkan." },
    { id: 30, name: "Teh Original", category: "drinks", price: 4000, description: "Teh klasik untuk menemani makananmu." },
    { id: 31, name: "Jasmine Tea", category: "drinks", price: 5000, description: "Aroma jasmine yang ringan dan menyegarkan." },
    { id: 32, name: "Lychee Tea", category: "drinks", price: 5000, description: "Teh dengan rasa lychee yang manis." },
    { id: 33, name: "Matcha", category: "drinks", price: 5000, description: "Minuman matcha dengan rasa khas." },
    { id: 34, name: "Jeruk Peras", category: "drinks", price: 5000, description: "Jeruk peras segar dan menyegarkan." },
    { id: 35, name: "Sunkist", category: "drinks", price: 7000, description: "Minuman jeruk sunkist yang fresh." },
    { id: 36, name: "Sunkist Fizz", category: "drinks", price: 9000, description: "Sunkist dengan sensasi sparkling." },
    { id: 37, name: "Sunkist Squash", category: "drinks", price: 11000, description: "Sunkist squash yang fresh dan manis." },
    { id: 38, name: "Susu Murni", category: "drinks", price: 5000, description: "Susu murni dengan rasa creamy." },
    { id: 39, name: "Susu Rempah", category: "drinks", price: 12000, description: "Susu hangat dengan perpaduan rempah." },
    { id: 40, name: "Susu Uwuh", category: "drinks", price: 10000, description: "Minuman susu dengan racikan rempah." },
    { id: 41, name: "Wedang Uwuh", category: "drinks", price: 10000, description: "Minuman tradisional kaya rempah." },
    { id: 42, name: "Wedang Telang", category: "drinks", price: 10000, description: "Minuman telang dengan cita rasa unik." },
    { id: 43, name: "Wedang Temulawak", category: "drinks", price: 10000, description: "Minuman hangat berbahan temulawak." },

    // =========================
    // SACHET DRINKS
    // =========================

    {
        id: 44,
        name: "Nutrisari",
        category: "sachet drinks",
        price: 5000,
        variants: ["Lemon Tea", "Nanas", "Kelapa", "Mangga Gandaria", "Sweet Orange", "Cincau", "Milky Orange"],
        description: "Minuman Nutrisari dengan pilihan rasa segar."
    },
    {
        id: 45,
        name: "Pop Ice",
        category: "sachet drinks",
        price: 5000,
        variants: ["Mangga", "Anggur", "Durian", "Matcha Cookies", "Matcha Caramel", "Permen Karet", "Grape Muscat Candy", "Lychee", "Cream Cheese", "Bubble Gum", "Cotton Candy", "Cokelat", "Marie Biscuit"],
        description: "Minuman Pop Ice dengan beragam pilihan rasa."
    },
    {
        id: 46,
        name: "Dancow",
        category: "sachet drinks",
        price: 6000,
        variants: ["Cokelat", "Putih"],
        description: "Minuman susu Dancow dengan pilihan varian."
    },
    {
        id: 47,
        name: "Chocolatos",
        category: "sachet drinks",
        price: 5000,
        description: "Minuman cokelat Chocolatos."
    },
    {
        id: 48,
        name: "Good Day",
        category: "sachet drinks",
        price: 5000,
        variants: ["Mocacinno", "Coolin", "Vanilla Latte", "Chococinno", "Carrebian Nut", "Latte", "Freeze", "Cappuccino"],
        description: "Kopi Good Day dengan pilihan varian."
    },
    {
        id: 49,
        name: "Milo",
        category: "sachet drinks",
        price: 6000,
        description: "Minuman cokelat malt Milo."
    },
    {
        id: 50,
        name: "Ovaltine",
        category: "sachet drinks",
        price: 5000,
        description: "Minuman cokelat malt Ovaltine."
    },
    {
        id: 51,
        name: "Mix Tea",
        category: "sachet drinks",
        price: 5000,
        description: "Minuman teh sachet."
    },
    {
        id: 52,
        name: "Zenlatte Matcha",
        category: "sachet drinks",
        price: 5000,
        description: "Minuman matcha sachet."
    },
    {
        id: 53,
        name: "Frisian Flag",
        category: "sachet drinks",
        price: 5000,
        variants: ["Cokelat", "Putih"],
        description: "Minuman susu Frisian Flag dengan pilihan varian."
    },
    {
        id: 54,
        name: "ABC",
        category: "sachet drinks",
        price: 5000,
        variants: ["Susu", "Klepon"],
        description: "Minuman sachet ABC dengan pilihan varian."
    },
    {
        id: 55,
        name: "Indocafe",
        category: "sachet drinks",
        price: 5000,
        description: "Kopi sachet Indocafe."
    },
    {
        id: 56,
        name: "Kapal Api",
        category: "sachet drinks",
        price: 4000,
        description: "Kopi sachet Kapal Api."
    },

    // =========================
    // FRESH DRINKS & SIGNATURE
    // =========================

    { id: 57, name: "Jus Durian", category: "drinks", price: 15000, description: "Jus durian dengan rasa khas dan creamy." },
    { id: 58, name: "Mango Sago", category: "drinks", price: 10000, description: "Minuman mangga dengan sago yang lembut." },
    { id: 59, name: "Jus Alpukat", category: "drinks", price: 10000, description: "Jus alpukat yang lembut dan creamy." },
    { id: 60, name: "Jus Terong Belanda", category: "drinks", price: 10000, description: "Jus terong belanda dengan rasa segar." },
    { id: 61, name: "Jus Sirsak", category: "drinks", price: 10000, description: "Jus sirsak yang segar." },
    { id: 62, name: "Jus Jambu Merah", category: "drinks", price: 9000, description: "Jus jambu merah yang manis dan segar." },
    { id: 63, name: "Jus Buah Naga", category: "drinks", price: 8000, description: "Jus buah naga yang segar." },
    { id: 64, name: "Jus Strawberry", category: "drinks", price: 8000, description: "Jus strawberry dengan rasa manis dan segar." },
    { id: 65, name: "Jus Mangga", category: "drinks", price: 7000, description: "Jus mangga yang manis dan segar." },
    { id: 66, name: "Cappuccino Cincau", category: "drinks", price: 5000, description: "Perpaduan cappuccino dan cincau." },

    // =========================
    // SNACK TAMBAHAN
    // =========================

    {
        id: 67,
        name: "Seblak",
        category: "snack",
        price: 10000,
        toppingOptions: [
            { name: "Fish Roll", price: 3000 },
            { name: "Dumpling Keju", price: 2500 },
            { name: "Kotak Ikan", price: 2500 },
            { name: "Bakso Putih", price: 2500 },
            { name: "Bakso Merah", price: 2500 },
            { name: "Chikuwa", price: 2000 },
            { name: "Crab Stick", price: 2000 },
            { name: "Mie", price: 2000 }
        ],
        description: "Seblak original dengan pilihan topping tambahan."
    },
    {
        id: 68,
        name: "Sosis Bakar Besar",
        category: "snack",
        price: 10000,
        description: "Sosis bakar ukuran besar dengan saus pilihan."
    }
];


/* =========================================================
   TOPPING ES POTONG
========================================================= */

const toppings = [
    "Nyam-Nyam",
    "Meses Coklat",
    "Meses Pink",
    "Kacang",
    "Choco Chips Coklat",
    "Choco Chips Rainbow",
    "Milo Powder"
];

const TOPPING_PRICE = 1000;


/* =========================================================
   STATE
========================================================= */

let currentCategory = "all";
let cart = loadCart();


/* =========================================================
   ELEMENT
========================================================= */

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");

const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const closeCartBtn = document.getElementById("closeCart");
const orderBtn = document.getElementById("orderBtn");

const toast = document.getElementById("toast");
const topBtn = document.getElementById("topBtn");

/* =========================================================
   FORMAT RUPIAH
========================================================= */

function formatRupiah(number) {
    number = Number(number);

    if (!Number.isFinite(number)) {
        number = 0;
    }

    return "Rp " + number.toLocaleString("id-ID");
}


/* =========================================================
   LOAD CART
========================================================= */

function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_KEY);
        const savedTime = localStorage.getItem(CART_TIME_KEY);

        if (!savedCart || !savedTime) {
            return [];
        }

        const cartTime = Number(savedTime);
        const now = Date.now();

        if (
            !Number.isFinite(cartTime) ||
            now - cartTime > CART_EXPIRY
        ) {
            localStorage.removeItem(CART_KEY);
            localStorage.removeItem(CART_TIME_KEY);
            return [];
        }

        const parsed = JSON.parse(savedCart);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.map(item => {
            const product = menu.find(
                menuItem => menuItem.id === Number(item.id)
            );

            const qty = Math.floor(Number(item.qty));

            if (!product || !Number.isFinite(qty) || qty <= 0) {
                return null;
            }

            const variant = Array.isArray(product.variants) &&
                product.variants.includes(item.variant)
                ? item.variant
                : null;

            const allowedToppings = Array.isArray(product.toppingOptions)
                ? product.toppingOptions.map(option => option.name)
                : product.id <= 15
                    ? toppings
                    : [];

            const selectedToppings = Array.isArray(item.toppings)
                ? item.toppings.filter(name => allowedToppings.includes(name))
                : [];

            const extra = selectedToppings.reduce((sum, name) => {
                if (Array.isArray(product.toppingOptions)) {
                    const option = product.toppingOptions.find(
                        entry => entry.name === name
                    );

                    return sum + (option ? option.price : 0);
                }

                return sum + TOPPING_PRICE;
            }, 0);

            const cartItemId = item.cartItemId ||
                (variant
                    ? `${product.id}-variant-${variant}`
                    : selectedToppings.length
                        ? `${product.id}-topping-${selectedToppings.slice().sort().join("|")}`
                        : String(product.id));

            return {
                ...product,
                cartItemId,
                price: product.price + extra,
                originalPrice: product.price,
               variant,
toppings: selectedToppings,
spicyLevel: product.id === 67
    ? Math.max(0, Math.min(5, Number(item.spicyLevel) || 0))
    : null,
qty
            };
        }).filter(Boolean);

    } catch (error) {
        console.log("Cart error:", error);

        localStorage.removeItem(CART_KEY);
        localStorage.removeItem(CART_TIME_KEY);

        return [];
    }
}


/* =========================================================
   TOUCH CART TIMER
========================================================= */

function touchCart() {
    localStorage.setItem(
        CART_TIME_KEY,
        Date.now().toString()
    );
}


/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {
    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );
}


/* =========================================================
   DISPLAY MENU
========================================================= */

function displayMenu() {
    if (!menuGrid) return;

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filteredMenu = menu.filter(item => {
        const categoryMatch =
            currentCategory === "all" ||
            item.category === currentCategory;

        const searchMatch =
            item.name.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
            (Array.isArray(item.variants) &&
                item.variants.some(variant =>
                    variant.toLowerCase().includes(search)
                ));

        return categoryMatch && searchMatch;
    });

    if (filteredMenu.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-menu">
                <h3>Menu tidak ditemukan</h3>
                <p>Coba cari dengan kata kunci lain.</p>
            </div>
        `;
        return;
    }

    menuGrid.innerHTML = filteredMenu
        .map(createMenuCard)
        .join("");
}


/* =========================================================
   MENU CARD
========================================================= */

function createMenuCard(item) {
    let addAction;

    if (item.id >= 1 && item.id <= 15) {
        addAction = `openToppingModal(${item.id})`;
    } else if (item.variants) {
        addAction = `openVariantModal(${item.id})`;
    } else if (item.toppingOptions) {
        addAction = `openSeblakModal(${item.id})`;
    } else {
        addAction = `addToCart(${item.id})`;
    }

    return `
        <article class="menu-card">
            <div class="menu-card-content">
                <div class="menu-symbol">
                    ${getMenuIcon(item.category)}
                </div>

                <span class="menu-category">
                    ${item.category}
                </span>

                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>

            <div class="menu-bottom">
                <span class="price">
                    ${formatRupiah(item.price)}
                </span>

                <button
                    class="add-btn"
                    type="button"
                    onclick="${addAction}"
                >
                    +
                </button>
            </div>
        </article>
    `;
}


/* =========================================================
   ICON
========================================================= */

function getMenuIcon(category) {
    if (category === "ice cream") return "✦";
    if (category === "dimsum") return "◎";
    if (category === "snack") return "◆";
    if (category === "drinks") return "◌";
    if (category === "sachet drinks") return "◉";

    return "✦";
}


/* =========================================================
   TOPPING MODAL ES POTONG
========================================================= */

function openToppingModal(id) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) return;

    const oldModal = document.getElementById("toppingModal");

    if (oldModal) oldModal.remove();

    const modal = document.createElement("div");

    modal.id = "toppingModal";
    modal.className = "topping-modal-overlay";

    modal.innerHTML = `
        <div class="topping-modal">
            <button
                class="topping-close"
                type="button"
                onclick="closeToppingModal()"
            >
                ×
            </button>

            <span class="eyebrow">ES POTONG</span>

            <h2>${product.name}</h2>

            <p class="topping-subtitle">
                Pilih topping sesuai selera
            </p>

            <div class="topping-list">
                ${toppings.map(topping => `
                    <label class="topping-option">
                        <input
                            type="checkbox"
                            name="topping"
                            value="${topping}"
                            onchange="updateToppingPrice(${product.id})"
                        >

                        <span class="topping-name">
                            ${topping}
                        </span>

                        <span class="topping-price">
                            +Rp1.000
                        </span>
                    </label>
                `).join("")}
            </div>

            <div class="topping-summary">
                <div>
                    <span>Harga Dasar</span>
                    <strong>${formatRupiah(product.price)}</strong>
                </div>

                <div>
                    <span>Jumlah Topping</span>
                    <strong id="toppingCount">0</strong>
                </div>

                <div class="topping-total">
                    <span>Total</span>
                    <strong id="toppingTotal">
                        ${formatRupiah(product.price)}
                    </strong>
                </div>
            </div>

            <button
                class="topping-add-btn"
                type="button"
                onclick="addIceCreamToCart(${product.id})"
            >
                Tambahkan ke Keranjang
                <span>→</span>
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}


/* =========================================================
   UPDATE TOPPING PRICE ES POTONG
========================================================= */

function updateToppingPrice(id) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) return;

    const selected = document.querySelectorAll(
        '#toppingModal input[name="topping"]:checked'
    );

    const toppingCount = selected.length;

    const toppingTotal =
        product.price + (toppingCount * TOPPING_PRICE);

    const countElement = document.getElementById("toppingCount");
    const totalElement = document.getElementById("toppingTotal");

    if (countElement) {
        countElement.textContent = toppingCount;
    }

    if (totalElement) {
        totalElement.textContent = formatRupiah(toppingTotal);
    }
}


/* =========================================================
   ADD ES POTONG + TOPPING TO CART
========================================================= */

function addIceCreamToCart(id) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) return;

    const selected = Array.from(
        document.querySelectorAll(
            '#toppingModal input[name="topping"]:checked'
        )
    ).map(input => input.value);

    const toppingPrice = selected.length * TOPPING_PRICE;
    const finalPrice = product.price + toppingPrice;

    const cartItemId =
        `${product.id}-topping-${selected.slice().sort().join("|")}`;

    const existing = cart.find(
        item => item.cartItemId === cartItemId
    );

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            ...product,
            cartItemId,
            price: finalPrice,
            originalPrice: product.price,
            toppings: selected,
            qty: 1
        });
    }

    saveCart();
    touchCart();
    updateCart();

    closeToppingModal();

    showToast(`${product.name} ditambahkan ✓`);
}


/* =========================================================
   CLOSE TOPPING MODAL
========================================================= */

function closeToppingModal() {
    const modal = document.getElementById("toppingModal");

    if (modal) modal.remove();
}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id, variant = null, selectedToppings = [], spicyLevel = null) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) {
        showToast("Menu tidak ditemukan");
        return;
    }

    const extra = selectedToppings.reduce((sum, name) => {
        if (Array.isArray(product.toppingOptions)) {
            const option = product.toppingOptions.find(
                entry => entry.name === name
            );

            return sum + (option ? option.price : 0);
        }

        return sum + TOPPING_PRICE;
    }, 0);

    const cartItemId = variant
    ? `${product.id}-variant-${variant}`
    : product.id === 67
        ? `${product.id}-level-${spicyLevel ?? 0}-topping-${selectedToppings.slice().sort().join("|")}`
        : selectedToppings.length
            ? `${product.id}-topping-${selectedToppings.slice().sort().join("|")}`
            : String(product.id);

    const existing = cart.find(
        item => item.cartItemId === cartItemId
    );

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            ...product,
            cartItemId,
            price: product.price + extra,
            originalPrice: product.price,
            variant,
            toppings: selectedToppings, 
            spicyLevel: product.id === 67 ? (spicyLevel ?? 0) : null,
            qty: 1
        
        });
    }

    saveCart();
    touchCart();
    updateCart();

    showToast(`${product.name} ditambahkan ✓`);
}


/* =========================================================
   VARIANT MODAL
========================================================= */

function openVariantModal(id) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product || !Array.isArray(product.variants)) return;

    const oldModal = document.getElementById("variantModal");

    if (oldModal) oldModal.remove();

    const modal = document.createElement("div");

    modal.id = "variantModal";
    modal.className = "topping-modal-overlay";

    modal.innerHTML = `
        <div class="topping-modal">
            <button
                class="topping-close"
                type="button"
                onclick="closeVariantModal()"
            >
                ×
            </button>

            <span class="eyebrow">PILIH VARIAN</span>

            <h2>${product.name}</h2>

            <p class="topping-subtitle">
                Pilih rasa favoritmu
            </p>

            <div class="topping-list">
                ${product.variants.map((variant, index) => `
                    <label class="topping-option">
                        <input
                            type="radio"
                            name="productVariant"
                            value="${variant}"
                            ${index === 0 ? "checked" : ""}
                        >

                        <span class="topping-name">
                            ${variant}
                        </span>
                    </label>
                `).join("")}
            </div>

            <div class="topping-summary">
                <div class="topping-total">
                    <span>Harga</span>
                    <strong>${formatRupiah(product.price)}</strong>
                </div>
            </div>

            <button
                class="topping-add-btn"
                type="button"
                onclick="addVariantToCart(${product.id})"
            >
                Tambahkan ke Keranjang
                <span>→</span>
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}


function closeVariantModal() {
    const modal = document.getElementById("variantModal");

    if (modal) modal.remove();
}


function addVariantToCart(id) {
    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) return;

    const selected = document.querySelector(
        '#variantModal input[name="productVariant"]:checked'
    );

    if (!selected) {
        showToast("Pilih varian terlebih dahulu");
        return;
    }

    addToCart(product.id, selected.value);
    closeVariantModal();
}


/* =========================================================
   SEBLAK MODAL
========================================================= */


/* =========================================================
   SEBLAK MODAL
========================================================= */


function openSeblakModal(id) {
    const product = menu.find(item => item.id === Number(id));
    if (!product || !Array.isArray(product.toppingOptions)) return;

    activeSeblakId = Number(id);
    activeSeblakLevel = 0;
    seblakToppingQuantities = {};

    product.toppingOptions.forEach((topping, index) => {
        seblakToppingQuantities[index] = 0;
    });

    const oldModal = document.getElementById("seblakModal");
    if (oldModal) oldModal.remove();

    const modal = document.createElement("div");
    modal.id = "seblakModal";
    modal.className = "topping-modal-overlay";

    modal.innerHTML = `
        <div class="topping-modal">
            <button class="topping-close" type="button"
                onclick="closeSeblakModal()">×</button>

            <span class="eyebrow">SEBLAK</span>
            <h2>${product.name}</h2>

            <p class="topping-subtitle">
                Seblak Original - ${formatRupiah(product.price)}
            </p>

            <h3>Pilih Level Pedas</h3>

            <div class="topping-list">
                ${[
                    "Tidak Pedas",
                    "Sedikit Pedas",
                    "Pedas Sedang",
                    "Pedas",
                    "Sangat Pedas",
                    "Extra Pedas"
                ].map((level, index) => `
                    <label class="topping-option">
                        <input
                            type="radio"
                            name="seblakLevel"
                            value="${index}"
                            ${index === 0 ? "checked" : ""}
                            onchange="updateSeblakLevel(this.value)"
                        >
                        <span class="topping-name">
                            Level ${index} - ${level}
                        </span>
                    </label>
                `).join("")}
            </div>

            <h3>Pilih Topping</h3>

            <div class="topping-list">
                ${product.toppingOptions.map((topping, index) => `
                    <div class="topping-option">
                        <div class="topping-name">
                            <strong>${topping.name}</strong>
                            <span>+${formatRupiah(topping.price)}</span>
                        </div>

                        <div class="qty">
                            <button type="button"
                                onclick="changeSeblakToppingQty(${index}, -1)">−</button>

                            <strong id="seblakQty${index}">0</strong>

                            <button type="button"
                                onclick="changeSeblakToppingQty(${index}, 1)">+</button>
                        </div>
                    </div>
                `).join("")}
            </div>

            <div class="topping-summary">
                <div>
                    <span>Total Harga</span>
                    <strong class="topping-total" id="seblakTotal">
                        ${formatRupiah(product.price)}
                    </strong>
                </div>
            </div>

            <button class="topping-add-btn" type="button"
                onclick="addSeblakToCart()">
                Tambahkan ke Keranjang <span>→</span>
            </button>
        </div>
    `;

    document.body.appendChild(modal);
}

function updateSeblakLevel(level) {
    activeSeblakLevel = Number(level);
}


/* =========================================================
   CHANGE SEBLAK TOPPING QUANTITY
========================================================= */

function changeSeblakToppingQty(index, amount) {
    if (seblakToppingQuantities[index] === undefined) return;

    seblakToppingQuantities[index] = Math.max(
        0,
        seblakToppingQuantities[index] + Number(amount)
    );

    const qtyElement = document.getElementById(`seblakQty${index}`);

    if (qtyElement) {
        qtyElement.textContent = seblakToppingQuantities[index];
    }

    updateSeblakPrice();
}


/* =========================================================
   UPDATE SEBLAK PRICE
========================================================= */

function updateSeblakPrice() {
    const product = menu.find(item => item.id === activeSeblakId);
    if (!product) return;

    const extra = product.toppingOptions.reduce((sum, topping, index) => {
        return sum + topping.price * (seblakToppingQuantities[index] || 0);
    }, 0);

    const totalElement = document.getElementById("seblakTotal");

    if (totalElement) {
        totalElement.textContent = formatRupiah(product.price + extra);
    }
}


/* =========================================================
   ADD SEBLAK TO CART
========================================================= */

function addSeblakToCart() {
    const product = menu.find(item => item.id === activeSeblakId);
    if (!product) return;

    const selectedToppings = [];

    product.toppingOptions.forEach((topping, index) => {
        const quantity = seblakToppingQuantities[index] || 0;

        for (let i = 0; i < quantity; i++) {
            selectedToppings.push(topping.name);
        }
    });

    addToCart(
        product.id,
        null,
        selectedToppings,
        activeSeblakLevel
    );

    closeSeblakModal();
}


/* =========================================================
   CLOSE SEBLAK MODAL
========================================================= */

function closeSeblakModal() {
    const modal = document.getElementById("seblakModal");

    if (modal) modal.remove();

    activeSeblakId = null;
    activeSeblakLevel = 0;
    seblakToppingQuantities = {};
    
}

/* =========================================================
   FIND CART ITEM
========================================================= */

function findCartItem(id) {
    const key = String(id);

    return cart.find(
        item => String(item.cartItemId || item.id) === key
    );
}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQty(id, amount) {
    const item = findCartItem(id);

    if (!item) return;

    item.qty += Number(amount);

    if (item.qty <= 0) {
        cart = cart.filter(
            cartItem =>
                String(cartItem.cartItemId || cartItem.id) !== String(id)
        );
    }

    saveCart();
    touchCart();
    updateCart();
}


/* =========================================================
   REMOVE ITEM
========================================================= */

function removeFromCart(id) {
    const item = findCartItem(id);

    if (!item) return;

    cart = cart.filter(
        cartItem =>
            String(cartItem.cartItemId || cartItem.id) !== String(id)
    );

    saveCart();
    touchCart();
    updateCart();

    showToast("Menu dihapus");
}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {
    if (!cartItems) return;

    cart = cart.map(item => {
        const product = menu.find(
            menuItem => menuItem.id === Number(item.id)
        );

        const qty = Math.floor(Number(item.qty));

        if (!product || !Number.isFinite(qty) || qty <= 0) {
            return null;
        }

        const variant =
            Array.isArray(product.variants) &&
            product.variants.includes(item.variant)
                ? item.variant
                : null;

        const allowedToppings = Array.isArray(product.toppingOptions)
            ? product.toppingOptions.map(option => option.name)
            : product.id <= 15
                ? toppings
                : [];

        const selectedToppings = Array.isArray(item.toppings)
            ? item.toppings.filter(name => allowedToppings.includes(name))
            : [];

        const extra = selectedToppings.reduce((sum, name) => {
            if (Array.isArray(product.toppingOptions)) {
                const option = product.toppingOptions.find(
                    entry => entry.name === name
                );

                return sum + (option ? option.price : 0);
            }

            return sum + TOPPING_PRICE;
        }, 0);

        return {
            ...product,
            cartItemId: item.cartItemId || (
                variant
                    ? `${product.id}-variant-${variant}`
                    : selectedToppings.length
                        ? `${product.id}-topping-${selectedToppings.slice().sort().join("|")}`
                        : String(product.id)
            ),
            price: product.price + extra,
            originalPrice: product.price,
            variant,
            toppings: selectedToppings,
            qty
        };
    }).filter(Boolean);

    saveCart();

    const totalQty = cart.reduce(
        (total, item) => total + item.qty,
        0
    );

    const totalPrice = cart.reduce(
        (total, item) => total + (item.price * item.qty),
        0
    );

    if (cartCount) {
        cartCount.textContent = totalQty;
    }

    if (cartTotal) {
        cartTotal.textContent = formatRupiah(totalPrice);
    }

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Keranjang masih kosong</h3>
                <p>Pilih menu favoritmu untuk mulai memesan.</p>
            </div>
        `;

        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const subtotal = item.price * item.qty;

        const itemKey = String(item.cartItemId || item.id)
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'");

        const details = [];

        if (item.variant) {
            details.push(`Varian: ${item.variant}`);
        }

        if (Number(item.id) === 67) {
    details.push(`Level Pedas: Level ${item.spicyLevel ?? 0}`);
}

        if (Array.isArray(item.toppings) && item.toppings.length > 0) {
            details.push(`Topping: ${item.toppings.join(", ")}`);
        }

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>

                    ${details.map(detail => `
                        <div class="cart-toppings">${detail}</div>
                    `).join("")}

                    <span class="cart-price">
                        ${formatRupiah(item.price)}
                    </span>

                    <div class="qty">
                        <button
                            type="button"
                            onclick="changeQty('${itemKey}', -1)"
                        >
                            −
                        </button>

                        <strong>${item.qty}</strong>

                        <button
                            type="button"
                            onclick="changeQty('${itemKey}', 1)"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div class="cart-item-right">
                    <strong>${formatRupiah(subtotal)}</strong>

                    <button
                        class="remove-item"
                        type="button"
                        onclick="removeFromCart('${itemKey}')"
                    >
                        ×
                    </button>
                </div>
            </div>
        `;
    }).join("");
}


/* =========================================================
   FILTER
========================================================= */

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category || "all";

        displayMenu();
    });
});


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {
    searchInput.addEventListener(
        "input",
        displayMenu
    );
}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {
    if (cartPanel) {
        cartPanel.classList.add("show");
    }

    if (overlay) {
        overlay.classList.add("show");
    }

    updateCart();
}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {
    if (cartPanel) {
        cartPanel.classList.remove("show");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}


/* =========================================================
   CART EVENTS
========================================================= */

if (closeCartBtn) {
    closeCartBtn.addEventListener(
        "click",
        closeCart
    );
}

if (overlay) {
    overlay.addEventListener(
        "click",
        closeCart
    );
}


/* =========================================================
   WHATSAPP ORDER
========================================================= */

if (orderBtn) {
    orderBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Keranjang masih kosong");
            return;
        }

        let total = 0;

        let message =
            "Halo BG'S Kitchen 👋\n\n" +
            "Saya ingin pesan:\n\n";

        cart.forEach(item => {
            const subtotal = item.price * item.qty;

            total += subtotal;

            message += `• ${item.name}`;

            if (item.variant) {
                message += ` (${item.variant})`;
            }
            if (Number(item.id) === 67) {
                message += ` (Level Pedas ${item.spicyLevel ?? 0})`;
            }

            message += ` x${item.qty}\n`;

            if (Array.isArray(item.toppings) && item.toppings.length > 0) {
                message += "  Topping:\n";

                item.toppings.forEach(topping => {
                    let toppingPrice = TOPPING_PRICE;

                    const product = menu.find(
                        menuItem => menuItem.id === Number(item.id)
                    );

                    if (product && Array.isArray(product.toppingOptions)) {
                        const option = product.toppingOptions.find(
                            entry => entry.name === topping
                        );

                        toppingPrice = option ? option.price : 0;
                    }

                    message +=
                        `  - ${topping} (+${formatRupiah(toppingPrice)})\n`;
                });
            }

            message +=
                `  Subtotal: ${formatRupiah(subtotal)}\n\n`;
        });

        message += `Total: ${formatRupiah(total)}`;

        message +=
            "\n\nMohon diproses ya. Terima kasih 🙏";

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        // Kosongkan cart setelah klik WhatsApp
        cart = [];

        localStorage.removeItem(CART_KEY);
        localStorage.removeItem(CART_TIME_KEY);

        updateCart();
        closeCart();

        showToast("Pesanan diteruskan ke WhatsApp ✓");
    });
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}


/* =========================================================
   BACK TO TOP
========================================================= */

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================================
   START WEBSITE
========================================================= */

displayMenu();
updateCart();

console.log(
    "BG'S Kitchen website loaded successfully."
);