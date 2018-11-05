import cartApi from './data-apis/cart-api.js';
import itemForm from './components/checkout.js';
import shoppingCart from './components/shopping-cart.js';

const cart = cartApi.get();

itemForm.init(function(item){
    cartApi.add(item);
    return shoppingCart;
});

shoppingCart.init(cart);

