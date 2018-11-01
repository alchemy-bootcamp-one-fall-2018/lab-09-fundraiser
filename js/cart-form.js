


const formData = {

    init(onAdd) {
        const formInput = document.getElementById('product-form');
        console.log(formInput);

        formInput.addEventListener('sumbit', function(event) {
            event.preventDefault();

            const elements = formInput.element;

            const cartContents = {

                type: elements.grain.value,

            };
            onAdd(cartContents);
            formInput.reset();
        });
        
    }


};
export default formData;






