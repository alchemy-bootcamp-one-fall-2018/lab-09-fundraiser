// import html from '../html.js';
// import productlist from '../product-list.js';

// const tableBody = document.getElementById('orders-body');

// function makeRow(order) {
//     return html `<tr>
//         <td>${product.name}</td>
//         <td>${product.price}</td>
//         <td>${order.name}</td>
//         <td>${order.address}</td>
//      </tr>`;
// }
// const orderTable = {
//     init(orders){
//         for(let i = 0; i < orders.length; i++) {
//             const tr = makeRow(orders[i]);
//             tableBody.appendChild(tr);
//         }
//     },
//     update(orders) {
//         //this will remove all existing rows
//         while(tableBody.lastElementChild) {
//             tableBody.lastElementChild.remove();    
//         }

//         //add new rows
//         orderTable.init(orders);
//     }

   
// };
        
// export default ordersTable;