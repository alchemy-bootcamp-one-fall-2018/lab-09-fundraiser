let customers = [];

function saveCustomers() {
    localStorage.setItem('customers', JSON.stringify(customers));
}

const customerApi = {
    getAll() { 
        const json = localStorage.getItem('customers');
        if(json) {
            customers = JSON.parse(json);
        }
        return customers;

    },
    add(customer) {
        customers.push(customer);

        saveCustomers();
    }
};

export default customerApi;