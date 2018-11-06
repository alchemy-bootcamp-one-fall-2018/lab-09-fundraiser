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
    add(cookie) {
        const orderItem = cart.find(item => {
            return item.name === cookie.name;
        });
        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: cookie.name,
                quantity: 1
            });
        }
        saveCart();
    },
    remove(cookie) {
        const orderItem = cart.find(item => {
            return item.name === cookie.name;
        });
        if(orderItem) {
            orderItem.quantity--;
            if(orderItem.quantity === 0) {
                const index = cart.findIndex(item => {
                    return item.name === cookie.name;
                });
                cart.splice(index, 1);
                
            }
        }
        saveCart();
    },
    clear() {
        cart = [];
        saveCart();
    }
};

export default cartApi;