import html from './html.js';

const addItemTable = document.getElementById('product-table'); //change id to order page id somehow

function addItem(product) {

    return html`
    <div> 
        <ul>
            <li>ID:${product.id}</li>
            <li>NAME:${product.name}</li>
            <li>DESCRIPTION:${product.description}</li>
            <li>PRICE:${product.price}</li>
            <li>IMAGE:${product.image}</li>
        <ul>
    </div>`;

}

const itemTable = {
    init(product){
        for(let i = 0; i < product.length; i++) {
            const tr = addItem(product[i]);
            addItemTable.appendChild(tr);

        }
    },
    update(product) {
        while(addItemTable.lastElementChild) {
            addItemTable.lastElementChild.remove();
        }
        itemTable.init(product);
    }
};

export default itemTable;