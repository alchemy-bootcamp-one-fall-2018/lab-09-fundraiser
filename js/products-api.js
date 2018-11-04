let products = [
    {
        name: 'Collar',
        price: '$10.00',
        animal: 'For: Dogs',
        image: '../assets/collar.jpeg'
    },
    {
        name: 'Cat Harness',
        price: '$15.00',
        animal: 'For: Cats',
        image: '../assets/cat-harness.jpeg'
    },
    {
        name: 'Bird Feeder',
        price: '$20.00',
        animal: 'For: Birds',
        image: '../assets/bird-feeder.jpeg'
    },
    {
        name: 'Mouse Toy',
        price: '$80.00',
        animal: 'For: Cats',
        image: '../assets/mouse.jpeg'
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