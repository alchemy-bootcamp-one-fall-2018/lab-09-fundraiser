'use strict';

const custOrders = document.getElementById('custOrders');
const customers = JSON.parse(localStorage.getItem('customers'));


function displayDetails() {
    const detailsButton = document.querySelectorAll('.details');
    const asideDetail = document.getElementById('custDetail');

    detailsButton.forEach(function(button) {
        button.addEventListener('click', function() {
            asideDetail.style.display = 'inline-block';
            const customer = customers[button.id];

            let html = `
                <h3>Customer Info:</h3>
                <p><span>Name:</span> ${customer.fName} ${customer.lName}</p>
                <p><span>Shipping Address:</span><br />${customer.shipStreet1}<br />${customer.shipStreet2}<br />${customer.shipCity}, ${customer.shipZip}</p>
            `;

            if(customer.billStreet1) {
                html += `<p><span>Billing Address:</span><br />${customer.billStreet1}<br />${customer.billStreet2}<br />${customer.billCity}, ${customer.billZip}</p>
                `;
            } else {
                html += '<p><span>Billing Address:</span><br />Same as Shipping Address</p>';
            }

            html += '<h3>Ordered Products:</h3>';

            customer.cart.forEach(function(cartItem) {
                html += `<p>
                    <span>Product ID:</span> ${cartItem.id}<br />
                    <span>Product Name:</span> ${cartItem.name}<br />
                    <span>Price:</span> $${cartItem.price}<br />
                    <span>Type:</span> ${cartItem.type}

                </p>`;
            });

            html += `<h2>Cart Total: $${customer.cartTotal}</h2>`;

            asideDetail.innerHTML = html;
        });
    });
}

const orderReport = {

    init() {
        if(custOrders && customers) {
            customers.forEach(function(customer) {
                var node = document.createElement('tr');
                node.innerHTML = `
                    <td>${customer.fName}</td>
                    <td>$${customer.cartTotal}</td>
                    <td><button class="details" id="${customer.custId}">Details</button></td>
                     `;
              
                custOrders.appendChild(node);
            });          
        }
        displayDetails();
    }
};

export default orderReport;