
let products = [
    {
        name: 'Cat treat',
        image: 'cat-treat.jpg',
        description: 'ingredients, quantity',

    },

    {
        name: 'Cat CBD',
        image: 'cat-cbd.jpg',
        description: 'ingredients, quantity',
    },

    {
        name: 'Dog treat',
        image: 'dog-treat.jpg',
        description: 'ingredients, quantity',
    },

    {
        name: 'Dog CBD',
        image: 'dog-cbd.jpg',
        description: 'ingredients, quantity',
    },

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
    //add to our array
    add(product) {
        products.push(product);
        //save array to localStorage
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