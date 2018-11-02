'use strict';

import productsApi from './products-api.js';
import listOrders from './order-page.js';

console.log(productsApi.getProducts());

listOrders.init();

