
function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name">
            ${product.name}
            </h3>
            <img src="./js/assets/${product.image ? product.image : 'TKO.jpg'}">
            <button id="remove">Remove</button>
        </li>
        `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('product-list');

const productList = {
    init(products, onIncrement, onDecrement) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        } 
        productList.onIncrement = onIncrement;
        productList.products = products;
        productList.remove = onDecrement;
    },
    add(product) {
        const dom = makeProduct(product);
        const listItem = dom.querySelector('li');
        listItem.addEventListener('click', function() {
            productList.onIncrement(product);
        });
        const buttonRemove = dom.querySelector('button');
        buttonRemove.addEventListener('click', function() {
            productList.onDecrement(product);
        });
        list.appendChild(dom);
    }
}; 

export default productList;