import productsApi from '../apis/products-api.js';
import cartApi from '../apis/cart-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';
// import customerApi from '../apis/customer-api.js';

const products = productsApi.getAll();
const cart = cartApi.get();
// const customer = customerApi.getAll();

shoppingCart.init(cart);

productList.init(products, function(product) {
    // orderApi.add(product);
    cartApi.add(product);
    shoppingCart.update(cart);
    // customerApi.add(customer);
});
