import orderApi from '../apis/order-api.js';

'use strict';


const orders = orderApi.getAll();
console.log("orders", orders);
for(let i = 0; i < orders.length; i++) {
console.log(orders[i].customer);

}
// loop



