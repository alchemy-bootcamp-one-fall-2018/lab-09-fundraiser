let customer = [];


function saveCustomer() {
    localStorage.setItem('customer-information', JSON.stringify(customer));
}

const customerApi = {
    getAll() {
        const json = localStorage.getItem('customer-information');
        if(json) {
            customer = JSON.parse(json);
        }        
        return customer;
    },
    add(customer) {
     
        customer.push(customer);
        saveCustomer();
    }
  
};


export default customerApi;