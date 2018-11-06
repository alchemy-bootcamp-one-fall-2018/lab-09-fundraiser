
function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name">
            ${product.name}
            </h3>
            <img src="./js/assets/${product.image ? product.image : 'TKO.jpg'}">
            <div class="order-buttons hidden">
            <button class="increment">Add</button>
            <button class="decrement">Remove</button>
            </div>
        </li>
        `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('product-list');

const productList = {
    init(products, onSelect, onOrder) {
        productList.products = products;
        productList.onSelect = onSelect;
        productList.onOrder = onOrder;

        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        } 
    },
    add(product) {
        const dom = makeProduct(product);
        const listItem = dom.querySelector('li');
        if(productList.onSelect) {
            listItem.addEventListener('click', function() {
                productList.onSelect(product);
            });
        }
        if(productList.onOrder) {
            listItem.classList.add('order');
            const buttonsContainer = dom.querySelector('.order-buttons');
            buttonsContainer.classList.remove('.hidden');
            
            const increment = dom.querySelector('button.increment');
            const decrement = dom.querySelector('button.decrement');

            increment.addEventListener('click', function() {
                productList.onOrder(product, 1);
            });

            decrement.addEventListener('click', function() {
                productList.onOrder(product, -1);
            });
        }
        list.appendChild(dom);
    }
}; 

export default productList;