
function makeProduct(product) {
    const html = /*html*/`
        <li>
            <h3>${product.name}</h3>
            <p>${product.animal}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('products');

const productList = {
    init(products, onAdd) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);

        }
        productList.onAdd = onAdd;
    },
    add(product) {
        const dom = makeProduct(product);
        const addButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        addButton.addEventListener('click', function() {
            productList.onAdd(product);
            listItem.add();
        });
        list.appendChild(dom);
    }
};
    
export default productList;