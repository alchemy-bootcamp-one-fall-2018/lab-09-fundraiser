let products = [{
    name: 'Trip',
    detail: 'Best',
    price: 45,
    image: 'https://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/1398723622/dsc_0202.jpg?itok=OIgtCU5X'
}, {
    name: 'Another trip',
    detail: 'better',
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