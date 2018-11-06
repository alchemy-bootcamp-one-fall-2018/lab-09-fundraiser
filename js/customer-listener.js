
const customerDetails = document.getElementById('customer-info');



const customerInfo = {   
    init(onAdd) {
        customerDetails.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = customerDetails.elements;

            const customer = {

                name: elements.name.value,
                email: elements.email.value,
                shipping: elements.shipping.value,
                billing: elements.billing.value
            };

            onAdd(customer);
            customerDetails.reset();
        });
    }

    
};




export default customerInfo;