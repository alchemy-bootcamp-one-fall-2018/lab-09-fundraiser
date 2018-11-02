let products = [{
    name: 'Trip',
    detail: 'Best',
    price: 45
}, {
    name: 'Another trip',
    detail: 'better',
    price: 90
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