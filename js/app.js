'use strict';

//product page
//add quantity option
//increase quantity when adding same item to cart
//include 0's after decimal point for price

import listOrders from './order-page.js';
import custInfo from './checkout-page.js';
import orderReport from './admin-order-report.js';

listOrders.init();
custInfo.init(JSON.parse(localStorage.getItem('cart')));
orderReport.init();