let products = [];

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
    }
};

export default productApi;