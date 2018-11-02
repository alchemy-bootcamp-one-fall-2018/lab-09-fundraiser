import productsApi from './products-api.js';

let cartItems = JSON.parse(localStorage.getItem('cart'));
const products = productsApi.getProducts();
let total;

displayCart();

function addItems(buttonId) {
    let selectedProduct = products[parseInt(buttonId)];
    if(cartItems) {
        cartItems.push(selectedProduct);
    } else {
        cartItems = [selectedProduct];
    }

    storeCart();
    addTotal();
}

function addTotal(){
    const cartAside = JSON.parse(localStorage.getItem('cart'));
    if(cartAside) {
        cartAside.forEach(function(item) {
            total = JSON.parse(localStorage.getItem('cartTotal'));
            total += item.price;
        });
    } else {
        total = 0;
    }
    localStorage.setItem('cartTotal', JSON.stringify(total));
    displayCart();
}

function storeCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function displayCart() {
    const cartAside = JSON.parse(localStorage.getItem('cart'));
    const sideItems = document.getElementById('sideItems');  
    let html = '';
    
    if(cartAside) {
        cartAside.forEach(function(item) {
            total = JSON.parse(localStorage.getItem('cartTotal'));
                       
            html += `
            <p>Item: ${item.name}</p>
            <p>Price: $${item.price}</p><br /><br /><br />     
            `;
        });
        html += `<p>Total: ${total}</p>`;

        sideItems.innerHTML = html;
    }   
}


const addToCart = {
    init(buttonId) {
        addItems(buttonId);
    }
};

export default addToCart;