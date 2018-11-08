let products = [
    {
        name: 't-shirt',
        description: 'this is a t-shirt',
        image: 'TKO.jpg'
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
        const index = products.indexOf[product];
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
            return index;
        }
    }
};

export default productsApi;
