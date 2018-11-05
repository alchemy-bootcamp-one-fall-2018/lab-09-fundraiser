function makeOrder(orders) {
    const html = /*html*/`
    <li class="order-list">
        <h3 class="name">${orders.customer.name}</h3>
    </li>
`;
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('order-list');

const orderList = {
    init(orders) {
        for(let i = 0; i < orders.length; i++) {
            orderList.add(orders[i]);
        }
        orderList.orders = orders;
        // console.log(orders);
    },
    add(order) {
        const dom = makeOrder(order);
        const listItem = dom.querySelector('li');

        listItem.addEventListener('click', function() {
            // console.log('click');
        });
        list.appendChild(dom);
    }
};

export default orderList;