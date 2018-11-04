

//this where a admin can add item/items to sell

const addProduct = {
    
    init(onAdd){
        const form = document.getElementById('add-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            //console.log(elements);
            
            const product = {
                
                name: elements.name.value,
                description: elements.description.value,
                image: elements.image.value
               
                
                
            };
            onAdd(product);
            
            form.reset();
        });
    }
    
};
// addCart.init();     

export default addProduct;


//event listener is triggered when we hit the submit, which then runs the 
//anonymous function, which is defined from lines 7-22