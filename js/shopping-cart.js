import html from './html.js';
import cartApi from './cartApi.js';

function makeProduct(product) {
    return html `
        <li>${product.name} (${product.quantity})</li>
        <button id="remove">Remove</button>
    `;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeProduct(cart[i]);
            dom.getElementById('remove').addEventListener('click', function() {
                cartApi.remove(cart[i]);
                shoppingCart.update(cart);
            });
            list.appendChild(dom);
            const total = document.getElementById('total');

            var totalItems = 0;
            for(let i = 0; i < cart.length; i++) {
                totalItems += cart[i].quantity;

            }
            total.textContent = 'Total items: ' + totalItems;
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