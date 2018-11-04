import customerInfo from './customer-listener.js';
import customerApi from './customer-api.js';

// used to print to html??
//const customer = customerApi.getAll();

customerInfo.init(function(customer) {
    customerApi.add(customer);

});





