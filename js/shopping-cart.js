import html from './html.js';

function makeItem(item) {
    return html`
    <li>${item.name} <strong>(${item.quantity})</strong></li>
    `;
    //add and ADD and Remove button with 
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    //set up a for loop to retrieve any additional products added by the queue
    init(cart) {
        for(let i = 0; cart.length; i++) {
            const dom = makeItem(cart[i]);
            list.appendChild(dom);
        }
    },
    update(cart) {
        //setup a while loop for handing remove an item from cart
        while(list.lastElementChild) {
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }

};

export default shoppingCart;