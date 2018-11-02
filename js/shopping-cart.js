import html from './html.js';

function makeProduct(product) {
    return html`
        <li>${product.name} (${product.quantity})</li>
    `;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeProduct(cart[i]);
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

const addressCheckbox = document.getElementById('add-checkbox');
// const addressShipping = document.getElementById('address');

if(addressCheckbox.checked) {
    console.log(12);
    // addressShipping = '';

}



export default shoppingCart;