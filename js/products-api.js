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
    },

    {
        id: '4',
        name: 'Baby Supplies',
        type: 'clothing',
        description: 'Supplies for a baby',
        price: 20.00,
        image: '../assets/baby_supplies.jpg'
    },

    {
        id: '5',
        name: 'Dental Care Supplies',
        type: 'hygiene',
        description: 'Dental hygiene supplies',
        price: 10.00,
        image: '../assets/dental_care.jpg'
    },

    {
        id: '6',
        name: 'Tent',
        type: 'survival',
        description: 'A tent',
        price: 90.00,
        image: '../assets/tent.jpg'
    },
    
    {
        id: '7',
        name: 'Deodorant',
        type: 'hygiene',
        description: 'Deodorant',
        price: 5.00,
        image: '../assets/deoderant.jpg'
    },
     
    {
        id: '8',
        name: 'Feminine Hygiene Products',
        type: 'hygiene',
        description: 'Things for women',
        price: 20.00,
        image: '../assets/feminine_hygiene.jpg'
    },
     
    {
        id: '9',
        name: 'Granola Bars',
        type: 'food',
        description: 'Granola bars',
        price: 5.00,
        image: '../assets/granola_bar.jpg'
    },
     
    {
        id: '10',
        name: 'Shampoo',
        type: 'hygiene',
        description: 'Shampoo',
        price: 5.00,
        image: '../assets/shampoo.jpg'
    },
     
    {
        id: '11',
        name: 'Socks',
        type: 'clothing',
        description: 'Wool socks to keep feet warm and dry',
        price: 10.00,
        image: '../assets/socks.jpg'
    },
     
    {
        id: '12',
        name: 'Gloves',
        type: 'clothing',
        description: 'Socks for cold winter weather',
        price: 15.00,
        image: '../assets/winter_gloves.jpg'
    },
     
    {
        id: '13',
        name: 'Winter Hat',
        type: 'clothing',
        description: 'A hat to keep head and ears warm',
        price: 15.00,
        image: '../assets/winter_hat.jpg'
    },
];

const productsApi = {
    init() {
        var currentList = JSON.parse(localStorage.getItem('currentProducts'));

        if(!currentList) {
            localStorage.setItem('currentProducts', JSON.stringify(productList));
        }
    },
    
    storeNewProduct(newProduct) {
        var products = JSON.parse(localStorage.getItem('currentProducts'));

        if(products) {
            newProduct['id'] = products.length;
            products.push(newProduct);
        } else {
            newProduct['id'] = 0;
            products = [newProduct];
        }

        localStorage.setItem('currentProducts', JSON.stringify(products));
    },
    
    getProducts() {
        return JSON.parse(localStorage.getItem('currentProducts'));
    }
};

export default productsApi;