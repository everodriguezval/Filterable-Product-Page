import { data } from "./data.js";
console.log(data);

const searchInput = getElement('#search');
const btnContainer = getElement('#btn-container');
const productContainer = getElement('#productslist-container');

// console.log(searchInput);
// console.log(btnContainer);
// console.log(productContainer);

searchInput.addEventListener('input', (e) => {
    // console.log(e.target.value)
    filterProducts(e.target.value);
});

// Checking throw new Error()
// getElement('#h2');

// Grab element from the DOM
// Argument: a string representation of the element's ID
function getElement(identifier) {
    const el = document.querySelector(identifier);
    if (!el) {
        throw new Error('Could not find the element specified')
    } else {
        return el;
    }
}

// Display list of products
// Argument: An array of products
function displayProducts(products) {   
    if (!products || products.length === 0) {
      productContainer.innerHTML = "<h2 class='no-results'>No results</h2>";
    } else {
      const productList = products.map((product) => {
        const { title, price, brand, rating, thumbnail } = product;
        return `
    <div class='product-wrapper'>
      <div class='rating'>
        <p>Rating: ${rating}</p>
      </div>
      <div class='product-info'>
        <div class='product-img'>
          <img src='${thumbnail}' alt='${title}'/>
        </div>
        <div class='product-detail'>
          <h2>${title}</h2>
          <p>${brand}</p>
          <p>${price}.00</p>
        </div>
      </div>
    </div>
  `;
    })
    .join("");

    productContainer.innerHTML = productList;
    }
}

// Create a category button
// Argument: The category, represented in string format.
function createBtn(category) {}

// Handle input
// Argument: a string representation of a category, used to compare against categories of products
function filterProducts(value) {
    const filteredProducts = data.products.filter((product) => {
        console.log(product)
        return product.category.includes(value);
    });

    displayProducts(filteredProducts);
}


// Display category buttons
// Argument: An array of products
function displayCategories(products) {}

// Gather all categories from products data
// Argument: An array of products
function parseCategories(products) {}

// Display initial products list and category buttons
// No arguments
function init() {
    displayProducts(data.products);
}

init();
