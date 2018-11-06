let customers = [];

function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

const customersApi = {
    getAll() {
        const json = localStorage.getItem('customers');
        if(json) {
            customers = JSON.parse(json);
        }
        return customers;
    },
    add(customer) {
        customer['cart'] = JSON.parse(localStorage.getItem('cart'));
        customers.push(customer);
        saveCustomers();
    }
};

export default customersApi;
