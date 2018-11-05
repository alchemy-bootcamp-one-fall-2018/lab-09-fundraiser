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
// You need to keep this on th order page for the list of products to show up tis functionality will 
// show up on the shop.html  page
// productList.init (products, function(product){
//     cartApi.add(product);
//     shoppingCart.update(cart);

// });

