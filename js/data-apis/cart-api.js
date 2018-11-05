let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    // console.log(cart); // add cart string data to console after click
}

const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json) {
            cart = JSON.parse(json);
        }
        return cart;
    },
    add(meal) {
        const orderItem = cart.find(item => {
            return item.name === meal.name;
        });
        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                id: meal.id,
                name: meal.name,
                description: meal.description,
                cost: meal.cost,
                quantity: 1
            });
        }
        saveCart();
    },
    remove(meal) {
        const orderItem = cart.find(item => {
            return item.name === meal.name;
        });
        if(orderItem) {
            if(orderItem.quantity !== 1) {
                orderItem.quantity--;
            }
            else {
                const index = cart.indexOf(meal);
                cart.splice(index, 1);
            }
        }
        saveCart();

    }
};

export default cartApi;