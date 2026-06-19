const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 22999,
        category: "phones",
        image: "https://th.bing.com/th/id/R.e620582844f3c7ab51b35dcad732c912?rik=kMrVu3dF5D4pww&riu=http%3a%2f%2fdigitek.cl%2fcdn%2fshop%2ffiles%2fpbi-iphone-15-pro-max-1447353134.png%3fcrop%3dcenter%26height%3d1200%26v%3d1700683132%26width%3d1200&ehk=Q7zdDKL5XVV1%2f1EQfIYKXvunJC%2bmDHCERBRhZGPUVXI%3d&risl=&pid=ImgRaw&r=0",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air 2022",
        price: 28999,
        category: "laptops",
        image: "https://th.bing.com/th/id/OIP.9pM1kxhssgN-nG6u5fj-xAHaFj?w=251&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 5999,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 18999,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.5pLTDO9E_LSYCTAAK3C64wHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Android phone with incredible features"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 12999,
        category: "laptops",
        image: "https://tech.co.za/wp-content/uploads/2023/06/Inspiron-3520a.png",
        description: "Reliable laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 599,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.cJbtKKZbERFQBr5-_ftO7gHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Ergonomic wireless mouse for productivity"
    },
    {
        id: 7,
        name: "iPhone 16",
        price: 16999,
        category: "phones",
        image: "https://www.bing.com/th?id=OPEC.E3iJzbF5Hg6aRw474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 8,
        name: "iPhone 17 Pro Max",
        price: 30499,
        category: "phones",
        image: "https://www.bing.com/th?id=OPEC.yb6%2f2xLts4o6zQ474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 9,
        name: "Samsung S25 Plus",
        price: 20499,
        category: "phones",
        image: "https://www.bing.com/th/id/OIP.AbVpNo9snSdb2gWIvassswHaD4?w=312&h=200&c=8&rs=1&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Samsung's latest flagship with stunning display and powerful battery"
    },
    {
        id: 10,
        name: "Samsung S26 Ultra",
        price: 40000,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.Ervqbp_ZoxafMavf6n_WfAHaHa?w=105&h=108&c=7&qlt=90&bgcl=c02651&r=0&o=6&dpr=1.3&pid=13.1",
        description: "The ultimate Samsung experience — S Pen, AI camera, and pro-grade performance"
    },
    {
        id: 11,
        name: "HP Spectre x360 14 (2026 Edition)",
        price: 55000,
        category: "laptops",
        image: "https://www.bing.com/th?id=OPEC.JkkMjm6O5GCsnA474C474&o=5&pid=21.1&w=140&h=140&qlt=100&dpr=1,3&o=2",
        description: "Adaptive 2-in-1 laptop with built in AI technology"
    },
    {
        id: 12,
        name: "Galaxy Buds4",
        price: 3499,
        category: "accessories",
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/s2602/gallery/za-galaxy-buds4-r540-sm-r540nzwaxfa-thumb-550984777?$Q90_330_330_F_PNG$",
        description: "Paradise in your ears with built in AI technology"
    },
    {
        id: 13,
        name: "Sony WH-CH720 Wireless Noise Cancelling Headphones",
        price: 2699,
        category: "accessories",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/222978508-1200-1600?v=639015738519300000&width=1200&height=1600&aspect=true",
        description: "Dual Noise Sensor technology delivers stronger, more effective noise cancelling so you can stay immersed in your music anywhere."
    },
    {
        id: 14,
        name: "Apple Watch Series 11",
        price: 11000,
        category: "accessories",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/220659820-1200-1600?v=638938586668200000&width=1200&height=1600&aspect=true",
        description: "GPS 46mm Aluminium Case with Sport Band, up to 24 hours battery and heart rate notifications"
    },
    {
        id: 15,
        name: "Galaxy Watch Ultra (2026)",
        price: 15000,
        category: "accessories",
        image: "https://images.samsung.com/is/image/samsung/p6pim/za/f2507/gallery/za-galaxy-watch-ultra-2025-l705-sm-l705fzb1xfa-547647313?$1164_776_PNG$",
        description: "Withstands 55°C heat, 9,000m altitude, 10 ATM water pressure with a powerful 3nm processor. Now in Titanium Blue."
    },
];

// Shopping cart array
let cart = [];

// HTML element references
const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');

// Format price as Rands
function formatPrice(price) {
    return 'R ' + price.toLocaleString('en-ZA', { minimumFractionDigits: 2 });
}

console.log('JavaScript Loaded successfully!');
console.log('We have', products.length, 'products.');

// ── BUILD A SINGLE PRODUCT CARD ──────────────────────────────
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="btn btn-primary btn-small" onclick="viewProduct(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>`;
}

// ── PRODUCTS PAGE ─────────────────────────────────────────────
function displayProducts(productsToShow = products) {
    if (!productsGrid) return;
    console.log('Displaying', productsToShow.length, 'products on products page');
    productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
}

// ── CAROUSEL VARIABLES ────────────────────────────────────────
let carouselIndex = 0;
let carouselItems = [];
let autoSlideInterval = null;

function getCardsVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

// ── HOME PAGE — New Arrivals Carousel ─────────────────────────
function displayFeaturedProducts() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return;

    carouselItems = products.filter(p => [8, 10, 11, 12, 14, 15].includes(p.id));
    const cardsVisible = getCardsVisible();
    track.innerHTML = carouselItems.map(createProductCard).join('');

    const totalDots = Math.max(carouselItems.length - cardsVisible + 1, 1);
    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) => `
            <button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></button>
        `).join('');
    }

    startAutoSlide();

    const wrapper = document.querySelector('.carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', stopAutoSlide);
        wrapper.addEventListener('mouseleave', startAutoSlide);
    }

    console.log('Displaying', carouselItems.length, 'new arrivals in carousel');
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
    autoSlideInterval = setInterval(() => moveCarousel(1), 3000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

window.addEventListener('resize', () => {
    carouselIndex = 0;
    updateCarousel();
    displayFeaturedProducts();
});

// ── CART ──────────────────────────────────────────────────────
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('techvibe_cart', JSON.stringify(cart));
    updateCartCount();
    console.log('Cart updated:', cart);
    alert('✅ ' + product.name + ' added to cart!');
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    alert(
        'Product: ' + product.name +
        '\nPrice: ' + formatPrice(product.price) +
        '\nCategory: ' + product.category +
        '\nDescription: ' + product.description
    );
}

// ── CART PAGE ─────────────────────────────────────────────────
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return;
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) cart = JSON.parse(saved);
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding: 60px 20px;">
                <h2>🛒 Your cart is empty</h2>
                <p style="color:#666; margin: 12px 0 24px;">Looks like you haven't added anything yet.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>`;
        if (cartTotal) cartTotal.textContent = 'Total: R 0,00';
        return;
    }
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="display:flex; align-items:center; gap:16px; padding:16px; border-bottom:1px solid #eee;">
            <img src="${item.image}" alt="${item.name}" style="width:80px; height:80px; object-fit:contain;">
            <div style="flex:1">
                <h3>${item.name}</h3>
                <p>${formatPrice(item.price)} each</p>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <button class="btn btn-small" onclick="changeQty(${item.id}, -1)">−</button>
                <span>${item.quantity}</span>
                <button class="btn btn-small" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
            <div><strong>${formatPrice(item.price * item.quantity)}</strong></div>
            <button class="btn btn-small" style="background:#ff4444;color:white;" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if (cartTotal) cartTotal.textContent = 'Total: ' + formatPrice(total);
    updateCartCount();
}

function changeQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('techvibe_cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    localStorage.setItem('techvibe_cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

const promoCodes = {
            'TechNewbbie': { discount: 0.10, label: '10% OFF' },
            'NEWUSER20':  { discount: 0.20, label: '20% OFF' },
            'SAVE5':      { discount: 0.05, label: '5% OFF' },
            'TECHVIBE10':   { discount: 0.15, label: '15% OFF' },
        };
        let appliedPromo = null;

        function applyPromo() {
            const input = document.getElementById('promo-input');
            const message = document.getElementById('promo-message');
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

        document.getElementById('promo-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') applyPromo();
        });

        function clearCart() {
            if (cart.length === 0) return;
            if (confirm('Are you sure you want to clear your entire cart?')) {
                cart = [];
                localStorage.setItem('techvibe_cart', JSON.stringify(cart));
                renderCartPage();
                updateCartCount();
            }
        }

        function renderCartPage() {
            const cartContainer = document.getElementById('cart-items');
            const headerCount = document.getElementById('cart-header-count');
            const saved = localStorage.getItem('techvibe_cart');
            if (saved) cart = JSON.parse(saved);
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (headerCount) headerCount.textContent = totalItems + ' item' + (totalItems !== 1 ? 's' : '');
            if (cart.length === 0) {
                cartContainer.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><h2>Your cart is empty</h2><p>Looks like you haven\'t added anything yet.</p><a href="products.html" class="btn btn-primary">Browse Products</a></div>';
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
            updateCartCount();
        }

        function renderCartSummary() {
            const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const delivery = subtotal >= 5000 ? 0 : 99;
            let discount = 0;
            if (appliedPromo && cart.length > 0) discount = subtotal * appliedPromo.discount;
            const total = subtotal - discount + delivery;
            document.getElementById('summary-subtotal').textContent = formatPrice(subtotal);
            document.getElementById('summary-delivery').textContent = delivery === 0 ? '🎉 FREE' : formatPrice(delivery);
            document.getElementById('cart-total').textContent = formatPrice(total);
            const discountRow = document.getElementById('discount-row');
            if (discount > 0) {
                discountRow.style.display = 'flex';
                document.getElementById('discount-label').textContent = appliedPromo.label;
                document.getElementById('summary-discount').textContent = '- ' + formatPrice(discount);
            } else {
                discountRow.style.display = 'none';
            }
            const deliveryMsg = document.getElementById('delivery-message');
            if (delivery === 0) {
                deliveryMsg.textContent = '🎉 You qualify for FREE delivery!';
            } else {
                const remaining = 5000 - subtotal;
                deliveryMsg.textContent = remaining > 0 ? 'Add ' + formatPrice(remaining) + ' more for FREE delivery' : '🎉 You qualify for FREE delivery!';
            }
        }

        renderCartPage();


// ── FILTER BUTTONS ────────────────────────────────────────────
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            const filtered = category === 'all'
                ? products
                : products.filter(p => p.category === category);
            displayProducts(filtered);
            console.log('Showing', filtered.length, 'products in category:', category);
        });
    });
}

// ── LOAD CART COUNT ON EVERY PAGE ─────────────────────────────
function loadCartFromStorage() {
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
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

// Chechout
        function loadSidebar() {
            const saved = localStorage.getItem('techvibe_cart');
            if (saved) cart = JSON.parse(saved);
            const container = document.getElementById('sidebar-items');
            if (!cart.length) { container.innerHTML = '<p style="font-size:13px;color:#94a3b8;">Your cart is empty.</p>'; return; }
            container.innerHTML = cart.map(item => `<div class="sidebar-item"><span class="sidebar-item-name">${item.name} × ${item.quantity}</span><span>${formatPrice(item.price * item.quantity)}</span></div>`).join('');
            const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
            const delivery = subtotal >= 5000 ? 0 : 99;
            document.getElementById('sidebar-subtotal').textContent = formatPrice(subtotal);
            document.getElementById('sidebar-delivery').textContent = delivery === 0 ? '🎉 FREE' : formatPrice(delivery);
            document.getElementById('sidebar-total').textContent = formatPrice(subtotal + delivery);
        }

        function goToStep(step) {
            if (step === 2 && !validateDelivery()) return;
            document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
            document.getElementById('panel-' + step).classList.add('active');
            for (let i = 1; i <= 4; i++) {
                const ind = document.getElementById('step-indicator-' + i);
                ind.classList.remove('active', 'done');
                if (i < step) ind.classList.add('done');
                if (i === step) ind.classList.add('active');
            }
            for (let i = 1; i <= 3; i++) {
                document.getElementById('line-' + i).classList.toggle('done', i < step);
            }
            if (step === 2) renderReview();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function validateDelivery() {
            let valid = true;
            const fields = [
                { id: 'firstName', check: v => v.trim().length >= 2 },
                { id: 'lastName',  check: v => v.trim().length >= 2 },
                { id: 'email',     check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
                { id: 'phone',     check: v => /^0\d{9}$/.test(v.replace(/\s/g,'')) },
                { id: 'address',   check: v => v.trim().length >= 5 },
                { id: 'city',      check: v => v.trim().length >= 2 },
                { id: 'postalCode',check: v => /^\d{4}$/.test(v.trim()) },
                { id: 'province',  check: v => v !== '' },
            ];
            fields.forEach(({ id, check }) => {
                const el = document.getElementById(id);
                const err = document.getElementById(id + '-error');
                if (!check(el.value)) { el.classList.add('error'); if (err) err.classList.add('show'); valid = false; }
                else { el.classList.remove('error'); if (err) err.classList.remove('show'); }
            });
            if (!valid) { const first = document.querySelector('.form-group input.error, .form-group select.error'); if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
            return valid;
        }

        ['firstName','lastName','email','phone','address','city','postalCode','province'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.addEventListener('input', () => { el.classList.remove('error'); const err = document.getElementById(id + '-error'); if (err) err.classList.remove('show'); });
        });

        function renderReview() {
            document.getElementById('review-items').innerHTML = cart.map(item => `
                <div class="review-item">
                    <img src="${item.image}" alt="${item.name}" class="review-img">
                    <div class="review-info"><div class="review-name">${item.name}</div><div class="review-qty">Qty: ${item.quantity}</div></div>
                    <div class="review-price">${formatPrice(item.price * item.quantity)}</div>
                </div>`).join('');
            document.getElementById('delivery-summary').innerHTML = `
                <strong>📍 Delivering To</strong>
                ${document.getElementById('firstName').value} ${document.getElementById('lastName').value}<br>
                ${document.getElementById('address').value}<br>
                ${document.getElementById('city').value}, ${document.getElementById('province').value}, ${document.getElementById('postalCode').value}<br>
                📧 ${document.getElementById('email').value}<br>
                📱 ${document.getElementById('phone').value}`;
        }

        function selectPayment(method, el) {
            document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            document.getElementById('card-fields').classList.toggle('show', method === 'card');
        }

        function formatCardNumber(input) {
            let val = input.value.replace(/\D/g, '').substring(0, 16);
            input.value = val.replace(/(.{4})/g, '$1 ').trim();
        }

        function formatExpiry(input) {
            let val = input.value.replace(/\D/g, '').substring(0, 4);
            if (val.length >= 2) val = val.substring(0,2) + '/' + val.substring(2);
            input.value = val;
        }

        function placeOrder() {
            const orderNum = 'TV-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000);
            document.getElementById('order-number').textContent = orderNum;
            document.getElementById('confirmed-email').textContent = document.getElementById('email').value;
            cart = [];
            localStorage.removeItem('techvibe_cart');
            updateCartCount();
            document.getElementById('order-sidebar').style.display = 'none';
            goToStep(4);
        }

        loadSidebar();
 


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
    console.log('Page loaded — initialising TechVibe...');
    loadCartFromStorage();
    displayProducts();
    displayFeaturedProducts();
    displayCart();
    setupFilters();
    loadTheme();
});