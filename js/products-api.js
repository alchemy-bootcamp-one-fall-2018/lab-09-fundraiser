var productList = [
    {
        id: '0',
        name: 'Backpack',
        type: 'survival',
        description: 'It is a backpack',
        price: 40.00,
        image: '../assets/backpack.jpg'
    },

    {
        id: '1',
        name: 'Bottled Water',
        type: 'food',
        description: 'It is a case of waters in bottles',
        price: 10.00,
        image: '../assets/bottled_water.jpg'
    },

    {
        id: '2',
        name: 'Razor',
        type: 'hygiene',
        description: 'A pack of 5 razors',
        price: 15.00,
        image: '../assets/razor.jpg'
    },

    {
        id: '3',
        name: 'Sweat Shirt',
        type: 'clothing',
        description: 'One hoodie to keep warm',
        price: 20.00,
        image: '../assets/hoodie.jpg'
    }
];

const productsApi = {
    init() {
        localStorage.setItem('currentProducts', JSON.stringify(productList));
    },
    
    storeNewProduct(newProduct) {
        var products = JSON.parse(localStorage.getItem('newProduct'));

        if(products) {
            products.push(newProduct);
        } else {
            products = [newProduct];
        }

        localStorage.setItem('currentProducts', JSON.stringify(products));
    },
    
    getProducts() {
        return JSON.parse(localStorage.getItem('currentProducts'));
    }
};

export default productsApi;