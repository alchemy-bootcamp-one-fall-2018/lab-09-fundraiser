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
        const orderProduct = cart.find(item => {
            return item.name === product.name;
        });

        if(orderProduct) {
            orderProduct.quantity++;
        }
        else {
            cart.push({
                name: product.name,
                quantity: 1
            });
        }
        saveCart();

    },
    remove(product) {
        const orderProduct = cart.find(item => {
            return item.name === product.name;
        });
        if(orderProduct !== 1) {
            orderProduct.quantity--;
            if(orderProduct.quantity === 0) {
                const index = cart.indexOf(product);
                cart.splice(index, 1);
            }
        }
        saveCart();
    }
};

export default cartApi;