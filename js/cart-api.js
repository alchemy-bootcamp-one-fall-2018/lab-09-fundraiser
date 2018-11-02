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
    add(item) {
        const orderThing = cart.find(thing => {
            return thing.name === item.name;
        });

        if(orderThing) {
            orderThing.quantity++;
        }
        else {
            cart.push({
                name: item.name,
                quantity: 1
            });
        }

        saveCart();
    }
};

export default cartApi;