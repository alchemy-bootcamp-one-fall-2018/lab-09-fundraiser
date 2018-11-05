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
    //this is how we remove the product to keep from going into the negatives for the quantity
    remove(product) {
        const orderItem = cart.find(item => {
            return item.name === product.name; 
        }); 
        if(orderItem) {
            orderItem.quantity--;
            if(orderItem.quantity === 0) {
                const index = cart.findIndex(item => {
                    return item.name === product.name; 
                });
                cart.splice(index, 1); 
            }
        }
    }
}; 

export default cartApi; 