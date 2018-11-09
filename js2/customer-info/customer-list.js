// import makeCartItem from './../cart/cart-list.js';



function customerTable(customer) {
    const html = /*html*/`
        <tr>
            <td>${customer.name}</td>
            
        <tr>
   
   `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const table = document.getElementById('table');

const customerList = {
    init(customers) {
        for(let i = 0; i < customers.length; i++) {
            customerList.editDom(customers[i]);
        }
    },
    editDom(customer) {
        const tr = customerTable(customer);
        table.appendChild(tr);
    }
};

export default customerList;