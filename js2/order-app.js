import productsApi from './product-list/products-api.js';
import productList from './product-list/product-list.js';

import cartApi from './cart/cart-api.js';
import cartList from './cart/cart-list.js';
import updateCart from './cart/cart-update.js';

const products = productsApi.getAll();

productList.init(products); 

const cartItems = cartApi.getAll();

cartList.init(cartItems, function(cartItem) {
    cartApi.remove(cartItem);
});

updateCart.init(function(cartItem) {
    cartList.editDom(cartItem);
});