let products = [
    {
        name: 'T-Shirt',
        color: 'black',
        image: '',
        description: 'black t-shirt'
    },
    {
        name: 'Hard hat',
        color: 'white',
        image: '',
        description: 'A very hard hat'
    },
    {
        name: 'Exec Pen',
        color: 'black',
        image: '',
        description: 'VIP'
    },
    {
        name: 'Umbrella',
        color: 'assorted',
        image: '',
        description: 'outdoor protection'
    },
    {
        name: 'Backpack',
        color: 'black',
        image: '',
        description: 'Holds stuff'
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
    add(item) {
        products.push(item);
        saveProducts();
    },
    remove(item) {
        const index = products.indexOf(item);
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
            return index;
        }
    }
};

export default productsApi;