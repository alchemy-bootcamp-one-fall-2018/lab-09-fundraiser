import cartApi from './cart-api.js';
import customersApi from './customer-api.js';

let cart = cartApi.get();
const orderSummary = document.getElementById('summary');

const getCart = {
    display(cart) {
        for(let i = 0; i < cart.length; i++) {
            const item = document.createElement('li');
            item.textContent = cart[i].name + ' ' + cart[i].price + ' ' + '(' + cart[i].quantity + ')';
            orderSummary.appendChild(item);
        }
    }
};

const form = document.getElementById('order-form');

const orderForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const customer = {};

            customer.name = elements.name.value;
            customer.streetAddress = elements['street-address'].value;
            customer.city = elements.city.value;
            customer.state = elements.state.value;
            customer.zipCode = elements['zip-code'].value;

            onAdd(customer);

            form.reset();

            console.log(customer);
        });
    }
};

orderForm.init(function(customer) {
    customersApi.getAll();
    customersApi.add(customer);
});

getCart.display(cart);

export default orderForm;
