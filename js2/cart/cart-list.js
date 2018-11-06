function makeCartItem(cartItem) {
    const html = /*html*/`
        <li class="cart-item">
            <h3>
                ${cartItem.name}
                <span>(${cartItem.count})
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
    init(itemsInCart) {
        for(let i = 0; i < itemsInCart.length; i++) {
            cartList.editDom(itemsInCart[i]);
        }
    },
    editDom(cartItem) {
        const li = makeCartItem(cartItem);

        // const removeButton = li.getElementById('remove-from-cart');
        // const cartListItem = li.querySelector('li');
        // removeButton.addEventListener('click', function() {
        //     productList.onRemove(cartItem);
        //     cartListItem.remove();
        //     console.log('REMOVED');
        // });

        list.appendChild(li);
    }
};

export default cartList;