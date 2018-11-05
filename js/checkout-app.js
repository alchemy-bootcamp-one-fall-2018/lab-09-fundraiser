import cartApi from './cart-api.js';
import customersApi from './customer-api.js';

let cart = cartApi.get();
const orderSummary = document.getElementById('summary');

const getCart = {
    display(cart) {
        if(orderSummary) {
            for(let i = 0; i < cart.length; i++) {
                const item = document.createElement('li');
                item.textContent = cart[i].name + ' ' + cart[i].price + ' ' + '(' + cart[i].quantity + ')';
                orderSummary.appendChild(item);
            }
        }
    }
};

const form = document.getElementById('order-form');
const customer = {};

const orderForm = {
    init(onAdd) {
        if(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                const elements = form.elements;

                customer.name = elements.name.value;
                customer.streetAddress = elements['street-address'].value;
                customer.city = elements.city.value;
                customer.state = elements.state.value;
                customer.zipCode = elements['zip-code'].value;
                customer.shippingStreetAddress = elements['street-address2'].value;
                customer.shippingCity = elements.city2.value;
                customer.shippingState = elements.state2.value;
                customer.shippingZipCode = elements['zip-code2'].value;

                onAdd(customer);

                form.reset();
            });
        }
    },
    getCustomer() {
        return customer;
    }
};

orderForm.init(function(customer) {
    customersApi.getAll();
    customersApi.add(customer);
});

getCart.display(cart);

export default orderForm;
