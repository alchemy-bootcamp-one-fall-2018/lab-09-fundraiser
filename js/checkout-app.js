import customerApi from './customer-api.js';

//most recent comment, in case later necessary
// import cartApi from './cart-api.js';


// let cart = cartApi.get();


const form = document.getElementById('customer-information');

// checkout.init(cart, customer);



const orderForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;

            const customer = {};

            customer.firstName = elements.name1.value.getElementById('first-name');
            customer.lastName = elements.name2.value.getElementById('last-name');
        


            onAdd(customer);
            form.reset();

        });

        orderForm.init(function(customer) {
            customerApi.getAll();
            customerApi.add(customer);
        });
    }

};
