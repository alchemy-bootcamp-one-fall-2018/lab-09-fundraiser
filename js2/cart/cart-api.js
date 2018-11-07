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
        if(itemsInCart.length === 0) {
            item.quantity = 1;
            itemsInCart.push(item);
        } else {
            let found = false;
            for(let i = 0; i < itemsInCart.length; i++) {
                if(itemsInCart[i].name === item.name){
                    itemsInCart[i].quantity += 1;
                    found = true;
                } 
            }
            if(found === false) {
                item.quantity = 1;
                itemsInCart.push(item);
            }
        }
        saveCart();
    },
    remove(item) {
        const index = itemsInCart.indexOf(item);
        console.log(itemsInCart);
        console.log(item);
        if(index !== -1) {
            item.quantity -= 1;
            if(item.quantity === 0) {
                itemsInCart.splice(index, 1);
            }
            console.log(index);

        }
        saveCart();
    }
};

export default cartApi;