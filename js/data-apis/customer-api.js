let customers = [];

function saveCustomer() {
    localStorage.setItem('customer', JSON.stringify(customers));
}

const customerApi = {
    add(customer) {
        // 1. add to our array
        customers.push(customer);
        // 2. save array to localStorage
        saveCustomer();
    }
};

export default customerApi;