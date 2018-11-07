import cartApi from './cart/cart-api.js';
import cartList from './cart/cart-list.js';

const cartItems = cartApi.getAll();
cartList.init(cartItems, function(cartItem) {
    cartApi.remove(cartItem);
});