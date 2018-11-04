import customerInfo from './customer-listener.js';
import customerApi from './customer-api.js';
import customerTable from './admin-info.js';

const customer = customerApi.getAll();

customerInfo.init(function(customer) {
    customerApi.add(customer);

});

customerTable.init(customer);



