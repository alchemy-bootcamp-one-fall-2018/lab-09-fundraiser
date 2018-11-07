import cartApi from '../cart/cart-api.js';

function makeCartItem(cartItem) {
    const html = /*html*/`
        <li class="cart-item">
            <h3>
                ${cartItem.name}
                <span>(${cartItem.quantity})
            </h3>
            <button id="add-to-cart">+</button>
            <button id="remove-from-cart">-</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content; 
}

const list = document.getElementById('cart-list');

const cartList = {
    init(itemsInCart, onRemove) {
        console.log(list.innerHTML);
        list.innerHTML = '';
        for(let i = 0; i < itemsInCart.length; i++) {
            cartList.editDom(itemsInCart[i]);
        }
        cartList.onRemove = onRemove;
    },
    editDom(cartItem) {
        const li = makeCartItem(cartItem);
        
        const addButton = li.querySelector('#add-to-cart');
        addButton.addEventListener('click', function() {
            cartApi.addToCart(cartItem);
            cartList.init(cartApi.getAll(), function(cartItem) {
                cartApi.remove(cartItem);
            });
        });

        const removeButton = li.querySelector('#remove-from-cart');
        const listItem = li.querySelector('li');
        removeButton.addEventListener('click', function() {
            if(cartItem.quantity <= 1) {
                listItem.remove();
                cartApi.remove(cartItem);
                console.log('foo');
            } else {
                cartList.onRemove(cartItem);
                
                cartList.init(cartApi.getAll(), function(cartItem) {
                    cartApi.remove(cartItem);
                });
                console.log('bar');
            }
        });
        list.appendChild(li);
        // document.getElementById('cart-list').innerHTML = cartItem;
    }
};

export default cartList;