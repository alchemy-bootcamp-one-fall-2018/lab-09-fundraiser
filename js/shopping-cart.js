import html from './html.js';

function makeItem(thing) {
    return html`
        <li>${thing.name}<b>(${thing.quantity})</b></li>
    `;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeItem(cart[i]);
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