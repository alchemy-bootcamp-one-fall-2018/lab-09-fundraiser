
import customerApi from './customer-api.js';
import cartApi from './cart-api.js';


const cart = cartApi.getAll();
const customer = customerApi.getAll();

const list = document.getElementById('admin-info');

const addCart = {

    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            addCart.add(cart[i]);
            list.appendChild(cart); 
        }
    }
};

addCart.init(cart);
