import productsApi from './products-api.js';

let cartItems = [];
const products = productsApi.getProducts();

function addItems(buttonId) {
    let selectedProduct = products[parseInt(buttonId)];
    cartItems.push(selectedProduct);
    storeCart();
}

function storeCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

function displayCart() {
    const cartAside = JSON.parse(localStorage.getItem('cart'));
    const sideCart = document.getElementById('sideCart');

    let html;
    let total = 0;

    cartAside.forEach(function(item) {
        html += `
            <p>Item: ${item.name}</p>
            <p>Price: ${item.price}</p><br /><br /><br />     
            <p>Total: ${total += item.price}</p>                 //add total to local storage
        `;
    });
    
    console.log(html);
}

const addToCart = {
    init(buttonId) {
        addItems(buttonId);
    }
};

export default addToCart;