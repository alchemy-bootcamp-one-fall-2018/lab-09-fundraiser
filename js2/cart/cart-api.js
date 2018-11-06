let itemsInCart = [];

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
        if(itemsInCart.indexOf(item) === -1) {
            item.quantity = 1;
            itemsInCart.push(item);
        } else {
            itemsInCart[itemsInCart.indexOf(item)].quantity += 1;
        }
        saveCart();
    }
};

export default cartApi;