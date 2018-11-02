import html from './html.js';

const printOrderPage = document.querySelector('ul'); 
console.log(printOrderPage);
function addItem(product) {

    return html`
    <li> 
        <p>ID:${product.id}</p>
        <p>NAME:${product.name}</p>
        <p>DESCRIPTION:${product.description}</p>
        <p>PRICE:${product.price}</p>
        <p>IMAGE:${product.image}</p>
    </li>`;

}

const orderPage = {
    init(product){
        for(let i = 0; i < product.length; i++) {
            const tr = addItem(product[i]);
            printOrderPage.appendChild(tr);

        }
    },
    update(product) {
        while(printOrderPage.lastElementChild) {
            printOrderPage.lastElementChild.remove();
        }
        orderPage.init(product);
    }
};

export default orderPage;