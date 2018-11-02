let products = [
    { 
        id: 'carrot',
        name: 'Carrot',
        description: 'long orange goodness',
        price: 5,
    },

    { 
        id: 'canned goods',
        name: 'canned foods',
        description: 'random types of canned goods',
        price: 10,
    }
];
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
    add(product){
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
export default productApi;