let itemsInCart = [
    {
        name: 'I am an item',
        count: 1
    }
];

function saveCart() {
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
}

const cartApi = {
    getAll() {
        const json = localStorage.getItem('itemsInCart');
        if(json) {
            itemsInCart = JSON.parse(json);
        }
        return itemsInCart;
    },
    addToCart(item) {
        itemsInCart.push(item);
        console.log(itemsInCart)
        saveCart();
    }
};

export default cartApi;