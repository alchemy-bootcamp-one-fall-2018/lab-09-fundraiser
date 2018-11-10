import orderApi from '../apis/order-api.js';
// import html from './html.js';
'use strict';

const orders = orderApi.getAll();

function makeOrder(customer, products) {
    const html = `
        <div class="cust">
            <li class="name">
            Name:${customer.firstName} ${customer.lastName} 
            </li>
            <li> 
            Products Ordered:${products.name} ${products.quantity}
            </li>
         </div>
        `;   
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}
const list = document.getElementById('cart-list');
const orderList = {
    init() {
        for(let i = 0; i < orders.length; i++) {
            for(let j = 0; j < orders[i].products.length; j++) {
                const order = makeOrder(orders[i].customer, orders[i].products[j]);
                list.appendChild(order);
            }
                
        }
    }
};
orderList.init();