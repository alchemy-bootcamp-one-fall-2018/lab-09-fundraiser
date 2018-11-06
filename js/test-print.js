import cartApi from './cart-api.js';

const cart = cartApi.get();

const list = document.getElementById('admin-info');

const addCart = {

    init(customer) {


        for(let i = 0; i < customer.length; i++) {
            const li = document.createElement('li');

            li.textContent = customer[i].name + customer[i].email;
            // li.textContent+ customer[i].shipping;
            // li.textContent = customer[i].billing;
            list.appendChild(li);
            for(let j = 0; j < cart.length; j++){     
                const cartLi = document.createElement('li');

                cartLi.textContent = cart[j].name + cart[j].quantity;
                list.appendChild(cartLi); 

            }
            
        }
    }

};

export default addCart;
