// import html from './html.js';
import cartApi from '../apis/cart-api.js';


function makeProduct(product) {
    const html = `

    <li>${product.name} ${(product.quantity)}
    <button id="add">add</button>
    <button id="remove">remove</button>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('cart-list');
// const submitButton = document.getElementById('submit-order');

// submitButton.addEventListener('click', function(){
//     orderApi.add(order[i]);
// //     shoppingCart.update(cart);
// });
const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeProduct(cart[i]);
            dom.getElementById('add').addEventListener('click', function(){
                cartApi.add(cart[i]);
                shoppingCart.update(cart);
            });
            dom.getElementById('remove').addEventListener('click', function(){
                cartApi.remove(cart[i]);
                shoppingCart.update(cart);
            });
            list.appendChild(dom);
        }

    },
    update(cart) {
        while(list.lastElementChild){
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }
};

export default shoppingCart; 