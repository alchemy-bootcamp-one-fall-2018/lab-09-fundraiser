import itemDetail from '../../js/item-detail.js';
import cartApi from '../cart/cart-api.js';

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
                itemsPurchased = itemsPurchased + '<li id="' + customers[i].itemsPurchased[j].name + '" ' + 'class="item-details">' + customers[i].itemsPurchased[j].name + ' (' + customers[i].itemsPurchased[j].quantity + ') ' + '</li>';
            }
            customerList.editDom(customers[i], itemsPurchased);
        }
        const itemDetails = document.querySelectorAll('.item-details');
        for(let i = 0; i < itemDetails.length; i++) {
            itemDetails[i].addEventListener('click', () => {
                let itemObject = cartApi.get(itemDetails[i].id);
                console.log(itemDetails[i].id);
                console.log(itemObject);
                itemDetail.update(itemObject);
                // for(let j = 0; j < customers[i].itemsPurchased.length; j++) {
                //     console.log(itemDetails[i]);
                // }
            });
        }
    },
    editDom(customer, itemsPurchased) {
        const tr = customerTable(customer, itemsPurchased);
        table.appendChild(tr);
        // console.log(customer.itemsPurchased);
    }
};

export default customerList;