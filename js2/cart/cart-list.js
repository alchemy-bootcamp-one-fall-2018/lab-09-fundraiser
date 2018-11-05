function makeCartItem(cartItem) {
    const html = /*html*/`
        <li class="cart-item">
            <h3>${cartItem.name}</h3>
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
            cartList.addDom(itemsInCart[i]);
        }
    },
    addDom(cartItem) {
        const li = makeCartItem(cartItem);
        list.appendChild(li);
    }
};

export default cartList;