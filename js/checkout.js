import cartApi from "./cart-api.js";
import shoppingCart from "./shopping-cart.js";
import orderForm from "./order-form.js";
import orderApi from "./order-api.js";


const cart = cartApi.get();

shoppingCart.init(cart);

orderForm.init(function(order){
    orderApi.add(order);
    cartApi.clear();
    shoppingCart.update(cart);
});