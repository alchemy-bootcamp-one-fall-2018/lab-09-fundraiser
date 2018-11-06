let itemsInCart = [
    {
        name: 'I am an item',
        count: 1
    }
];

const cartApi = {
    getAll() {
        const json = localStorage.getItem('itemsInCart');
        if(json) {
            itemsInCart = JSON.parse(json);
        }
        return itemsInCart;
    },
};

export default cartApi;