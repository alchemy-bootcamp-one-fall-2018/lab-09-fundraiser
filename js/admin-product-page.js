'use strict';

import productsApi from './products-api.js';

function removeProduct(index) {
    var products = productsApi.getProducts();
    let count = 0;

    products.splice(index, 1);

    products.forEach(function(product){
        product.id = count;
        count++;
    });

    productsApi.storeProducts(products);
    displayAdminProducts();
}

function displayAdminProducts() {
    const pickList = document.querySelector('#adminCatalog .pickList');
    const products = productsApi.getProducts();

    if(pickList){
        pickList.innerHTML = '';
        products.forEach(function(product) {
            var node = document.createElement('li');
            node.innerHTML = `
                <h3 class="productName">${product.name}</h3>
                <img src="${product.image}">
                <p class="price">$${product.price}</p>
                <p class="description">${product.description}</p>
                <button class="removeProduct red" id="${product.id}">Remove from Product List</button>
                 `;
                 
            pickList.appendChild(node);
        });

        const removeProdButton = document.querySelectorAll('.removeProduct');

        removeProdButton.forEach(function(button) {
            button.addEventListener('click', function() {
                removeProduct(button.id);
            });
        });
    }
}
addItem();

function addItem() {
    const form = document.getElementById('addItemForm');
    const inputs = document.querySelectorAll('input, textarea');
    var newProduct = {};
    //const options = document.querySelectorAll('option');



    form.addEventListener('submit', function() {
        inputs.forEach(function(input) {
            newProduct[input.name] = input.value;
        });
        
    });

}

const adminProducts = {
    init() {
        displayAdminProducts();
    }
};

export default adminProducts;