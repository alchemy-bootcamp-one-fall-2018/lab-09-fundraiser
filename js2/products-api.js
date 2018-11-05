let products = [
    {
        name: 'T-Shirt',
        image: '../assets/shirt.png',
        description: 'A comfy black t-shirt, made of 100% cotton and polyester.  Sizes XS - XXL',
        price: '$5'
    },
    {
        name: 'Hard hat',
        image: '../assets/hardhat.png',
        description: 'Hard hat, great for construction work or other.  Adjustable strap for all head sizes.',
        price: '$7'
    },
    {
        name: 'Exec Pen',
        image: '../assets/pen.png',
        description: 'Solid smooth and fancy pen, a gripped end for no slip.',
        price: '$3'
    },
    {
        name: 'Umbrella',
        image: '../assets/umbrellas.png',
        description: 'For outdoor use. 50 inches in diameter.',
        price: '$10'
    },
    {
        name: 'Backpack',
        image: '../assets/backpack.png',
        description: 'Nice big backpack for kids or adults for all uses.',
        price: '$20'
    },   
];

const productsApi = {
    getAll() {
        const json = localStorage.getItem('products');
        if(json) {
            products = JSON.parse(json);
        }
        return products;
    }
};

export default productsApi; 