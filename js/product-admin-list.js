/* eslint-disable indent */
function makeProduct(product) {
    const html = `
        <li class="product">
            <h3 class="name" style="background: ${product.name};">
                ${product.description}
            </h3>
            <img src=assets/${product.image ? product.image : 'logo.png'}">
            </li>
        `;

    const template = document.createElement('template'); 

    template.innerHTML = html; 

    return template.content;
    
}

const list = document.getElementById('products');

const productList = {
    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        }
        productList.onSelect = onSelect; 
        productList.products = products; 
    }, 
    add(product) {
        const dom = makeProduct(product); 

        const listItem = dom.querySelector('li'); 

        listItem.addEventListener('click', function(){
                productList.onSelect(product); 
        }); 

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
}; 

export default productList; 