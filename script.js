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

// Step 2: Creating out shopping cart
// This will store all items the customer wants to buy

let cart = [];

//Step 3: Get refrences to HTML elements
// This connects our JS to specific parts of our webpage

const cartCountElement = document.getElementById('cart-count');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');

// Step 4: Utility function to format
// This will make a price look like "R999" instead of "999"

function formatPrice(price) {
    return 'R' + price.toFixed(2)
}

console.log('JavaScript Loaded successfully!');
console.log('We have', products.length, 'products.');

//
function createProductCard(product) {
    return `
       <div class="product-card">
           <img src="${product.image}" alt="${product.name}" class="product-image">
           <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                     ${formatPrice(product.price)}
                </div>
                <div class="product-actions">
                     <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Add to Cart
                     </button>
                     <button class="btn btn-primary btn-small" onclick="viewProduct(${product.id})">
                         View Details
                     </button>
                </div>
           </div>
       </div>   `
} 

function displayProducts(productsToShow = products) {
    if (productsGrid) {
        console.log('Displaying products... on products page');
        const productsHTML = productsToShow.map(createProductCard).join('');
        productsGrid.innerHTML = productsHTML;
    } else 
    {
        console.log('Not on products page, skipping display');
    }
} 

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

function viewProduct(productId) {
    const product = products.find(prod => prod.id === productId);
    alert('Product: ' + product.name +
         '\nPrice: ' + formatPrice(product.price) +
          '\nDescription: ' + product.description);
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {

        //Adding a click EventListener
        button.addEventListener('click', function() {

        ///Remove active from all Buttons
        filterButtons.forEach(btn => btn.classList.remove('active'))
        
        //Add active class to the Clicked Button
        this.classList.add('active');
        
        //Get the Category from the buttons data-category attribute
        const category = this.getAttribute('data-category')

        //Filter products based on category
        let filteredProducts;
        if(category === 'all'){
            filteredProducts = products
        } else {
            filteredProducts = products.filter(product => product.category === category);
        }

        displayProducts(filteredProducts);

        console.log('Showing', filteredProducts.length, 'products in category: ', category)
       });
   });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Page Loaded dispalying products...');
    displayProducts();
    setupFilters();

}) 

  