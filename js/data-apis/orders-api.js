let orders = [
    {
        customer: {
            name: 'Suzanne Somers',
            address: '1212 Happy Pl'
        },
        meals: [
            {
                name: 'order1',
                quantity: 2
            }
        ]
    },
    {
        customer: {
            name: 'Janelle Monáe',
            address: '#42 Jollopy Ave'
        },
        meals: [
            {
                name: 'order2',
                quantity: 3
            }
        ]
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