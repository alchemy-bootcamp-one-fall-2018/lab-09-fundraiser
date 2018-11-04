

//this where a admin can add item/items to sell

const addProduct = {
    
    init(onAdd){
        let form = document.getElementById('add-form');
        
        //add .toUpperCase  to form also use the innerHTML
        // let name = form.document.querySelector.innerHTML.toUpperCase();
        // console.log(name); 
        // console.log(form);  
        //becareful you could target the image doing this and git a bunch of 404s

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const elements = form.elements;
            //console.log(elements);
            
            const product = {
                
                name: elements.name.value,
                description: elements.description.value,
                //price: elements.price.value <--clears the queue
                image: elements.image.value
               
                
                
            };
            // wanted to turn name all caps --feature not working 
            //var uppercased = document.querySelector('.name');
            // var property = window.getComputedStyle(uppercased).getPropertyValue('text-transform');
            // if(property === 'uppercase') {
            //     uppercased.style.letterSpacing = '5px';
            // }  
            onAdd(product);
            
            form.reset();
        });
    }
    
};
// addCart.init();     

export default addProduct;


//event listener is triggered when we hit the submit, which then runs the 
//anonymous function, which is defined from lines 7-22