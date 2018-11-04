import customersApi from './customer-api.js';
import cartApi from './cartApi.js';

let cart = cartApi.get();   
let customers = customersApi.getAll(); 

const customerOrders = document.getElementById('customer-orders');

const getCustomers = {
    display(customers) {
        for(let i = 0; i < customers.length; i++) {
            
            const li = document.createElement('li');
            li.textContent += customers[i].name + ' ' + customers[i].streetAddress;
            customerOrders.appendChild(li);

            for(let i = 0; i < cart.length; i++) {
                const li = document.createElement('ul');
                li.textContent += cart[i].name + ' ' + cart[i].quantity;      
                customerOrders.appendChild(li);
            }
        }
        customersApi.getAll();
    }
};

getCustomers.display(customers);

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