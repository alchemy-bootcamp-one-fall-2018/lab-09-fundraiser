
const addProduct = {

    init(onAdd) {
        const addItemInput = document.getElementById('product-detail');
        addItemInput.addEventListener('submit', function(event) {
            event.preventDefault();

            const elements = addItemInput.elements;

            const product = {

                id: elements.idItem.value,
                name: elements.nameItem.value,
                description: elements.describeItem.value,
                price: elements.priceItem.value,
                image: elements.imageItem.value
            };

            onAdd(product);
            addItemInput.reset();
        });
    }
};

export default addProduct;