'use strict';

import productsApi from './products-api.js';

const listOrders = {
    init() {
        const pickList = document.querySelectorAll('.catalog .pickList')[0];
        const products = productsApi.getProducts();

        console.log(pickList);

        pickList.forEach(function(item) {
            var node = document.createElement('li');
            node.innerHTML = '<img src="../assets/backpack.jpg">';
            item.appendChild(node);
        });
    }
};

export default listOrders;