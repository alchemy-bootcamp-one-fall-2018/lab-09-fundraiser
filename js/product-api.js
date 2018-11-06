let products = [{
    name: 'Salmon River Canyon Trip',
    detail: 'The Salmon River Canyon is a substantial undertaking by any measure. Often referred to as “The Mount Everest of Oregon Whitewater,” the canyon boasts some of the most aesthetically pleasing navigable waterfalls in the Pacific Northwest.',
    price: 45,
    image: 'https://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/1398723622/dsc_0202.jpg?itok=OIgtCU5X'
}, {
    name: 'Crater Lake Hike',
    detail: 'What once was Oregon’s tallest mountain, Mount Mazama, is now the deepest lake in the United States and Oregon’s only national park.',
    price: 90,
    image: 'https://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/1515263986/dsc_0002_0.jpg?itok=L9O0KLDl'
}];

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

const productApi = {
    getAll() {
        const json = localStorage.getItem('products');
        if(json) {
            products = JSON.parse(json);
        } 
        return products;
    },
    add(product) {
        products.push(product);
        saveProducts();
    },
    remove(product) {
        const index = product.indexOf(product);
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
            return index;
        }
    }
};

export default productApi;