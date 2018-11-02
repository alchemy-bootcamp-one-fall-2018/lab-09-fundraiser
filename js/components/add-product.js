const addProduct = {
    init(onAdd) {
        const form = document.getElementById('add-product');

        console.log('form', form);
        
        form.addEventListener('submit', function(event){
            event.preventDefault();

            const elements = form.elements;

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

export default addProduct;
