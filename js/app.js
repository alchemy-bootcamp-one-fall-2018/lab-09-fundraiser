'use strict';

import productsApi from './products-api.js';
import pickList from './order-page.js';

console.log(productsApi.getProducts());

pickList.init();

