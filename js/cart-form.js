
const formData = {

    init(onAdd) {
        const formInput = document.getElementById('product-form');
        console.log(formInput);

        formInput.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = formInput.elements;

            const cartContents = {

                grain: elements.grain.value,
                fruit: elements.fruit.value,
                beans: elements.beans.value

            };

            onAdd(cartContents);
            formInput.reset();
            console.log(cartContents);
        });
    }

};
export default formData;






