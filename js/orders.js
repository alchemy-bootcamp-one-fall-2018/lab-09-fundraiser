import productsApi from './products-api.js';
import cartApi from './cart-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';

const products = productsApi.getProducts();
const cart = cartApi.get();

shoppingCart.init(cart);
productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
});

