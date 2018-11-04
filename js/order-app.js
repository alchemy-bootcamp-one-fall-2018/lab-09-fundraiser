import productsApi from './products-api.js';
import cartApi from './cart-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';

// import customerApi from './customer-api.js';

const products = productsApi.getAll();
const cart = cartApi.get();
// const customer = customerApi.getAll();

shoppingCart.init(cart);

productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
    // customerApi.add(customer);
});

