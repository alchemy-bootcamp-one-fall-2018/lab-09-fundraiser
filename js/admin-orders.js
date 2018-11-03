// import orderForm from './checkout.js';
import customersApi from './customer-api.js';

const customerOrders = document.getElementById('customer-orders');
let customers = customersApi.get();

const getCustomers = {
    display(customers) {
        for(let i = 0; i < customers.length; i++) {
            const li = document.createElement('li');
            li.textContent = customers[i].name + ' ' + customers[i].streetAddress + ' ' + customers[i].city + ' ' + customers[i].state + ' ' + customers[i].zipCode;
            
            customerOrders.appendChild(li);
            console.log(customerOrders);
        }
    }
};

getCustomers.display(customers);

