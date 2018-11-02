const addProduct = {
    init(onAdd) {
        const form = document.getElementById('product-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const product = {
                name: elements.name.value,
                price: elements.price.value,
                animal: elements.animal.value
            };

            onAdd(product);

            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addProduct;