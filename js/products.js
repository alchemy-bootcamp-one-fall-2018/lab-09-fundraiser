const addProduct = {

    init(onAdd) {
        const form = document.getElementById('product-form'); 

        form.addEventListener('submit', function(event) {
            console.log('submit'); 
            event.preventDefault(); 

            const elements = form.elements; 

            const product = {
                mugs: elements.mugs.value,
                tshirt: elements.tshirt.value,
                totes: elements.totes.value
            }; 
            
            onAdd(product); 

            form.reset(); 

        }); 
    }

}; 

export default addProduct; 