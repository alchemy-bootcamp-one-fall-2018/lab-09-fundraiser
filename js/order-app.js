import cartApi from './cart-api.js';
import productDetail from './add-product.js';
import itemTable from './product-list.js';
import shoppingCart from './shopping-cart.js';

const cart = cartApi.getAll();

itemTable.init (cart);
//shopping cart init
shoppingCart.init(cart);

productDetail.init(function(products){
    cartApi.add(products);
});


