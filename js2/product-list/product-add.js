const addProduct = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const newProduct = {
                name: elements.name.value,
                image: ('/assets/' + elements.image.value),
                description: elements.description.value,
                price: elements.price.value
            };

            onAdd(newProduct);
            
            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addProduct;