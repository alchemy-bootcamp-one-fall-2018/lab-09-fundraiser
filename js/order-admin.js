import orderApi from '../apis.order-api';

'use strict';


const orders = document.getElementById('custOrders');
// changed from cusrtomer-list
const order = JSON.parse(localStorage.getItem('orders'));

function displayDetails() {
    const detailsButton = document.querySelectorAll('details');
    // name details
    const asideDetail = document.getElementById('custDeatil');

    detailsButton.forEach(function(button) {
        button.addEventListener('click', function() {
            asideDetail.style.display = 'inline-block';
            const customer = orders[button.id];

            let html = `
            <h3>Customer Info</h3>
            <p><span>Name:</span> ${customer.first - name} ${customer.last - name}</p>
            <p><span>Shipping Address:</span><br />${customer.shipping}<br /></p>
            <p><span>Billing Address:</span><br />${customer.billing}<br /></p>
        `;

            if(customer.billing) {
                html += `<p><span>Billing Address:</span><br />${customer.billing}<br /></p>
            `;

            } else {
                html += '<p><span>Billing Address:</span><br />Same as Shipping Adress</p>';
            }
            html += '<h3>Ordered Products:</h3>';

            customer.cart.forEach(function(cartItem) {
                html += `<p>
                    <span>Product Name:</span> ${cartItem.name} <br />
            
                    <span>Product Name:</span> ${cartItem.name} </p>`;

            });
            html += `<h2>Cart Total: $${customer.cartTotal}</h2>`;
            asideDetail.innerHTML = html;
        });
    });
}
            
const orderReport = {
    init() {
        if(orders && customers) {
            customers.forEach(function(customer) {
                var node = document.createElement('tr');
                node.innerHTML = `
                    <td>${customer.first - name}</td>
                    <td>${customer.last - name}</td>
                    <td>$${customer.cartTtotal}</td>
                    <td><button class="details" id="${customer.custId}">Details</button></td>
                    `;
                custOrders.appendChild(node);
            });

        }
        displayDetails();
    }
};
            
export default orderReport;