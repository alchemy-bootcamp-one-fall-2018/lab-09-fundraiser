import productApi from './products-api.js';

const addCart = {
    
    init(){
        const productForm = document.getElementById('donation-form');
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = productForm.elements;
            console.log(elements);
            
            const donationValue = {
                
                total: elements.donation.value
                
            };
            onAdd(donationValue);
            
            productForm.reset();
        });
    }
    
};
// addCart.init();     

export default addCart;


//event listener is triggered when we hit the submit, which then runs the 
//anonymous function, which is defined from lines 7-22