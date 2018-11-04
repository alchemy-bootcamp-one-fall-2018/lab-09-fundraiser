'use strict';

const custOrders = document.getElementById('custOrders');
const customers = JSON.parse(localStorage.getItem('customers'));

const orderReport = {

    init() {
        if(custOrders && customers) {
            customers.forEach(function(customer) {
                var node = document.createElement('li');
                node.innerHTML = `
                    <p>${customer.fName}</p>
                    <button class="details">Details</button>
                     `;
                     
                custOrders.appendChild(node);

            });
            
        }
    }

};

export default orderReport;