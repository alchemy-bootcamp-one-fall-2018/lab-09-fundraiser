import cartApi from './cart-api.js';

let cart = cartApi.get();
const orderSummary = document.getElementById('summary');
let orders = [];
const getCart = {
    display(cart) {
        for(let i = 0; i < cart.length; i++) {
            orders.push(cart[i].name + ' ' + cart[i].price + ' ' + cart[i].quantity);
            for(let i = 0; i < orders.length; i++) {
                orderSummary.textContent = orders;
            }    
        }
    }
};

getCart.display(cart);


console.log(cart);