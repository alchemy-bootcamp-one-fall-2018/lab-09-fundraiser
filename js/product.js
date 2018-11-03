// import productsApi from './products-api.js';

//this where a user can select item/items and add to a cart and then go immediately next to a cart where they place an order 

const addCart = {
    
    init(onAdd){
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