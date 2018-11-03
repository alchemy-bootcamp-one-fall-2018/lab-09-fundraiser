let orders = [
    {
        name: 'Susan Somers',
        address: '1212 Happy Pl'
    }
];

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

const ordersApi = {
    getAll() {
        const json = localStorage.getItem('orders');
        if(json) {
            orders = JSON.parse(json);
        }
        return orders;
    },
    add(order) {
        orders.push(order);
        saveOrders();
    }
};

export default ordersApi;