let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json) {
            cart = JSON.parse(json);
        }
        return cart;
    },
    add(product) {
        const orderItem = cart.find(item => {
            return item.name === product.name;
        });
        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: product.name,
                quantity: 1
            });
        }
        saveCart();
    },
    clear() {
        cart = [];
        saveCart();
    }
};

export default cartApi;
