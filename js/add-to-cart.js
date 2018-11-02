import productsApi from './products-api.js';

let cartItems = [];
const products = productsApi.getProducts();

function addItems(buttonId) {
    let selectedProduct = products[parseInt(buttonId)];
    cartItems.push(selectedProduct);
    console.log(cartItems);
    storeCart();
}

function storeCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function displayCart() {
    //get items stored in local storage
    //display line by line item name and price
    //total
}

const addToCart = {
    init(buttonId) {
        console.log(buttonId);
        addItems(buttonId);
    }
};

export default addToCart;