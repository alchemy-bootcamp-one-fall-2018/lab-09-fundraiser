'use strict';

const custOrders = document.getElementById('custOrders');
const customers = JSON.parse(localStorage.getItem('customers'));


function displayDetails() {
    const detailsButton = document.querySelectorAll('.details');

    detailsButton.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log(button.id);
        });
    });
}

const orderReport = {

    init() {
        if(custOrders && customers) {
            customers.forEach(function(customer) {
                var node = document.createElement('li');
                node.innerHTML = `
                    <p>${customer.fName}</p>
                    <button class="details" id="${customer.custId}">Details</button>
                     `;
              
                custOrders.appendChild(node);
                displayDetails();
            });          
        }
    }
};

export default orderReport;