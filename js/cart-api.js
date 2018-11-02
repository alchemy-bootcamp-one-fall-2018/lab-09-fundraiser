///cart api used to store jus the customer info and cart
// might need another api for the store alone
let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


const cartApi = {

    getAll() {
        const json = localStorage.getItem('cart');

        if(json) {
            cart = JSON.parse(json);
        }
        return cart;
    }, 
    add(product) {
        console.log(product);
        const orderItem = cart.find(item => {

            return item.name === product.name,
            item.id === product.id,
            item.description === product.description,
            item.price === product.price,
            item.image === product.image;
        });
        if(orderItem) {
            orderItem.quantity++;
        }
        else {
            cart.push({
                name: product.name,
                id: product.id,
                description: product.description,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        saveCart();
    }
};

export default cartApi; 