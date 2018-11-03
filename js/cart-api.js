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

    remove(product) {
        const removeItem = cart.find(item => {
            return item.name === product.name;
        });
        const index = cart.indexOf(product);
        if(removeItem) {
            removeItem.quantity--;
        }
        else if(index !== -1) {
            cart.splice(index, 1);
            saveCart();
            return index;
        }
    }
};

export default cartApi;
