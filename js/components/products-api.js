let products = [];

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
    add(product) {
        products.push(product);
        saveProducts();
    }
};

export default productsApi;