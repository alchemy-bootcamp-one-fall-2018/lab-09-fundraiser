import cartApi from '../cart/cart-api.js';

const itemsInCart = cartApi.getAll();

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
                zip: elements.zip.value,
                nameShipping: elements['name-shipping'].value,
                streetShipping: elements['street-shipping'].value,
                cityShipping: elements['city-shipping'].value,
                stateShipping: elements['state-shipping'].value,
                zipShipping: elements['zip-shipping'].value,
                itemsPurchased: itemsInCart
            };
            console.log(itemsInCart);
            onAdd(newCustomer);
            
            form.reset();
            document.activeElement.blur();
        });
    }
};

export default addCustomer;