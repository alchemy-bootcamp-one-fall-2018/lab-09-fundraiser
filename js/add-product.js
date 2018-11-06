const addProduct = {
    init(onAdd) {
        const form = document.getElementById('addForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const product = {
                name: elements.name.value,
                detail: elements.detail.value,
                price: elements.price.value,
                image: elements.image.value
            };
            onAdd(product);
            form.reset();
        });
    }
};

export default addProduct;