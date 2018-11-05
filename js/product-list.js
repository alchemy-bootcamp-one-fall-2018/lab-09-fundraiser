function makeProduct(product) {
    const html = /*html*/`
        <li>
            <h3>${product.name}</h3>
            <h4>${product.animal}</h4>
            <p>${product.price}</p>
            <img src="${product.image}">
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