// const addItemTable = document.getElementById('products');

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
const list = document.getElementById('products');

const itemTable = {
    init(product, onSelect) {
        for(let i = 0; i < product.length; i++) {
            itemTable.add(product[i]);
        }
        itemTable.onSelect = onSelect;
        itemTable.products = product;
    },
    add(product) {
        const dom = addItem(product);
        const listItem = dom.querySelector('li');

        listItem.addEventListener('click', function(){
            itemTable.onSelect(product);
        });

        list.appendChild(dom);
        
    },

    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};

//             const tr = addItem(product[i]);
//             addItemTable.appendChild(tr);

//         }
//     },
//     update(product) {
//         while(addItemTable.lastElementChild) {
//             addItemTable.lastElementChild.remove();
//         }
//         itemTable.init(product);
//     }
// };

export default itemTable;