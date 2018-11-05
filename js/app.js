'use strict';

//add a new product to local storage product list on 'Add Product' click
//parse price as int when new product is added

//add quantity option
//increase quantity when adding same item to cart
//include 0's after decimal point for price

import listOrders from './order-page.js';
import custInfo from './checkout-page.js';
import orderReport from './admin-order-report.js';
import adminProducts from './admin-product-page.js';
import productsApi from './products-api.js';

productsApi.init();
listOrders.init();
custInfo.init(JSON.parse(localStorage.getItem('cart')));
orderReport.init();
adminProducts.init();