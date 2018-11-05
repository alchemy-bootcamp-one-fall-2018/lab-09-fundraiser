function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src=${product.image} style="width: 100px">
            <button class="danger">Remove This</button>
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
            productList.addDom(products[i]);
        }

        productList.onRemove = onRemove;
    },
    addDom(product) {
        const li = makeProduct(product);
        
        const removeButton = li.querySelector('button');
        const listItem = li.querySelector('li');
        removeButton.addEventListener('click', function() {
            productList.onRemove(product);
            listItem.remove();
        });

        list.appendChild(li);
    }    
};

export default productList;