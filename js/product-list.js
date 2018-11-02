

function makeProduct(product) {
    const html = /*html*/`
        <li>
            <h3>${product.name}</h3>
            <p>${product.animal}</p>
            <p>${product.price}</p>
            <button class="danger">X</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('products');

const productList = {
    init(products, onRemove) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);

        }
        productList.onRemove = onRemove;
    },
    add(product) {
        const dom = makeProduct(product);
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            productList.onRemove(product);
            listItem.remove();
        });
        list.appendChild(dom);
    }
};

export default productList;