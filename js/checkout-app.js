import customerInfo from './customer-listener.js';
import customerApi from './customer-api.js';
import shoppingCartTwo from './checkout-cart.js';
import cartApi from './cart-api.js';
import addCart from './test-print.js';

const cart = cartApi.get();
const customer = customerApi.getAll();

shoppingCartTwo.init(cart);

addCart.init(customer);

customerInfo.init(function(customer) {
    customerApi.add(customer);

});