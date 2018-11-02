const form = document.getElementById('products-form');
const itemName = document.getElementById('item,');

const productForm = {
    init(onAdd) {
        form.addEventListener('submit', function(product) {
            product.preventDefault();

            const products = form.elements;
            const listItems = {};
            
            products.itemName = products.item.value;
            console.log('item', products.itemName);

            onAdd(listItems);

            form.reset();
        });
    }
};
export default productForm;