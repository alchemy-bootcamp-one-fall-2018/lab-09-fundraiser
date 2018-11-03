import orderList from './components/order-list.js';
import ordersApi from './data-apis/orders-api.js';
import orderDetail from './components/order-detail.js';

const order = ordersApi.getAll();

orderList.init(order, function(order) {
    orderDetail.update(order);
});
