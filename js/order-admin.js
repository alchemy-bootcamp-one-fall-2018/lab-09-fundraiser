import customerApi from './customer-api.js';
import cartApi from './cart-api.js';

let cart = cartApi.get();
let customers = customerApi.getAll();

const customerOrders = document.getElementById('customer-list');

const getCustomers = {
    display(customers) {
        for(let i = 0; i < customers.length; i ++) {
            const li = document.createElement('li');
            li.textContent += customers[i].name + ' ' + 
            customers[i].streetAddress + ' ' + 
            customerOrders.appendChild(li);

            for(let i = 0; i < cart.length; i++) {
                const li = document.createElement('ul');
                li.textContent += cart[i].name + ' ' +
                cart[i].quantity;
                customerOrders.appendChild(li);
            }
        }
        customerApi.getAll();
    }
};

getCustomers.display(customers);