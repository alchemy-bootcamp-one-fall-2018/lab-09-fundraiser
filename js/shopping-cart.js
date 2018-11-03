import html from './html.js';


function makeItem(item){
    return html` 
    <li> ${item.name}${item.quantity} </li>
    <button id="add">Add</button>
    <button id="remove">Remove</button>
    `;
}


const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++){
            const dom = makeItem(cart[i]);
            dom.getElementById('add').addEventListener('click', function() {
                cart.push([i]);
                cart.update();
            }); 

            dom.getElementById('remove').addEventListener('click', function(){

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

