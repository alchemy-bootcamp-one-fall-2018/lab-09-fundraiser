const addCart = {
    
    init(onAdd){
        const productForm = document.getElementById('donation-form');
        
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = productForm.elements;
            
            const donationValue = {

                total: elements.value

            };
            onAdd(donationValue);

            productForm.reset();
        });
    }

};

export default addCart;

