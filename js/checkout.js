import cartApi from "./cart-api.js";
import shoppingCart from "./shopping-cart.js";

const cart = cartApi.get();

shoppingCart.init(cart);

