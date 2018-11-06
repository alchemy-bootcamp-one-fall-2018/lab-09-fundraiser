import customersApi from './customer-api.js';

const customerOrders = document.getElementById('customer-orders');

const getCustomers = {
    display() {
        const customers = customersApi.getAll();
        for(let i = 0; i < customers.length; i++) {

            const li = document.createElement('li');
            li.textContent += customers[i].name + ' ' + customers[i].shippingStreetAddress + ' ' + customers[i].shippingCity + ' ' + customers[i].shippingState + ' ' + customers[i].shippingZipCode;
            customerOrders.appendChild(li);  
            
            for(let k = 0; k < customers[i].cart.length; k++) {
                const item = document.createElement('ul');
                item.textContent += customers[i].cart[k].name + ' ' + customers[i].cart[k].quantity;
                customerOrders.appendChild(item);
            }
        }

    }
};

getCustomers.display();

