const section = document.getElementById('order-detail');

const orderDetail = {
    update(orders) {
        orderDetail.orders = orders;
        section.querySelector('h2').textContent = orders.name;
        section.querySelector('p').textContent = orders.address;

    }
};

export default orderDetail;
