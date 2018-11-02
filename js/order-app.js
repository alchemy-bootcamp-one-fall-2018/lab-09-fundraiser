import shoppingCart from './shopping-cart.js';
import cookieApi from './cookies-api.js';
import cookieList from './cookie-list.js';
import cartApi from './cart-api.js';

const cookies = cookieApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

cookieList.init(cookies, function(cookie) {
    cartApi.add(cookie);
    shoppingCart.update(cart);
});


