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
    }
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