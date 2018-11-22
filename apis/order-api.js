let orders = [];


function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

const orderApi = {
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
export default orderApi;



    // add(product) {
    //     const orderItem = cart.find(item => {
    //         return item.name === product.name;
    //     });

    //     if(orderItem) {
    //         orderItem.quantity++;
    //     }
    //     else {
    //         cart.push({
    //             name: product.name,
    //             quantity: 1
    //         });
    //     }

    //     saveOrders();
    // },

    // remove(product) {
    //     const removeItem = cart.find(item => {
    //         return item.name === product.name;
    //     });
    //     const index = cart.indexOf(product);
    //     if(removeItem) {
    //         removeItem.quantity--;
    //     }
    //     else if(index !== -1) {
    //         cart.splice(index, 1);
    //         saveCart();
    //         return index;
    //     }
    // };