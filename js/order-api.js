import cartApi from './cart-api.js';

const cart = cartApi.get();



const ordersData = [];

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(ordersData));
}

const orderApi = {
    add(order) {
        let newOrder = {};
        newOrder.customer = order;
        newOrder.products = cart;    
        ordersData.push(newOrder);
        saveOrders();
    }
};

export default orderApi;