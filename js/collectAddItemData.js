


const addItemInput = document.getElementById('addItemForm');


const addItemData = {

    init(onAdd) {
        addItemInput.addEventListener('submit', function(event){
            event.preventDefault();


            const elements = addItemInput.elements;
            const productData = {};

            productData.id = elements.idItem.value;
            productData.name = elements.nameItem.value;
            productData.description = elements.describeItem.value;
            productData.price = elements.priceItem.value;
            productData.image = elements.imageItem.value;

            onAdd(productData);
            console.log(productData);
            addItemInput.reset();
        });
    }
};

export default addItemData;