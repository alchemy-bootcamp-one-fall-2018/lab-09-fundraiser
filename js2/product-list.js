function makeProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <img src=${product.image} style="width: 100px">
        </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('product-list');

const productList = {
    init(products) {
        for(let i = 0; i < products.length; i++) {
            productList.create(products[i]);
        }
    },
    create(product) {
        const li = makeProduct(product);
        list.appendChild(li);
    }      
};

export default productList;