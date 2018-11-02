const form = document.getElementById('products-form');
const itemName = document.getElementById('item');
const itemDescription = document.getElementById('item-description'),

const productForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const listItems = {};
            // console.log(products[1].value);
            
            listItems.itemName = itemName.value;
            listItemsn.itemDescription = itemDescription.value
            

            onAdd(listItems);

            // form.reset();
        });
    }
};
export default productForm;