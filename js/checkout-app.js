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
const elements = form.elements;

const orderForm = {
    init(onAdd) {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const customer = {};
            
            customer.name = elements.name.value;
            customer.streetAddress = elements['address'].value;
            
            onAdd(customer);
            
            form.reset();
            
        });
        
    }, 
};

orderForm.init(function(customer) {
    customersApi.getAll();
    customersApi.add(customer);
});

const addCheckbox = document.getElementById('add-checkbox');
addCheckbox.addEventListener('change', function() {
    console.log(elements.addCheckbox.checked);
    const billing = document.getElementById('billing-address');

    if(elements.addCheckbox.checked) {
        billing.style.display = 'none';
    } else if(!elements.addCheckbox.checked) {
        billing.style.display = 'block';
    }
  
});

getCart.display(cart);

export default orderForm;