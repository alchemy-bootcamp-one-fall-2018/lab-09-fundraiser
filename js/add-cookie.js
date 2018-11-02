const addCookie = {
  // "init" method for initializing the component
  // 1. passed data or callback functions
  // 2. setup some event listeners
    init(onAdd) {
        const form = document.getElementById('add-form');

      // "standard" way to add event listeners in JavaScript
        form.addEventListener('submit', function(event) {
          // prevent form from reloading page
            event.preventDefault();

          // form elements
            const elements = form.elements;

          // get the values from the form controls
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