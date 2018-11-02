const addItem = {
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;
            const item = {
                name: elements.name.value,
                // // image: elements.image.value,
                description: elements.description.value,
                price: elements.price.value
            };

            onAdd(item);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addItem;