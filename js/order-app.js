import cartApi from './cart-api.js';
import productApi from './products-api.js';
import itemTable from './product-list.js';
import shoppingCart from './shopping-cart.js';

const products = productApi.getAll();
const cart = cartApi.getAll();

shoppingCart.init(cart);

itemTable.init(products, function(products){
    cartApi.add(products);
    shoppingCart.update(cart);
});


