import cartApi from './cart/cart-api.js';
import cartList from './cart/cart-list.js';
import addCustomer from './customer-info/customer-add.js';
import customersApi from './customer-info/customer-api.js';

const cartItems = cartApi.getAll();
cartList.init(cartItems, function(cartItem) {
    cartApi.remove(cartItem);
});

addCustomer.init(function(customer) {
    customersApi.add(customer);
});