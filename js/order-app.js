import productsApi from './data-apis/products-api.js';
import cartApi from './data-apis/cart-api.js';
import productList from './components/product-list.js';
import shoppingCart from './components/shopping-cart.js';

const products = productsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
});