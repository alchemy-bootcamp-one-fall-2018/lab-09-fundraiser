const addCookie = {
 
    init(onAdd) {
        const form = document.getElementById('add-form');

        form.addEventListener('submit', function(event) {

            event.preventDefault();
            
            const elements = form.elements;
            const cookie = {
                id: elements.id.value,
                name: elements.name.value,
                description: elements.description.value,
                price: elements.price.value,
                image: elements.image.value
            };

            onAdd(cookie);

            form.reset();
            document.activeElement.blur();
        });

    }
};

export default addCookie;