// ── PRODUCT DATA ─────────────────────────────────────────────
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 22999,
        category: "phones",
        image: "https://th.bing.com/th/id/R.e620582844f3c7ab51b35dcad732c912?rik=kMrVu3dF5D4pww&riu=http%3a%2f%2fdigitek.cl%2fcdn%2fshop%2ffiles%2fpbi-iphone-15-pro-max-1447353134.png%3fcrop%3dcenter%26height%3d1200%26v%3d1700683132%26width%3d1200&ehk=Q7zdDKL5XVV1%2f1EQfIYKXvunJC%2bmDHCERBRhZGPUVXI%3d&risl=&pid=ImgRaw&r=0",
        description: "A15 Pro chip, titanium build, and a pro camera system that raises the bar."
    },
    {
        id: 2,
        name: "MacBook Air 2022",
        price: 28999,
        category: "laptops",
        image: "https://th.bing.com/th/id/OIP.9pM1kxhssgN-nG6u5fj-xAHaFj?w=251&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Featherlight laptop with M2 chip — perfect for work and creativity on the go."
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 5999,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Active Noise Cancellation and Transparency mode in a compact wireless design."
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 18999,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.5pLTDO9E_LSYCTAAK3C64wHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Galaxy AI, a bold 6.2\" display, and a triple-lens camera that sees the detail."
    },
    {
        id: 5,
        name: "Dell Inspiron 15",
        price: 12999,
        category: "laptops",
        image: "https://tech.co.za/wp-content/uploads/2023/06/Inspiron-3520a.png",
        description: "Reliable everyday laptop with solid performance for work and study."
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 599,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.cJbtKKZbERFQBr5-_ftO7gHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Ergonomic wireless mouse designed for long sessions and full-day productivity."
    },
    {
        id: 7,
        name: "iPhone 16",
        price: 16999,
        category: "phones",
        image: "https://www.bing.com/th?id=OPEC.E3iJzbF5Hg6aRw474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        description: "Apple Intelligence, Camera Control button, and the A18 chip. A fresh start."
    },
    {
        id: 8,
        name: "iPhone 17 Pro Max",
        price: 30499,
        category: "phones",
        image: "https://www.bing.com/th?id=OPEC.yb6%2f2xLts4o6zQ474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        description: "The biggest Pro screen ever, A18 Pro chip, and a 5x telephoto camera."
    },
    {
        id: 9,
        name: "Samsung S25 Plus",
        price: 20499,
        category: "phones",
        image: "https://www.bing.com/th/id/OIP.AbVpNo9snSdb2gWIvassswHaD4?w=312&h=200&c=8&rs=1&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Snapdragon 8 Elite, stunning display, and Galaxy AI built in."
    },
    {
        id: 10,
        name: "Samsung S26 Ultra",
        price: 40000,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.Ervqbp_ZoxafMavf6n_WfAHaHa?w=105&h=108&c=7&qlt=90&bgcl=c02651&r=0&o=6&dpr=1.3&pid=13.1",
        description: "The ultimate Samsung — built-in S Pen, AI cameras, and pro-grade performance."
    },
    {
        id: 11,
        name: "HP Spectre x360 14",
        price: 55000,
        category: "laptops",
        image: "https://www.bing.com/th?id=OPEC.JkkMjm6O5GCsnA474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=1,3&o=2",
        description: "2-in-1 laptop with OLED display, built-in AI features, and a slim premium build."
    },
    {
        id: 12,
        name: "Samsung Galaxy Buds4",
        price: 3499,
        category: "accessories",
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/s2602/gallery/za-galaxy-buds4-r540-sm-r540nzwaxfa-thumb-550984777?$Q90_330_330_F_PNG$",
        description: "Adaptive ANC, 360 Audio, and seamless Galaxy device switching."
    },
    {
        id: 13,
        name: "Sony WH-CH720 Headphones",
        price: 2699,
        category: "accessories",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/222978508-1200-1600?v=639015738519300000&width=1200&height=1600&aspect=true",
        description: "Dual Noise Sensor technology and a lightweight design for all-day listening."
    },
    {
        id: 14,
        name: "Apple Watch Series 10",
        price: 11000,
        category: "accessories",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/220659820-1200-1600?v=638938586668200000&width=1200&height=1600&aspect=true",
        description: "Thinnest Apple Watch ever, with a bigger display and up to 18-hour battery life."
    },
    {
        id: 15,
        name: "Galaxy Watch Ultra",
        price: 15000,
        category: "accessories",
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/f2507/gallery/za-galaxy-watch-ultra-2025-l705-sm-l705fzb1xfa-547647313?$1164_776_PNG$",
        description: "Titanium build, 10 ATM water resistance, and a powerful 3nm processor."
    },
];

// ── CART STATE ────────────────────────────────────────────────
let cart = [];

// ── HELPERS ───────────────────────────────────────────────────
function formatPrice(price) {
    return 'R ' + price.toLocaleString('en-ZA', { minimumFractionDigits: 2 });
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) {
        try { cart = JSON.parse(saved); } catch (e) { cart = []; }
    }
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('techvibe_cart', JSON.stringify(cart));
    updateCartCount();
}

// ── PRODUCT CARD ──────────────────────────────────────────────
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">Add to Cart</button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">View Details</button>
                </div>
            </div>
        </div>`;
}

// ── PRODUCTS PAGE ─────────────────────────────────────────────
function displayProducts(productsToShow = products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = productsToShow.map(createProductCard).join('');
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            const filtered = category === 'all' ? products : products.filter(p => p.category === category);
            displayProducts(filtered);
        });
    });
}

// ── CAROUSEL (HOME PAGE) ──────────────────────────────────────
let carouselIndex = 0;
let carouselItems = [];
let autoSlideInterval = null;

function getCardsVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function displayFeaturedProducts() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    carouselItems = products.filter(p => [8, 10, 11, 12, 14, 15].includes(p.id));
    track.innerHTML = carouselItems.map(createProductCard).join('');

    const cardsVisible = getCardsVisible();
    const totalDots = Math.max(carouselItems.length - cardsVisible + 1, 1);

    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) =>
            `<button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"></button>`
        ).join('');
    }

    startAutoSlide();

    const wrapper = document.querySelector('.carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoSlide);
        wrapper.addEventListener('mouseleave', startAutoSlide);
    }
}

function moveCarousel(direction) {
    const cardsVisible = getCardsVisible();
    const maxIndex = Math.max(carouselItems.length - cardsVisible, 0);
    carouselIndex += direction;
    if (carouselIndex < 0) carouselIndex = maxIndex;
    if (carouselIndex > maxIndex) carouselIndex = 0;
    updateCarousel();
}

function goToSlide(index) {
    carouselIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    if (!track) return;
    const cards = track.querySelectorAll('.product-card');
    if (!cards.length) return;
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === carouselIndex));
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => moveCarousel(1), 3500);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

window.addEventListener('resize', () => {
    carouselIndex = 0;
    if (document.getElementById('carousel-track')) {
        updateCarousel();
        displayFeaturedProducts();
    }
});

// ── CART ACTIONS ──────────────────────────────────────────────
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    showToast('✅ ' + product.name + ' added to cart!');
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    alert(
        '📦 ' + product.name +
        '\n💰 Price: ' + formatPrice(product.price) +
        '\n🏷️ Category: ' + product.category +
        '\n📝 ' + product.description
    );
}

function changeQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCartPage();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    renderCartPage();
}

function clearCart() {
    if (!cart.length) return;
    if (confirm('Are you sure you want to clear your entire cart?')) {
        cart = [];
        saveCart();
        renderCartPage();
    }
}

// ── TOAST NOTIFICATION ────────────────────────────────────────
function showToast(message) {
    let toast = document.getElementById('tv-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'tv-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── CART PAGE ─────────────────────────────────────────────────
let appliedPromo = null;

const promoCodes = {
    'TECHNEWBIE': { discount: 0.10, label: '10% OFF' },
    'NEWUSER20':  { discount: 0.20, label: '20% OFF' },
    'SAVE5':      { discount: 0.05, label: '5% OFF' },
    'TECHVIBE10': { discount: 0.15, label: '15% OFF' },
};

function renderCartPage() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    const headerCount = document.getElementById('cart-header-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (headerCount) headerCount.textContent = totalItems + ' item' + (totalItems !== 1 ? 's' : '');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>`;
        renderCartSummary();
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-unit-price">${formatPrice(item.price)} each</div>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
                <span class="qty-number">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <div class="cart-item-total">${formatPrice(item.price * item.quantity)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
        </div>
    `).join('');

    renderCartSummary();
}

function renderCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = subtotal >= 5000 ? 0 : 99;
    let discount = 0;
    if (appliedPromo && cart.length > 0) discount = subtotal * appliedPromo.discount;
    const total = subtotal - discount + delivery;

    const elSubtotal = document.getElementById('summary-subtotal');
    const elDelivery = document.getElementById('summary-delivery');
    const elTotal = document.getElementById('cart-total');
    const discountRow = document.getElementById('discount-row');
    const deliveryMsg = document.getElementById('delivery-message');

    if (elSubtotal) elSubtotal.textContent = formatPrice(subtotal);
    if (elDelivery) elDelivery.textContent = delivery === 0 ? '🎉 FREE' : formatPrice(delivery);
    if (elTotal) elTotal.textContent = formatPrice(total);

    if (discountRow) {
        if (discount > 0) {
            discountRow.style.display = 'flex';
            document.getElementById('discount-label').textContent = appliedPromo.label;
            document.getElementById('summary-discount').textContent = '- ' + formatPrice(discount);
        } else {
            discountRow.style.display = 'none';
        }
    }

    if (deliveryMsg) {
        if (delivery === 0) {
            deliveryMsg.textContent = '🎉 You qualify for FREE delivery!';
        } else {
            const remaining = 5000 - subtotal;
            deliveryMsg.textContent = remaining > 0
                ? 'Add ' + formatPrice(remaining) + ' more for FREE delivery'
                : '🎉 You qualify for FREE delivery!';
        }
    }
}

function applyPromo() {
    const input = document.getElementById('promo-input');
    const message = document.getElementById('promo-message');
    if (!input || !message) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
        message.textContent = 'Please enter a promo code.';
        message.className = 'promo-message promo-error';
        return;
    }
    if (promoCodes[code]) {
        appliedPromo = { ...promoCodes[code], code };
        message.textContent = '✅ Code "' + code + '" applied — ' + appliedPromo.label + '!';
        message.className = 'promo-message promo-success';
        input.disabled = true;
        renderCartSummary();
    } else {
        appliedPromo = null;
        message.textContent = '❌ Invalid promo code. Try again.';
        message.className = 'promo-message promo-error';
        renderCartSummary();
    }
}

// ── CONTACT FORM ──────────────────────────────────────────────
function updateCharCount() {
    const msg = document.getElementById('message');
    const counter = document.getElementById('char-count');
    if (msg && counter) counter.textContent = msg.value.length;
}

function submitContactForm() {
    const fields = [
        { id: 'firstName', check: v => v.trim().length >= 2, errId: 'firstName-error' },
        { id: 'lastName',  check: v => v.trim().length >= 2, errId: 'lastName-error' },
        { id: 'email',     check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), errId: 'email-error' },
        { id: 'subject',   check: v => v !== '', errId: 'subject-error' },
        { id: 'message',   check: v => v.trim().length >= 10, errId: 'message-error' },
    ];

    let valid = true;
    fields.forEach(({ id, check, errId }) => {
        const el = document.getElementById(id);
        const err = document.getElementById(errId);
        if (!el) return;
        if (!check(el.value)) {
            el.classList.add('error');
            if (err) err.classList.add('show');
            valid = false;
        } else {
            el.classList.remove('error');
            if (err) err.classList.remove('show');
        }
    });

    if (!valid) return;

    // Show success state
    document.getElementById('contact-form-wrap').style.display = 'none';
    document.getElementById('success-message').classList.add('show');
}

function resetContactForm() {
    document.getElementById('contact-form-wrap').style.display = 'block';
    document.getElementById('success-message').classList.remove('show');
    ['firstName','lastName','email','phone','subject','message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.value = ''; el.classList.remove('error'); }
    });
    ['firstName-error','lastName-error','email-error','subject-error','message-error'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('show');
    });
    const counter = document.getElementById('char-count');
    if (counter) counter.textContent = '0';
}

// ── FAQ ───────────────────────────────────────────────────────
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    if (!item) return;
    // Close all others
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
    });
    item.classList.toggle('open');
}

// ── CHECKOUT ──────────────────────────────────────────────────
const checkoutFieldIds = ['co-firstName','co-lastName','co-email','co-phone','co-address','co-city','co-postalCode','co-province'];

function loadSidebar() {
    const container = document.getElementById('sidebar-items');
    if (!container) return;

    if (!cart.length) {
        container.innerHTML = '<p style="font-size:13px;color:#94a3b8;">Your cart is empty.</p>';
        return;
    }
    container.innerHTML = cart.map(item =>
        `<div class="sidebar-item">
            <span class="sidebar-item-name">${item.name} × ${item.quantity}</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
        </div>`
    ).join('');

    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const delivery = subtotal >= 5000 ? 0 : 99;
    const elSub = document.getElementById('sidebar-subtotal');
    const elDel = document.getElementById('sidebar-delivery');
    const elTot = document.getElementById('sidebar-total');
    if (elSub) elSub.textContent = formatPrice(subtotal);
    if (elDel) elDel.textContent = delivery === 0 ? '🎉 FREE' : formatPrice(delivery);
    if (elTot) elTot.textContent = formatPrice(subtotal + delivery);
}

function goToStep(step) {
    if (step === 2 && !validateDelivery()) return;

    document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('panel-' + step);
    if (panel) panel.classList.add('active');

    for (let i = 1; i <= 4; i++) {
        const ind = document.getElementById('step-indicator-' + i);
        if (!ind) continue;
        ind.classList.remove('active', 'done');
        if (i < step) ind.classList.add('done');
        if (i === step) ind.classList.add('active');
    }
    for (let i = 1; i <= 3; i++) {
        const line = document.getElementById('line-' + i);
        if (line) line.classList.toggle('done', i < step);
    }

    if (step === 2) renderReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateDelivery() {
    const rules = [
        { id: 'co-firstName', check: v => v.trim().length >= 2 },
        { id: 'co-lastName',  check: v => v.trim().length >= 2 },
        { id: 'co-email',     check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
        { id: 'co-phone',     check: v => /^0\d{9}$/.test(v.replace(/\s/g, '')) },
        { id: 'co-address',   check: v => v.trim().length >= 5 },
        { id: 'co-city',      check: v => v.trim().length >= 2 },
        { id: 'co-postalCode',check: v => /^\d{4}$/.test(v.trim()) },
        { id: 'co-province',  check: v => v !== '' },
    ];

    let valid = true;
    rules.forEach(({ id, check }) => {
        const el = document.getElementById(id);
        const err = document.getElementById(id + '-error');
        if (!el) return;
        if (!check(el.value)) {
            el.classList.add('error');
            if (err) err.classList.add('show');
            valid = false;
        } else {
            el.classList.remove('error');
            if (err) err.classList.remove('show');
        }
    });

    if (!valid) {
        const first = document.querySelector('#panel-1 input.error, #panel-1 select.error');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return valid;
}

// Clear error on input
function setupCheckoutListeners() {
    checkoutFieldIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', () => {
                el.classList.remove('error');
                const err = document.getElementById(id + '-error');
                if (err) err.classList.remove('show');
            });
        }
    });
}

function renderReview() {
    const reviewItems = document.getElementById('review-items');
    const deliverySummary = document.getElementById('delivery-summary');
    if (!reviewItems) return;

    reviewItems.innerHTML = cart.map(item => `
        <div class="review-item">
            <img src="${item.image}" alt="${item.name}" class="review-img">
            <div class="review-info">
                <div class="review-name">${item.name}</div>
                <div class="review-qty">Qty: ${item.quantity}</div>
            </div>
            <div class="review-price">${formatPrice(item.price * item.quantity)}</div>
        </div>`).join('');

    if (deliverySummary) {
        const get = id => { const el = document.getElementById(id); return el ? el.value : ''; };
        deliverySummary.innerHTML = `
            <strong>📍 Delivering To</strong>
            ${get('co-firstName')} ${get('co-lastName')}<br>
            ${get('co-address')}<br>
            ${get('co-city')}, ${get('co-province')}, ${get('co-postalCode')}<br>
            📧 ${get('co-email')}<br>
            📱 ${get('co-phone')}`;
    }
}

function selectPayment(method, el) {
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    const cardFields = document.getElementById('card-fields');
    if (cardFields) cardFields.classList.toggle('show', method === 'card');
}

function formatCardNumber(input) {
    let val = input.value.replace(/\D/g, '').substring(0, 16);
    input.value = val.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
    let val = input.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2);
    input.value = val;
}

function placeOrder() {
    const emailEl = document.getElementById('co-email');
    const orderNum = 'TV-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000);
    const orderNumEl = document.getElementById('order-number');
    const confirmedEmailEl = document.getElementById('confirmed-email');
    if (orderNumEl) orderNumEl.textContent = orderNum;
    if (confirmedEmailEl) confirmedEmailEl.textContent = emailEl ? emailEl.value : 'your email';
    cart = [];
    saveCart();
    const sidebar = document.getElementById('order-sidebar');
    if (sidebar) sidebar.style.display = 'none';
    goToStep(4);
}

// ── DARK MODE ─────────────────────────────────────────────────
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-icon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        if (icon) icon.textContent = '☀️';
        localStorage.setItem('techvibe_theme', 'dark');
    } else {
        if (icon) icon.textContent = '🌙';
        localStorage.setItem('techvibe_theme', 'light');
    }
}

function loadTheme() {
    const saved = localStorage.getItem('techvibe_theme');
    const icon = document.querySelector('.theme-icon');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.textContent = '☀️';
    } else {
        if (icon) icon.textContent = '🌙';
    }
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    loadCartFromStorage();
    loadTheme();

    // Products page
    displayProducts();
    setupFilters();

    // Home page carousel
    displayFeaturedProducts();

    // Cart page — only runs if cart-items element exists
    if (document.getElementById('cart-items')) {
        renderCartPage();
        const promoInput = document.getElementById('promo-input');
        if (promoInput) {
            promoInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') applyPromo();
            });
        }
    }

    // Checkout page — only runs if sidebar-items element exists
    if (document.getElementById('sidebar-items')) {
        loadSidebar();
        setupCheckoutListeners();
    }
});