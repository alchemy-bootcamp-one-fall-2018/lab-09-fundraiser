'use strict';


//store billing address as shipping address for customer info by default, unless box is checked
//store customer info and their product order on submit

//import productsApi from './products-api.js';
import listOrders from './order-page.js';
import custInfo from './checkout-page.js';

listOrders.init();

custInfo.init(JSON.parse(localStorage.getItem('cart')));

