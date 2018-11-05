'use strict';


//add rest of products to productList array
//reset form in admin product page
//remove type undefined off admin checkout
//add quantity option




import listOrders from './order-page.js';
import custInfo from './checkout-page.js';
import orderReport from './admin-order-report.js';
import adminProducts from './admin-product-page.js';
import productsApi from './products-api.js';

productsApi.init();
listOrders.init();
custInfo.init();
orderReport.init();
adminProducts.init();