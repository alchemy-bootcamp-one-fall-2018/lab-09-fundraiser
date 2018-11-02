const form = document.getElementById('products-form');
// const image = document.getElementById('image');
const name = document.getElementById('name');
const description = document.getElementById('description');
const price = document.getElementById('price');

const addItem = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const listItems = {};
            
            // listItems.image = image.value;
            listItems.name = name.value;
            listItems.description = description.value;
            listItems.price = price.value;
            

            onAdd(listItems);

            form.reset();
        });
    }
};
export default addItem;