import productApi from './product-api.js';
import cartApi from './cartApi.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';
// import productDetail from './product-detail.js';


const products = productApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
    // productDetail.update(product);
});

