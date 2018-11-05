
import customerApi from './customer-api.js';
import cartApi from './cart-api.js';


const cart = cartApi.get();
const customer = customerApi.getAll();

const list = document.getElementById('admin-info');

const addCart = {

    init(customer) {
        for(let i = 0; i < customer.length; i++) {
            const li = document.createElement('li');
            li.textContent += customer[i].name;
            li.textContent += customer[i].quantity;
            list.appendChild(li);
        }
        for(let i = 0; i < cart.length; i++){
            const li = document.createElement('li');
            li.textContent += cart[i].name;
            list.appendChild(li);
        
        }
        customerApi.getAll();
    }

};

export default addCart;
