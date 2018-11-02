var productList = [
    {
        id: 0,
        name: 'backpack',
        type: 'survival',
        description: 'It is a backpack',
        price: 40,
        image: ''
    },

    {
        id: 1,
        name: 'bottledWater',
        type: 'food',
        description: 'It is a case of waters in bottles',
        price: 10,
        image: ''
    },

    {
        id: 2,
        name: 'razor',
        type: 'hygiene',
        description: 'A pack of 5 razors',
        price: 15,
        image: ''
    },

    {
        id: 3,
        name: 'sweatShirt',
        type: 'clothing',
        description: 'One hoodie to keep warm',
        price: 20,
        image: ''
    }
];

const productsApi = {
    getProducts() {
        return productList;
    }
};

export default productsApi;