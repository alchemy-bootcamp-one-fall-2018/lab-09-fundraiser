let customers = [];

function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

const customersApi = {
    add(customer) {
        customers.push(customer);
        saveCustomers();
    }
};

export default customersApi;