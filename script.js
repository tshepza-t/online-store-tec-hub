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
        description: //"Dual Noise Sensor technology delivers stronger, 
        "more effective noise cancelling so you can stay immersed in your music anywhere."
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
const featuredProducts = document.getElementById('featured-products');

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

// ── PRODUCTS PAGE — show all / filtered products ─────────────
function displayProducts(productsToShow = products) {
    if (!productsGrid) return;
    console.log('Displaying', productsToShow.length, 'products on products page');
    productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
}

// ── CAROUSEL VARIABLES ───────────────────────────────────────
let carouselIndex = 0;
let carouselItems = [];
let autoSlideInterval = null;

function getCardsVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

// ── HOME PAGE — New Arrivals Carousel ───────────────────────
function displayFeaturedProducts() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!track) return; // not on home page, do nothing

    // ✅ Update these IDs whenever you add new products
    carouselItems = products.filter(p => [8, 10, 11, 12, 14, 15].includes(p.id));

    const cardsVisible = getCardsVisible();

    // Render cards into the track
    track.innerHTML = carouselItems.map(createProductCard).join('');

    // Render dot indicators
    const totalDots = Math.max(carouselItems.length - cardsVisible + 1, 1);
    if (dotsContainer) {
        dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) => `
            <button class="carousel-dot ${i === 0 ? 'active' : ''}"
                    onclick="goToSlide(${i})">
            </button>
        `).join('');
    }

    // Start auto sliding
    startAutoSlide();

    // Pause when user hovers
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

    // Loop around smoothly
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

    // Card width + gap (24px gap from CSS)
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === carouselIndex);
    });
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        moveCarousel(1);
    }, 3000); // every 3 seconds
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

// Recalculate on screen resize
window.addEventListener('resize', () => {
    carouselIndex = 0;
    updateCarousel();
    displayFeaturedProducts();
});

// ── CART ─────────────────────────────────────────────────────
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
    alert(`✅ ${product.name} added to cart!`);
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

// ── CART PAGE ────────────────────────────────────────────────
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
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
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

// ── FILTER BUTTONS ───────────────────────────────────────────
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

// ── LOAD CART COUNT ON EVERY PAGE ────────────────────────────
function loadCartFromStorage() {
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// ── DARK MODE ────────────────────────────────────────────────
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

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded — initialising TechVibe...');

    loadCartFromStorage();
    displayProducts();
    displayFeaturedProducts();  // now builds the carousel
    displayCart();
    setupFilters();
    loadTheme();
});