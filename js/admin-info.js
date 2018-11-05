// // currently doesnt do anything
// function addInfo(customer) {

//     const html = /*html*/`
//     <li> 
    
//         <p>NAME:${customer.name}</p>
//         <p>EMAIL:${customer.email}</p>
//         <p>SHIPPING:${customer.shipping}</p>
//         <p>BILLING:${customer.billing}</p>
    
//     </li>`;
//     const template = document.createElement('template');

//     template.innerHTML = html;
//     return template.content;
// }

// const customerList = document.getElementById('admin-info');

// const customerTable = {
//     init(customer, onSelect) {
//         for(let i = 0; i < customer.length; i++) {
//             customerTable.add(customer[i]);
//         }
//         customerTable.onSelect = onSelect;
//         customerTable.customers = customer;
//     },
//     add(customer) {
//         const dom = addInfo(customer);
//         const listInfo = dom.querySelector('li');

//         listInfo.addEventListener('click', function(){
//             customerTable.onSelect(customer);
//         });

//         customerList.appendChild(dom);
        
//     },

//     remove(index) {
//         customerList.querySelectorAll('li')[index].remove();
//     }
// };

// export default customerTable;