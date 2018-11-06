
const addProduct = {
    // "init" method to initialize the component
    // pass the date or callback functions
    // setup event listeners
    init(onAdd) {
        const form = document.getElementById('new-product');
    

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;
            const product = {
                name: elements.name.value,
                image: elements.image.value,
                description: elements.description.value
            };
            onAdd(product);
        });

    }
};

export default addProduct;
