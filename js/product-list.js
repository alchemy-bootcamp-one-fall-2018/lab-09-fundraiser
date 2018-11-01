import html from './html.js';

function addProduct(product) {
    const html =  `

    `;

    const template = document.createElement('template');
    
    template.innerHTML = html;

    return template.content;
}



const list = document.getElementById('products');

const productsList = {
    init(products) {
        for(let i = 0; i < products.length; i++) {
            const dom = addProduct(products[i]);
            list.appendChild(dom);
        }

    },
    add(product) {
        const dom = 
    }
};




export default productsList;