let products = [
    {
        name: 'T-Shirt',
        image: '',
        description: 'black t-shirt',
        price: '$5'
    },
    {
        name: 'Hard hat',
        image: '',
        description: 'A very hard hat',
        price: '$10'
    },
    {
        name: 'Exec Pen',
        image: '',
        description: 'VIP',
        price: '$3'
    },
    {
        name: 'Umbrella',
        image: '',
        description: 'outdoor protection',
        price: '$10'
    },
    {
        name: 'Backpack',
        image: '',
        description: 'Holds stuff',
        price: '$20'
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