let products = [
    {
        name: 'Mugs',
        image: 'mug.png',
        description: 'Unicef Mug'
    },
    {
        name: 'T-Shirt',
        image: 't-shirt.png',
        description: 'T-Shirt'
    },
    {
        name: 'Tote',
        image: 'tote.png',
        description: 'Tote'
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
            return index;
        }
    }
};

export default productsApi;