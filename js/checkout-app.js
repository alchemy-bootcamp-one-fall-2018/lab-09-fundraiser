import cartApi from './data-apis/cart-api.js';
import itemForm from './components/checkout.js';
import shoppingCart from './components/shopping-cart.js';
import customerApi from './data-apis/customer-api.js';

const cart = cartApi.get();

itemForm.init(function(item){
    customerApi.getAll();
    customerApi.add(item);
    return shoppingCart;
});

shoppingCart.init(cart);

