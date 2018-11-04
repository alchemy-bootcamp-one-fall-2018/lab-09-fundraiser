//setup empty array like a basket to put stuff in 
let cart = [];

//setup to save, update cart to local storage
function saveCart() {
    //set item is method native to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}
//console.log(cart);
//setup to get saved cart from local storage
const cartApi = {
    get() {
        const json = localStorage.getItem('cart');
        if(json){
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
    }
};
export default cartApi; 