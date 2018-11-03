import productsApi from './products-api.js';

let cartItems = JSON.parse(localStorage.getItem('cart'));
const products = productsApi.getProducts();
let total;
let cartItemCount;

function addItems(buttonId) {
    let selectedProduct = products[parseInt(buttonId)];
   
    if(cartItems) {
        cartItems.push(selectedProduct);
    } else {
        cartItems = [selectedProduct];
    }
        
    storeCart();
    
    cartItemCount = cartItems.length;
    selectedProduct['cartId'] = cartItemCount - 1;
    addTotal();
    console.log(selectedProduct);
}

function addTotal(){
    const cartAside = JSON.parse(localStorage.getItem('cart'));
    if(cartAside) {
        cartAside.forEach(function(item) {
            total = JSON.parse(localStorage.getItem('cartTotal'));
            total += item.price;
        });
    } else {
        total = 0;
    }
    localStorage.setItem('cartTotal', JSON.stringify(total));
    addToCart.displayCart();
}

function storeCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

const addToCart = {
    init(buttonId) {
        addItems(buttonId);
    },

    displayCart() {
        const cartAside = JSON.parse(localStorage.getItem('cart'));
        const sideItems = document.querySelector('.sideItems');  
        let html = '';
        
        if(cartAside) {
            cartAside.forEach(function(item) {
                total = JSON.parse(localStorage.getItem('cartTotal'));
                //cartItemCount = JSON.parse(localStorage.getItem('cart')).length;
                
                
                html += `
                <p>Item: ${item.name}</p>
                <p>Price: $${item.price}</p>
                <button class="remove" id="${item.cartId}">Remove</button><br /><br /><br />     
                `;
            });
            html += `<p>Total: ${total}</p>`;
    
            sideItems.innerHTML = html;
        }   

        const removeButton = document.querySelectorAll('.remove');

        removeButton.forEach(function(button) {
            button.addEventListener('click', function() {
                addToCart.removeItem(button);
            });
        });
    },

    removeItem(button) {
        cartItems = JSON.parse(localStorage.getItem('cart'));
        total -= cartItems[button.id].price;
        localStorage.setItem('cartTotal', JSON.stringify(total));
        cartItems.splice(button.id, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        this.displayCart();
    }
};

addToCart.displayCart();

export default addToCart;