/* eslint-disable indent */
function makeProduct(product) {
    const html = `
        <li class="product">
            <img src="assets/${product.image ? product.image : 'logo.png'}">
            <h3 class="name">
            ${product.name + ' :'}
            </h3>
            <p class="description">
            ${product.description}
            </p>
            <button id="add"> Add </button>
        </li>
        `;

    const template = document.createElement('template'); 

    template.innerHTML = html; 

    return template.content;
    
}

const list = document.getElementById('new-product');

const productList = {
    init(products, onSelect) {
        console.log('hello', products); 
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        }
        productList.onSelect = onSelect; 
        productList.products = products; 
    }, 
    add(product) {
        // console.log('productList.add', product); 
        const dom = makeProduct(product); 

        const listItem = dom.getElementById('add'); 

        listItem.addEventListener('click', function() {
                productList.onSelect(product); 
        }); 

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();

    }
}; 

export default productList; 