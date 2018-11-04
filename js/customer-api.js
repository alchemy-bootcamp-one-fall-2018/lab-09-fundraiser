let customer = [];


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
     
        customer.push(customer);
        saveCustomer();
    }
  
};


export default customerApi;