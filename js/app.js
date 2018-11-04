'use strict';

//add a method to productsApi that stores given products list (as parameter) to local storage
//init method in products-api calls storing function and passes productList array
//getProducts method in products-api returns product list from local storage, not productList array
//removeProduct function in admin-product.js stores the new product list (call store method from api) before calling display

//add a new product to local storage product list on 'Add Product' click

//add quantity option
//increase quantity when adding same item to cart
//include 0's after decimal point for price

import listOrders from './order-page.js';
import custInfo from './checkout-page.js';
import orderReport from './admin-order-report.js';
import adminProducts from './admin-product-page.js';
// import productsApi from './products-api.js';

// productsApi.init();
listOrders.init();
custInfo.init(JSON.parse(localStorage.getItem('cart')));
orderReport.init();
adminProducts.init();