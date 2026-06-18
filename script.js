const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999,
        category: "phones",
        image: "https://th.bing.com/th/id/R.e620582844f3c7ab51b35dcad732c912?rik=kMrVu3dF5D4pww&riu=http%3a%2f%2fdigitek.cl%2fcdn%2fshop%2ffiles%2fpbi-iphone-15-pro-max-1447353134.png%3fcrop%3dcenter%26height%3d1200%26v%3d1700683132%26width%3d1200&ehk=Q7zdDKL5XVV1%2f1EQfIYKXvunJC%2bmDHCERBRhZGPUVXI%3d&risl=&pid=ImgRaw&r=0",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 2,
        name: "MacBook Air 2022",
        price: 1199,
        category: "laptops",
        image: "https://th.bing.com/th/id/OIP.9pM1kxhssgN-nG6u5fj-xAHaFj?w=251&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Lightweight laptop perfect for work and creativity"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.134VJ44OStJo8DrF8-JnyAHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.5pLTDO9E_LSYCTAAK3C64wHaHa?w=168&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        description: "Android phone with incredible features"
    },
    {
        id: 5,
        name: "Dell Laptop",
        price: 799,
        category: "laptops",
        image: "https://tech.co.za/wp-content/uploads/2023/06/Inspiron-3520a.png",
        description: "Reliable laptop for everyday computing"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 49,
        category: "accessories",
        image: "https://th.bing.com/th/id/OIP.cJbtKKZbERFQBr5-_ftO7gHaHa?r=0&rs=1&pid=ImgDetMain",
        description: "Ergonomic wireless mouse for productivity"
    },
    {
        id: 7,
        name: "iPhone 16 ",
        price: 2900,
        category: "phones",
        image: "data:image/jpeg;base64,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",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 8,
        name: "iPhone 17 Pro Max ",
        price: 5400,
        category: "phones",
        image: "https://www.bing.com/th?id=OPEC.yb6%2f2xLts4o6zQ474C474&o=5&pid=21.1&w=128&h=168&qlt=100&dpr=1,3&o=2&bw=6&bc=FFFFFF",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 9,
        name: "Samsung S25 Plus ",
        price: 5100,
        category: "phones",
        image: "https://www.bing.com/th/id/OIP.AbVpNo9snSdb2gWIvassswHaD4?w=312&h=200&c=8&rs=1&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "The latest iPhone with amazing camera and performance"
    },
    {
        id: 10,
        name: "Samsung S26 Ultra ",
        price: 6000,
        category: "phones",
        image: "https://th.bing.com/th/id/OIP.Ervqbp_ZoxafMavf6n_WfAHaHa?w=105&h=108&c=7&qlt=90&bgcl=c02651&r=0&o=6&dpr=1.3&pid=13.1",
        description: "The latest iPhone with amazing camera and performance"
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
    if (!productsGrid) return; // not on products page, do nothing
    console.log('Displaying', productsToShow.length, 'products on products page');
    productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
}

// ── HOME PAGE — show first 4 as featured ────────────────────
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return; // not on home page, do nothing
    console.log('Displaying featured products on home page');
    const featured = products.slice(0, 4);
    featuredContainer.innerHTML = featured.map(createProductCard).join('');
}

// ── CART ────────────────────────────────────────────────────
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

    // Save to localStorage so cart persists on refresh
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

// ── CART PAGE — render cart items ───────────────────────────
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer) return; // not on cart page, do nothing

    // Load cart from localStorage
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) cart = JSON.parse(saved);

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding: 60px 20px;">
                <h2>🛒 Your cart is empty</h2>
                <p style="color:#666; margin: 12px 0 24px;">Looks like you haven't added anything yet.</p>
                <a href="/products" class="btn btn-primary">Browse Products</a>
            </div>`;
        if (cartTotal) cartTotal.textContent = 'Total: R 0.00';
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

// ── FILTER BUTTONS (products page) ──────────────────────────
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

// ── LOAD CART COUNT ON EVERY PAGE ───────────────────────────
function loadCartFromStorage() {
    const saved = localStorage.getItem('techvibe_cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// ── INIT — runs when page is ready ──────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded — initialising TechVibe...');

    loadCartFromStorage();   // always load cart count in navbar
    displayProducts();       // only fires if products-grid exists (products page)
    displayFeaturedProducts(); // only fires if featured-products exists (home page)
    displayCart();           // only fires if cart-items exists (cart page)
    setupFilters();          // only fires if filter buttons exist (products page)
});