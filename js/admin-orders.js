import customersApi from './customer-api.js';
import cartApi from './cart-api.js';

let cart = cartApi.get();   
let customers = customersApi.getAll(); 



const customerOrders = document.getElementById('customer-orders');

const getCustomers = {
    display(customers) {
        for(let i = 0; i < customers.length; i++) {
            const li = document.createElement('li');
            li.textContent += customers[i].name + ' ' + customers[i].streetAddress + ' ' + customers[i].city;
            customerOrders.appendChild(li);
            console.log(customerOrders);
            for(let i = 0; i < cart.length; i++) {
                const li2 = document.createElement('ul');
                li2.textContent += cart[i].name + ' ' + cart[i].price + ' ' + cart[i].quantity;      
                customerOrders.appendChild(li2);
            }
        }
        customersApi.getAll();
    }
};

getCustomers.display(customers);

