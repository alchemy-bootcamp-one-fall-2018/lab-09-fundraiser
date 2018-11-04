'use strict';

import productsApi from './products-api.js';
import addToCart from './add-to-cart.js';
import custInfo from './checkout-page.js';

function checkout() {
    const checkoutButton = document.getElementById('checkout');

    if(checkoutButton) {
        checkoutButton.addEventListener('click', function(){
            window.location = '../html/checkout-page.html';
        });
    }
}

const listOrders = {
    init() {
        const pickList = document.querySelector('#orderCatalog .pickList');
        const products = productsApi.getProducts();

        if(pickList){
            products.forEach(function(product) {
                var node = document.createElement('li');
                node.innerHTML = `
                    <h3 class="productName">${product.name}</h3>
                    <img src="${product.image}">
                    <p class="price">$${product.price}</p>
                    <p class="description">${product.description}</p>
                    <button class="addToCart" id="${product.id}">Add to Cart</button>
                     `;
                     
                pickList.appendChild(node);
            });
        }
                
        
        const addCartButton = document.querySelectorAll('.addToCart');

        addCartButton.forEach(function(button) {
            button.addEventListener('click', function() {
                addToCart.init(button.id);
            });
        });

        checkout();
    }
};



export default listOrders;