import cartApi from './data-apis/cart-api.js';
import itemForm from './components/checkout.js';
import shoppingCart from './components/shopping-cart.js';
// import customerApi from './data-apis/customer-api.js';

const cart = cartApi.get();
// const customer = customerApi.get();

itemForm.init(function(item){
    // customerApi.add(customer);
    cartApi.add(item);
    return shoppingCart;
});

shoppingCart.init(cart);

