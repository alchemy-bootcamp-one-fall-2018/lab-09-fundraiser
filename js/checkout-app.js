// import addOrder from './components/checkout-form.js';
import cartApi from './data-apis/cart-api.js';
import shoppingCart from './components/shopping-cart.js';

const cart = cartApi.get();

shoppingCart.init(cart);