'use strict';

const custOrders = document.getElementById('custOrders');
const customers = JSON.parse(localStorage.getItem('customers'));


function displayDetails() {
    const detailsButton = document.querySelectorAll('.details');
    const asideDetail = document.getElementById('custDetail');


    detailsButton.forEach(function(button) {
        button.addEventListener('click', function() {
            asideDetail.style.display = 'block';
            asideDetail.innerHTML = customers[button.id].fName;
        });
    });
}

const orderReport = {

    init() {
        if(custOrders && customers) {
            customers.forEach(function(customer) {
                var node = document.createElement('li');
                node.innerHTML = `
                    <p><pre>${customer.fName}  Total: $${customer.cartTotal}</pre></p>
                    <button class="details" id="${customer.custId}">Details</button>
                     `;
              
                custOrders.appendChild(node);
            });          
        }
        displayDetails();
    }
};

export default orderReport;