
let products = [
    { 
        id: 'beans',
        name: 'Beans',
        description: 'bulk beans',
        price: 25,
    },

    { 
        id: 'grains',
        name: 'Grains',
        description: 'bulk grain',
        price: 25,
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