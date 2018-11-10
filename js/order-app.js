import productsApi from './products-api.js';
import cartApi from './cart-api.js';
import itemList from './product-list.js';
import shoppingCart from './shopping-cart.js';

const products = productsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

itemList.init(products, function(item) {
    cartApi.add(item);
    shoppingCart.update(cart);
});

const itemsInCart = {
    init(onSelect) {
        itemsInCart.onSelect = onSelect;
    }
};

itemsInCart.init(function(item) {
    cartApi.add(item);
    shoppingCart.update(cart);
});