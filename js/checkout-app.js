<<<<<<< HEAD
import productsApi from '../apis/products-api.js';
import cartApi from '../apis/cart-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';
import orderApi from '../apis/order-api.js';
const products = productsApi.getAll();
const cart = cartApi.get();


shoppingCart.init(cart);

productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
    // orderApi.add(order);
});
const submitButton = document.getElementById('submit-order');
submitButton.addEventListener('click', event => {
    console.log('banana');
    event.preventDefault();
    let form = document.getElementById('customer-information');
    let elements = form.elements;
    let customer = {
        firstName: elements.firstName.value,
        lastName: elements.lastName.value,
        billingAddress: elements.billingAddress.value,
        shippingAddress: elements.shippingAddress.value,
    };
    console.log('customer data', customer);

    let order = {
        customer: customer, 
        products: cart
    };
    console.log('customer order', order);
    orderApi.add(order);
});
=======
import customerApi from './customer-api.js';

//most recent comment, in case later necessary
// import cartApi from './cart-api.js';


// let cart = cartApi.get();


const form = document.getElementById('customer-information');

// checkout.init(cart, customer);



const orderForm = {
    init(onAdd) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const elements = form.elements;

            const customer = {};

            customer.firstName = elements.name1.value.getElementById('first-name');
            customer.lastName = elements.name2.value.getElementById('last-name');
        


            onAdd(customer);
            form.reset();

        });

        orderForm.init(function(customer) {
            customerApi.getAll();
            customerApi.add(customer);
        });
    }

};
>>>>>>> 4b0ef2ba3431f75726f75bcebb1a40ff8886d47d
