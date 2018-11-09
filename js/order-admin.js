import orderApi from '../apis/order-api.js';

'use strict';

<<<<<<< HEAD
=======
const customerOrders = document.getElementById('customer-information');
>>>>>>> 4b0ef2ba3431f75726f75bcebb1a40ff8886d47d

const orders = orderApi.getAll();
console.log("orders", orders);
for(let i = 0; i < orders.length; i++) {
console.log(orders[i].customer);

}
// loop

<<<<<<< HEAD


//             let html = `
//             <h3>Customer Info</h3>
//             <p><span>Name:</span> ${customer.first - name} ${customer.last - name}</p>
//             <p><span>Shipping Address:</span><br />${customer.shipping}<br /></p>
//             <p><span>Billing Address:</span><br />${customer.billing}<br /></p>
//         `;
//     })
// });
// }
=======
getCustomers.display(customers);

>>>>>>> 4b0ef2ba3431f75726f75bcebb1a40ff8886d47d
