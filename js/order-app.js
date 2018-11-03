import cartApi from './cart-api.js';
import productApi from './products-api.js';
import itemTable from './product-list.js';
import shoppingCart from './shopping-cart.js';
import customerApi from './customer-api.js';

const customer = customerApi.getAll();
const products = productApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

itemTable.init(products, function(product){
    cartApi.add(product);
    shoppingCart.update(cart);
});


