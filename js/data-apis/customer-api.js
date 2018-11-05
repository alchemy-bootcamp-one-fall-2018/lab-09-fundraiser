let customers = [];

function saveCustomer() {
    localStorage.setItem('customer', JSON.stringify(customers));
}

const customerApi = {
    add(customer) {
        customers.push(customer);
        saveCustomer();
    }
};

export default customerApi;