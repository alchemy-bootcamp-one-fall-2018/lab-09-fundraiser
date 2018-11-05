import cartApi from './cartApi.js';
import customersApi from './customer-api.js';

let cart = cartApi.get();
const orderSummary = document.getElementById('summary');

const getCart = {
    display(cart) {
        for(let i = 0; i < cart.length; i++) {
            const item = document.createElement('li');
            item.textContent = cart[i].name + ' ' + '(' + cart[i].quantity + ')';
            orderSummary.appendChild(item);
        }
    }
};

const form = document.getElementById('customer-info');

const orderForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const customer = {};

            customer.name = elements.name.value;
            customer.streetAddress = elements['address'].value;

            onAdd(customer);

            form.reset();
            
        });
        
    }
};

orderForm.init(function(customer) {
    customersApi.getAll();
    customersApi.add(customer);
});

getCart.display(cart);


// function setBilling(checked) {
//     if(checked) {
//         document.getElementById('address').style.display = "none";
//         document.getElementById('billing-address').value = ''; 
//     } else {
//         document.getElementById('address').style.display = "block";
//         document.getElementById('billing-address').value = document.getElementById('address').value; 
//     }
// }

// setBilling();

export default orderForm;