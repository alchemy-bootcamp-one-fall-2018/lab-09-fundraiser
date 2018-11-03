import cartApi from './cart-api.js';

let cart = cartApi.get();
const orderSummary = document.getElementById('summary');

const getCart = {
    display(cart) {
        for(let i = 0; i < cart.length; i++) {
            const item = document.createElement('li');
            item.textContent = cart[i].name + ' ' + cart[i].price + ' ' + cart[i].quantity;
            orderSummary.appendChild(item);
            console.log(orderSummary);
        }
    }
};

getCart.display(cart);


console.log(cart);