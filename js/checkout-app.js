import customerInfo from './customer-listener.js';
import customerApi from './customer-api.js';
import shoppingCartTwo from './checkout-cart.js';
import cartApi from './cart-api.js';


const cart = cartApi.get();
console.log('app cart', cart);

shoppingCartTwo.init(cart);


customerInfo.init(function(customer) {
    customerApi.add(customer);
});