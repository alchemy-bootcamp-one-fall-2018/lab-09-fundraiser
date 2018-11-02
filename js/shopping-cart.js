

function makeItem(item) {
    const html = /*html*/`
        <li>${item.name}</li>
        <li>${item.price}</li>
        <li><strong>(${item.quantity})</strong></li>
        `;
        
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
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