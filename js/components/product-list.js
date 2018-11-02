import html from '../helper-utilities/html.js';

function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name">
            ${product.name}
            </h3>
            <img src="assets/${product.image ? product.image : 'TKO.jpg'}">
        </li>
        `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;

}

const list = document.getElementById('products');

const productList = {
    init(products) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        } 
        productList.products = products;
    },
    add(product) {
        const dom = makeProduct(product);
        const listItem = dom.querySelector('li');
        listItem.addEventListener('click', function() {
            productList.onSelect(product);
        });
        list.appendChild(dom);
    }
}; 

export default productList;