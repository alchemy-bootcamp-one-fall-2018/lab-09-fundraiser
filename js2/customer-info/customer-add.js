const addCustomer = {
    init(onAdd) {
        const form = document.getElementById('billing-info');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = form.elements;

            const newCustomer = {
                name: elements.name.value,
                street: elements.street.value,
                city: elements.city.value,
                state: elements.state.value,
                zip: elements.zip.value
            };
            console.log(newCustomer);
            onAdd(newCustomer);
            
            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addCustomer;