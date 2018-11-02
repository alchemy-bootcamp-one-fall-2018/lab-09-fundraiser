const addItemTable = document.getElementById('products');

function addItem(product) {

    const html = /*html*/`
    <li> 

        <p>ID:${product.id}</p>
        <p>NAME:${product.name}</p>
        <p>DESCRIPTION:${product.description}</p>
        <p>PRICE:${product.price}</p>
        <p>IMAGE:${product.image}</p>
    
    </li>`;
    const template = document.createElement('template');

    template.innerHTML = html;
    return template.content;
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