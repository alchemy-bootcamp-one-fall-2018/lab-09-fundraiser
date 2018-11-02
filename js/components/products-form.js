const form = document.getElementById('products-form');
const name = document.getElementById('item');
const description = document.getElementById('item-description');
const price = document.getElementById('item-price');

const productForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const listItems = {};
            // console.log(products[1].value);
            
            listItems.name = name.value;
            listItems.description = description.value;
            listItems.price = price.value;
            

            onAdd(listItems);

            // form.reset();
        });
    }
};
export default productForm;