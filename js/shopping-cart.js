import cartApi from './cart-api.js';
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');


function makeItem(item) {
    const html = /*html*/`
        <li>
        ${item.name}${item.price}<strong>(${item.quantity})</strong>
        <button id="add">Add</button>
        <button id="remove">Remove</button>
        </li>
        `;
        
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeItem(cart[i]);
            dom.getElementById('add').addEventListener('click', function() {
                console.log('made it', cart[i]);
                cartApi.add(cart[i]);
                shoppingCart.update(cart);
            });
            dom.getElementById('remove').addEventListener('click', function() {
                console.log('were alive');
                cartApi.remove(cart[i]);
                shoppingCart.update(cart);
            });
            

            list.appendChild(dom);
            // removeButton.addEventListener('click', function() {
            //     list.removeChild(dom);
            // });
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

