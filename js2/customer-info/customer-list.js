import cartList from './../cart/cart-list.js';

function customerTable(customer, itemsPurchased) {
    const html = /*html*/`
        <details>
            <summary>   
                <tr>
                    <td>${customer.name}</td>
                    <td>$${customer.itemTotal}</td>
                <tr>
            </summary>
            <ul id="cart-list">
                ${itemsPurchased}
            </ul>
        </details>
   `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const table = document.getElementById('table');

const customerList = {
    init(customers) {
        for(let i = 0; i < customers.length; i++) {
            let itemsPurchased = '';
            for(let j = 0; j < customers[i].itemsPurchased.length; j++) {
                itemsPurchased = itemsPurchased + '<li>' + customers[i].itemsPurchased[j].name + '</li>';
            }
            customerList.editDom(customers[i], itemsPurchased);
        }
    },
    editDom(customer, itemsPurchased) {
        const tr = customerTable(customer, itemsPurchased);
        table.appendChild(tr);
        // console.log(customer.itemsPurchased);
    }
};

export default customerList;