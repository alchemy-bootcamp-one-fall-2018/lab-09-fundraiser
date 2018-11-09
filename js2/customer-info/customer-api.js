let customers = [];

function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

const customersApi = {
    getAll() {
        const json = localStorage.getItem('customers');
        if(json) {
            console.log('got here');
            customers = JSON.parse(json);
        }
        return customers;
    },
    add(customer) {
        customers = customersApi.getAll();
        customers.push(customer);
        saveCustomers();
    }
};

export default customersApi;