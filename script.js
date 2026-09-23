/* =========================================================
   BG'S KITCHEN
   CLEAN MENU + CART + WHATSAPP
========================================================= */

const WHATSAPP_NUMBER = "6287868194937";

const CART_KEY = "bgs_kitchen_cart";
const CART_TIME_KEY = "bgs_kitchen_cart_time";

// Cart otomatis hilang setelah 30 menit
const CART_EXPIRY = 30 * 60 * 1000;


/* =========================================================
   DATA MENU
========================================================= */

const menu = [

    // =========================
    // ICE CREAM
    // =========================

    {
        id: 1,
        name: "Es Potong Black Forest",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa black forest yang creamy dan manis."
    },
    {
        id: 2,
        name: "Es Potong Blueberry",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa blueberry yang segar dan creamy."
    },
    {
        id: 3,
        name: "Es Potong Bubblegum",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa bubblegum manis dengan sensasi playful."
    },
    {
        id: 4,
        name: "Es Potong Cappuccino",
        category: "ice cream",
        price: 5000,
        description: "Es potong dengan rasa cappuccino yang creamy."
    },
    {
        id: 5,
        name: "Es Potong Cheese",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa cheese yang gurih dan creamy."
    },
    {
        id: 6,
        name: "Es Potong Coklat",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa coklat yang creamy dan klasik."
    },
    {
        id: 7,
        name: "Es Potong Durian",
        category: "ice cream",
        price: 5000,
        description: "Es potong dengan rasa durian yang khas dan creamy."
    },
    {
        id: 8,
        name: "Es Potong Mangga",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa mangga yang manis dan segar."
    },
    {
        id: 9,
        name: "Es Potong Matcha",
        category: "ice cream",
        price: 5000,
        description: "Es potong dengan rasa matcha yang khas dan creamy."
    },
    {
        id: 10,
        name: "Es Potong Milo",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa Milo yang manis dan creamy."
    },
    {
        id: 11,
        name: "Es Potong Oreo",
        category: "ice cream",
        price: 5000,
        description: "Es potong dengan rasa Oreo yang creamy dan nikmat."
    },
    {
        id: 12,
        name: "Es Potong Red Velvet",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa red velvet yang lembut dan creamy."
    },
    {
        id: 13,
        name: "Es Potong Strawberry",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa strawberry yang manis dan creamy."
    },
    {
        id: 14,
        name: "Es Potong Tiramisu",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa tiramisu yang creamy dan nikmat."
    },
    {
        id: 15,
        name: "Es Potong Vanilla",
        category: "ice cream",
        price: 5000,
        description: "Es potong rasa vanilla yang lembut dan creamy."
    },
    {
        id: 16,
        name: "Es Krim Gabin",
        category: "ice cream",
        price: 10000,
        description: "Perpaduan gabin renyah dan es krim."
    },

    // =========================
    // DIMSUM
    // =========================

    {
        id: 17,
        name: "Dimsum Kecil Original",
        category: "dimsum",
        price: 10000,
        description: "Dimsum kecil original, isi 6 pcs."
    },
    {
        id: 18,
        name: "Dimsum Kecil Bakar",
        category: "dimsum",
        price: 12000,
        description: "Dimsum kecil dengan sentuhan bakar, isi 5 pcs."
    },
    {
        id: 19,
        name: "Dimsum Kecil Mentai",
        category: "dimsum",
        price: 12000,
        description: "Dimsum kecil dengan saus mentai, isi 5 pcs."
    },
    {
        id: 20,
        name: "Dimsum Besar Original",
        category: "dimsum",
        price: 12000,
        description: "Dimsum besar original, isi 4 pcs."
    },
    {
        id: 21,
        name: "Dimsum Besar Bakar",
        category: "dimsum",
        price: 15000,
        description: "Dimsum besar dengan aroma bakar, isi 4 pcs."
    },
    {
        id: 22,
        name: "Dimsum Besar Mentai",
        category: "dimsum",
        price: 15000,
        description: "Dimsum besar dengan saus mentai, isi 4 pcs."
    },
    {
        id: 23,
        name: "Dimsum Frozen",
        category: "dimsum",
        price: 35000,
        description: "Dimsum frozen isi 10 pcs."
    },
    {
        id: 24,
        name: "Wonton",
        category: "dimsum",
        price: 20000,
        description: "Wonton gurih dan lezat, isi 6 pcs."
    },

    // =========================
    // SNACK
    // =========================

    {
        id: 25,
        name: "Bakso Bakar Celuup",
        category: "snack",
        price: 10000,
        description: "Bakso bakar gurih dengan saus cocol."
    },
    {
        id: 26,
        name: "Gohyong",
        category: "snack",
        price: 13000,
        description: "Gohyong gurih dan crispy, isi 10 pcs."
    },
    {
        id: 27,
        name: "Mix Plater",
        category: "snack",
        price: 13000,
        description: "Kentang, sosis dan nugget dalam satu platter."
    },
    {
        id: 28,
        name: "Tahu Walik",
        category: "snack",
        price: 13000,
        description: "Tahu walik gurih dan renyah, isi 20 pcs."
    },

    // =========================
    // DRINKS
    // =========================

    {
        id: 29,
        name: "Lemon Tea",
        category: "drinks",
        price: 4000,
        description: "Perpaduan teh dan lemon yang menyegarkan."
    },
    {
        id: 30,
        name: "Teh Original",
        category: "drinks",
        price: 4000,
        description: "Teh klasik untuk menemani makananmu."
    },
    {
        id: 31,
        name: "Jasmine Tea",
        category: "drinks",
        price: 5000,
        description: "Aroma jasmine yang ringan dan menyegarkan."
    },
    {
        id: 32,
        name: "Lychee Tea",
        category: "drinks",
        price: 5000,
        description: "Teh dengan rasa lychee yang manis."
    },
    {
        id: 33,
        name: "Matcha",
        category: "drinks",
        price: 5000,
        description: "Minuman matcha dengan rasa khas."
    },
    {
        id: 34,
        name: "Jeruk Peras",
        category: "drinks",
        price: 5000,
        description: "Jeruk peras segar dan menyegarkan."
    },
    {
        id: 35,
        name: "Sunkist",
        category: "drinks",
        price: 7000,
        description: "Minuman jeruk sunkist yang fresh."
    },
    {
        id: 36,
        name: "Sunkist Fizz",
        category: "drinks",
        price: 9000,
        description: "Sunkist dengan sensasi sparkling."
    },
    {
        id: 37,
        name: "Sunkist Squash",
        category: "drinks",
        price: 11000,
        description: "Sunkist squash yang fresh dan manis."
    },
    {
        id: 38,
        name: "Susu Murni",
        category: "drinks",
        price: 5000,
        description: "Susu murni dengan rasa creamy."
    },
    {
        id: 39,
        name: "Susu Rempah",
        category: "drinks",
        price: 12000,
        description: "Susu hangat dengan perpaduan rempah."
    },
    {
        id: 40,
        name: "Susu Uwuh",
        category: "drinks",
        price: 10000,
        description: "Minuman susu dengan racikan rempah."
    },
    {
        id: 41,
        name: "Wedang Uwuh",
        category: "drinks",
        price: 10000,
        description: "Minuman tradisional kaya rempah."
    },
    {
        id: 42,
        name: "Wedang Telang",
        category: "drinks",
        price: 10000,
        description: "Minuman telang dengan cita rasa unik."
    },
    {
        id: 43,
        name: "Wedang Temulawak",
        category: "drinks",
        price: 10000,
        description: "Minuman hangat berbahan temulawak."
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

        return parsed
            .map(item => {

                const product = menu.find(
                    menuItem =>
                        menuItem.id === Number(item.id)
                );

                const qty = Math.floor(Number(item.qty));

                if (
                    !product ||
                    !Number.isFinite(qty) ||
                    qty <= 0
                ) {
                    return null;
                }

                // Item dengan topping
                if (Array.isArray(item.toppings)) {

                    const toppingsSelected =
                        item.toppings.filter(
                            topping =>
                                toppings.includes(topping)
                        );

                    const finalPrice =
                        product.price +
                        (
                            toppingsSelected.length *
                            TOPPING_PRICE
                        );

                    return {
                        ...product,

                        cartItemId:
                            item.cartItemId ||
                            `${product.id}-${toppingsSelected.join("|")}`,

                        price: finalPrice,

                        originalPrice:
                            product.price,

                        toppings:
                            toppingsSelected,

                        toppingText:
                            toppingsSelected.length > 0
                                ? toppingsSelected.join(", ")
                                : "Tanpa Topping",

                        qty
                    };
                }

                // Item biasa
                return {
                    ...product,

                    cartItemId:
                        item.cartItemId ||
                        String(product.id),

                    qty
                };

            })
            .filter(Boolean);

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

    if (!menuGrid) {
        return;
    }

    const search = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filteredMenu = menu.filter(item => {

        const categoryMatch =
            currentCategory === "all" ||
            item.category === currentCategory;

        const searchMatch =
            item.name.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search);

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

    const addAction =
        item.id <= 15
            ? `openToppingModal(${item.id})`
            : `addToCart(${item.id})`;

    return `
        <article class="menu-card">

            <div class="menu-card-content">

                <div class="menu-symbol">
                    ${getMenuIcon(item.category)}
                </div>

                <span class="menu-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

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

    if (category === "ice cream") {
        return "✦";
    }

    if (category === "dimsum") {
        return "◎";
    }

    if (category === "snack") {
        return "◆";
    }

    if (category === "drinks") {
        return "◌";
    }

    return "✦";
}


/* =========================================================
   TOPPING MODAL
========================================================= */

function openToppingModal(id) {

    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) {
        return;
    }

    const oldModal =
        document.getElementById("toppingModal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal =
        document.createElement("div");

    modal.id = "toppingModal";
    modal.className =
        "topping-modal-overlay";

    modal.innerHTML = `
        <div class="topping-modal">

            <button
                class="topping-close"
                type="button"
                onclick="closeToppingModal()"
            >
                ×
            </button>

            <span class="eyebrow">
                ES POTONG
            </span>

            <h2>
                ${product.name}
            </h2>

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
                    <strong>
                        ${formatRupiah(product.price)}
                    </strong>
                </div>

                <div>
                    <span>Jumlah Topping</span>
                    <strong id="toppingCount">
                        0
                    </strong>
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
   UPDATE TOPPING PRICE
========================================================= */

function updateToppingPrice(id) {

    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) {
        return;
    }

    const selected =
        document.querySelectorAll(
            '#toppingModal input[name="topping"]:checked'
        );

    const toppingCount =
        selected.length;

    const toppingTotal =
        product.price +
        (
            toppingCount *
            TOPPING_PRICE
        );

    const countElement =
        document.getElementById("toppingCount");

    const totalElement =
        document.getElementById("toppingTotal");

    if (countElement) {
        countElement.textContent =
            toppingCount;
    }

    if (totalElement) {
        totalElement.textContent =
            formatRupiah(toppingTotal);
    }
}


/* =========================================================
   ADD ES POTONG + TOPPING TO CART
========================================================= */

function addIceCreamToCart(id) {

    const product = menu.find(
        item => item.id === Number(id)
    );

    if (!product) {
        return;
    }

    const selected =
        Array.from(
            document.querySelectorAll(
                '#toppingModal input[name="topping"]:checked'
            )
        ).map(
            input => input.value
        );

    const toppingPrice =
        selected.length *
        TOPPING_PRICE;

    const finalPrice =
        product.price +
        toppingPrice;

    const toppingText =
        selected.length > 0
            ? selected.join(", ")
            : "Tanpa Topping";

    const cartItemId =
        `${product.id}-${selected.join("|")}`;

    const existing =
        cart.find(
            item =>
                item.cartItemId === cartItemId
        );

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({

            ...product,

            cartItemId,

            price: finalPrice,

            originalPrice:
                product.price,

            toppings: selected,

            toppingText,

            qty: 1
        });
    }

    saveCart();
    touchCart();
    updateCart();

    closeToppingModal();

    showToast(
        `${product.name} ditambahkan ✓`
    );
}


/* =========================================================
   CLOSE TOPPING MODAL
========================================================= */

function closeToppingModal() {

    const modal =
        document.getElementById(
            "toppingModal"
        );

    if (modal) {
        modal.remove();
    }
}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {

    id = Number(id);

    const product =
        menu.find(
            item => item.id === id
        );

    if (!product) {

        showToast(
            "Menu tidak ditemukan"
        );

        return;
    }

    const existing =
        cart.find(
            item => item.id === id &&
                    !Array.isArray(item.toppings)
        );

    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({

            ...product,

            cartItemId:
                String(product.id),

            qty: 1
        });
    }

    saveCart();
    touchCart();
    updateCart();

    showToast(
        `${product.name} ditambahkan ✓`
    );
}


/* =========================================================
   FIND CART ITEM
========================================================= */

function findCartItem(id) {

    const key =
        String(id);

    return cart.find(
        item =>
            String(
                item.cartItemId || item.id
            ) === key
    );
}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQty(id, amount) {

    const item =
        findCartItem(id);

    if (!item) {
        return;
    }

    item.qty += Number(amount);

    if (item.qty <= 0) {

        cart = cart.filter(
            cartItem =>
                String(
                    cartItem.cartItemId ||
                    cartItem.id
                ) !== String(id)
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

    const item =
        findCartItem(id);

    if (!item) {
        return;
    }

    cart = cart.filter(
        cartItem =>
            String(
                cartItem.cartItemId ||
                cartItem.id
            ) !== String(id)
    );

    saveCart();
    touchCart();
    updateCart();

    showToast(
        "Menu dihapus"
    );
}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    if (!cartItems) {
        return;
    }

    cart = cart
        .map(item => {

            const product =
                menu.find(
                    menuItem =>
                        menuItem.id ===
                        Number(item.id)
                );

            const qty =
                Math.floor(
                    Number(item.qty)
                );

            if (
                !product ||
                !Number.isFinite(qty) ||
                qty <= 0
            ) {
                return null;
            }

            const hasToppings =
                Array.isArray(item.toppings);

            if (hasToppings) {

                const toppingsSelected =
                    item.toppings.filter(
                        topping =>
                            toppings.includes(topping)
                    );

                const finalPrice =
                    product.price +
                    (
                        toppingsSelected.length *
                        TOPPING_PRICE
                    );

                return {

                    ...product,

                    cartItemId:
                        item.cartItemId ||
                        `${product.id}-${toppingsSelected.join("|")}`,

                    price: finalPrice,

                    originalPrice:
                        product.price,

                    toppings:
                        toppingsSelected,

                    toppingText:
                        toppingsSelected.length > 0
                            ? toppingsSelected.join(", ")
                            : "Tanpa Topping",

                    qty
                };
            }

            return {

                ...product,

                cartItemId:
                    item.cartItemId ||
                    String(product.id),

                qty
            };

        })
        .filter(Boolean);

    saveCart();


    /* =========================
       TOTAL QTY
    ========================= */

    const totalQty =
        cart.reduce(
            (total, item) =>
                total + item.qty,
            0
        );


    /* =========================
       TOTAL HARGA
    ========================= */

    const totalPrice =
        cart.reduce(
            (total, item) =>
                total +
                (
                    item.price *
                    item.qty
                ),
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalQty;
    }


    if (cartTotal) {

        cartTotal.textContent =
            formatRupiah(
                totalPrice
            );
    }


    /* =========================
       EMPTY CART
    ========================= */

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Keranjang masih kosong
                </h3>

                <p>
                    Pilih menu favoritmu
                    untuk mulai memesan.
                </p>

            </div>
        `;

        return;
    }


    /* =========================
       CART ITEMS
    ========================= */

    cartItems.innerHTML =
        cart.map(item => {

            const subtotal =
                item.price *
                item.qty;

            const hasTopping =
                Array.isArray(
                    item.toppings
                ) &&
                item.toppings.length > 0;

            const itemKey =
                String(
                    item.cartItemId ||
                    item.id
                )
                .replace(/\\/g, "\\\\")
                .replace(/'/g, "\\'");

            return `
                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        ${
                            hasTopping
                                ? `
                                    <div class="cart-toppings">
                                        Topping:
                                        ${item.toppings.join(", ")}
                                    </div>
                                  `
                                : ""
                        }

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

                            <strong>
                                ${item.qty}
                            </strong>

                            <button
                                type="button"
                                onclick="changeQty('${itemKey}', 1)"
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <div class="cart-item-right">

                        <strong>
                            ${formatRupiah(subtotal)}
                        </strong>

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

    button.addEventListener(
        "click",
        () => {

            filters.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            currentCategory =
                button.dataset.category ||
                "all";

            displayMenu();
        }
    );

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

        cartPanel.classList.add(
            "show"
        );
    }

    if (overlay) {

        overlay.classList.add(
            "show"
        );
    }

    updateCart();
}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    if (cartPanel) {

        cartPanel.classList.remove(
            "show"
        );
    }

    if (overlay) {

        overlay.classList.remove(
            "show"
        );
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

    orderBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                showToast(
                    "Keranjang masih kosong"
                );

                return;
            }

            let total = 0;

            let message =
                "Halo BG'S Kitchen 👋\n\n" +
                "Saya ingin pesan:\n\n";


            cart.forEach(item => {

                const subtotal =
                    item.price *
                    item.qty;

                total += subtotal;


                if (
                    Array.isArray(item.toppings) &&
                    item.toppings.length > 0
                ) {

                    message +=
                        `• ${item.name} x${item.qty}\n`;

                    message +=
                        `  Topping:\n`;

                    item.toppings.forEach(
                        topping => {

                            message +=
                                `  - ${topping}\n`;
                        }
                    );

                    message +=
                        `  Subtotal: ${formatRupiah(subtotal)}\n\n`;

                } else {

                    message +=
                        `• ${item.name} x${item.qty} - ${formatRupiah(subtotal)}\n\n`;
                }

            });


            message +=
                `Total: ${formatRupiah(total)}`;

            message +=
                "\n\nMohon diproses ya. Terima kasih 🙏";


            const whatsappURL =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


            window.open(
                whatsappURL,
                "_blank"
            );


            // Kosongkan cart setelah klik WhatsApp
            cart = [];

            localStorage.removeItem(
                CART_KEY
            );

            localStorage.removeItem(
                CART_TIME_KEY
            );

            updateCart();

            closeCart();

            showToast(
                "Pesanan diteruskan ke WhatsApp ✓"
            );
        }
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2000
    );
}


/* =========================================================
   BACK TO TOP
========================================================= */

if (topBtn) {

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 500
            ) {

                topBtn.classList.add(
                    "show"
                );

            } else {

                topBtn.classList.remove(
                    "show"
                );
            }

        }
    );


    topBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
}


/* =========================================================
   START WEBSITE
========================================================= */

displayMenu();

updateCart();

console.log(
    "BG'S Kitchen website loaded successfully."
);