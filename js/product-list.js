
function addProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name">${product.name}</h3>
            <p class="detail">${product.detail}</p>
            <h4 class="price">${product.price}</h4>
            <img src="${product.image}">
        </li>
        `;
        
    const template = document.createElement('template');
        
    template.innerHTML = html;
    
    return template.content;
}



const list = document.getElementById('products');

const productsList = {
    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            productsList.add(products[i]);
        }
        productsList.onSelect = onSelect;
        productsList.products = products;
    },
    add(product) {
        const dom = addProduct(product);
        const listItem = dom.querySelector('li');

        listItem.addEventListener('click', function() {
            productsList.onSelect(product);
        });

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll[index].remove();
    }
};




export default productsList;