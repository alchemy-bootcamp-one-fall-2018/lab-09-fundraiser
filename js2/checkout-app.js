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

var sameInfo = document.getElementById('same-info');
sameInfo.addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.getElementById('billing-info');
    form.elements['name-shipping'].value = form.elements.name.value;
    form.elements['street-shipping'].value = form.elements.street.value;
    form.elements['city-shipping'].value = form.elements.city.value;
    form.elements['state-shipping'].value = form.elements.state.value;
    form.elements['zip-shipping'].value = form.elements.zip.value;
});