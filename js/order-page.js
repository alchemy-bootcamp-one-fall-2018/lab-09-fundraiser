'use strict';

import productsApi from './products-api.js';

const listOrders = {
    init() {
        const pickList = document.querySelector('#orderCatalog .pickList');
        console.log(pickList);
        const products = productsApi.getProducts();


        products.forEach(function(product) {
            var node = document.createElement('li');
            node.innerHTML = `
                <h3 class="productName">${product.name}</h3>
                <img src="${product.image}">
                <p class="price">$${product.price}</p>
                <p class="description">${product.description}</p>
                <button id="${product.id}>Add to Cart</button>
                 `;
            
            pickList.appendChild(node);
        });
    }
};

export default listOrders;