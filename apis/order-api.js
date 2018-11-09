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