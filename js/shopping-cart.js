
import cartApi from './cart-api.js';

function makeItem(item){
    const html = /*html*/` 
    <li> Item:${item.name}Quantity:${item.quantity} </li>
    <button id="add">Add</button>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}

const list = document.getElementById('product-list');


const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++){
            const dom = makeItem(cart[i]);
            dom.getElementById('add').addEventListener('click', function() {
                cartApi.add(cart[i]);
                shoppingCart.update(cart);
            }); 

            list.appendChild(dom);
        }
    },
    update(cart) {
        while(list.lastElementChild) {
            list.lastElementChild.remove();

        }
        shoppingCart.init(cart);
    }
};


export default shoppingCart;