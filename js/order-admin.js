import orderApi from '../apis/order-api.js';

'use strict';


const orders = orderApi.getAll();
console.log("orders", orders);
for(let i = 0; i < orders.length; i++) {
console.log(orders[i].customer);

}
// loop



//             let html = `
//             <h3>Customer Info</h3>
//             <p><span>Name:</span> ${customer.first - name} ${customer.last - name}</p>
//             <p><span>Shipping Address:</span><br />${customer.shipping}<br /></p>
//             <p><span>Billing Address:</span><br />${customer.billing}<br /></p>
//         `;
//     })
// });
// }
