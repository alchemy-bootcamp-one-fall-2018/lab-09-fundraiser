import customersApi from './customer-info/customer-api.js';
import customerList from './customer-info/customer-list.js';

const customerData = customersApi.getAll();


customerList.init(customerData);

