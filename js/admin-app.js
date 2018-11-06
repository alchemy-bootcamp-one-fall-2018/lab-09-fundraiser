import addCart from './test-print.js';
import customerApi from './customer-api.js';





const customer = customerApi.getAll();



addCart.init(customer);
