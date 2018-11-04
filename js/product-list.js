function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name" style="background: ${product.price};">
                ${product.name}
            </h3>
            <img src="assets/${product.image ? product.image : 'logo.png'}">
            <p class="description"> ${product.description}  
            </p>
        
        </li>
    `;

    //  Create template element to convert string to DOM
    const template = document.createElement('template');

    //  Assign innerHTML property
    template.innerHTML = html;

    // Return the `content` property which is the dom
    // (In a DocumentFragment)
    return template.content;
}

const list = document.getElementById('products');

const productList = {
    // init
    // should include:
    // 1. initial products array
    // 1. onRemove callback

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

        // send to <ul>, this will empty the fragment
        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};

export default productList;