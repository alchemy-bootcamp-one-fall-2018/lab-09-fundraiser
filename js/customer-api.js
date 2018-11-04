let customer = [];
let customerForm = document.getElementById('shipping-information');

function saveCustomer() {
    localStorage.setItem('customer', JSON.stringify(customer));
}

const customerApi = {
    get() {
        const json = localStorage.getItem('customer');
        if(json) {
            customer = JSON.parse(json);
        }        
        return customer;
    },
    add(customer) {
        const orderItem = customer.find(item => {
            return item.name === customer.name;
        });

        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            customer.push({
                name: customerForm.getElementById('first-name') + ' ' + customerForm.getElementById('last-name'),
                billing: customerForm.getElementById('billing-address'),
                shipping: customerForm.getElementById('shipping-address')
            });
        }

        saveCustomer();
    },

    
};


export default customerApi;