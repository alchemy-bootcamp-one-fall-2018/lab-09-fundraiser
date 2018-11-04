import html from './html.js';
import cartApi from './cart-api.js';

function makeItem(item) {
    return html`
    <li>${item.name} <strong>(${item.quantity})</strong></li>
    <li><button id="add" type="button">ADD ITEM</button></li>
    <li><button id="remove" type="button">REMOVE ITEM</button></li>
    `;
    //add and ADD and Remove button with IDs
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    //set up a for loop to retrieve any additional products added by the queue
    init(cart) {
        for(let i = 0; cart.length; i++) {
            const dom = makeItem(cart[i]);
           
        
            dom.getElementById('add').addEventListener('click', function() {
                cartApi.add(cart[i]);
                shoppingCart.update(cart);
            }); 
            dom.getElementById('remove').addEventListener('click', function() {
                cartApi.remove(cart[i]);
                shoppingCart.update(cart);
            });

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