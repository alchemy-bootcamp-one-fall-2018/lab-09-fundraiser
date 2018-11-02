
function addProduct(product) {
    const html = /*html*/`
        <li class="product">
            <h3 class="name">${product.name}</h3>
            <h3 class="detail">${product.detail}</h3>
            <h3 class="price">${product.price}</h3>
        </li>
        `;
        
    const template = document.createElement('template');
        
    template.innerHTML = html;
    
    return template.content;
}



const list = document.getElementById('products');

const productsList = {
    init(products) {
        for(let i = 0; i < products.length; i++) {
            productsList.add(products[i]);
        }
        productsList.products = products;
    },
    add(product) {
        const dom = addProduct(product);
        list.appendChild(dom);
    }
};




export default productsList;