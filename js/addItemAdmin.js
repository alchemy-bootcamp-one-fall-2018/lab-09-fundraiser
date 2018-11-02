import html from './html.js';


const addItemTable = document.getElementById('productTable'); // no correct id

function addItem(product) {

    return html`
    <div> 
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.image}</td>
        </tr>
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
