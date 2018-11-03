import ordersApi from './data-apis/orders-api.js';
import orderList from './components/order-list.js';

const order = ordersApi.getAll();

orderList.init(order);