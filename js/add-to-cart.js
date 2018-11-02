import productsApi from './products-api.js';

let cartItems = [];
const products = productsApi.getProducts();
let total;

function addItems(buttonId) {
    let selectedProduct = products[parseInt(buttonId)];
    if(cartItems) {
        cartItems.push(selectedProduct);
    } else {
        cartItems = [selectedProduct];
    }
    storeCart();
}

function storeCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

function displayCart() {
    const cartAside = JSON.parse(localStorage.getItem('cart'));  
    const sideItems = document.getElementById('sideItems');  
    let html;
    
    cartAside.forEach(function(item) {
        total = JSON.parse(localStorage.getItem('cartTotal'));
        total += item.price;
        
        html += `
        <p>Item: ${item.name}</p>
        <p>Price: ${item.price}</p><br /><br /><br />     
        `;
    });
    html += `<p>Total: ${total}</p>`;
    localStorage.setItem('cartTotal', JSON.stringify(total));
    
    sideItems.innerHTML = html;
    
    
}


const addToCart = {
    init(buttonId) {
        addItems(buttonId);
    }
};

export default addToCart;