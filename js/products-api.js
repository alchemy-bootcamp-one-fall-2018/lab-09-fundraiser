let products = [
    {
        name: 'Collar',
        price: '$10.00',
        description: 'reflective collar to keep your doggo safe',
        animal: 'dog'
    }
];

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
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
        const index = products.indexOf(product);
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
        }
    }
};

export default productsApi;