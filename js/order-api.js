const orders = [];

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

const orderApi = {
    add(order) {
        orders.push(order);
        saveOrders();
    }
};

export default orderApi;