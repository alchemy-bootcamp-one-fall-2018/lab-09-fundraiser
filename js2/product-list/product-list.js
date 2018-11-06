import cartApi from '../cart/cart-api.js';

function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src=${product.image} style="width: 100px">
            <button class="danger">Remove This</button>
            <button class="buy">Add to Cart</button>
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('product-list');

const productList = {
    init(products, onRemove) {
        for(let i = 0; i < products.length; i++) {
            productList.editDom(products[i]);
        }

        productList.onRemove = onRemove;
    },
    editDom(product) {
        const li = makeProduct(product);
        
        const removeButton = li.querySelector('.danger');
        const listItem = li.querySelector('li');
        removeButton.addEventListener('click', function() {
            productList.onRemove(product);
            listItem.remove();
        });

        const addButton = li.querySelector('.buy');
        addButton.addEventListener('click', function() {
            cartApi.addToCart(product);
        });

        list.appendChild(li);
    }    
};

export default productList;