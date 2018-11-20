import productsApi from '../apis/products-api.js';
import customerApi from '../apis/customer-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';
import orderApi from '../apis/order-api.js';
const products = productsApi.getAll();
const cart = orderApi.get();


shoppingCart.init(cart);

productList.init(products, function(product) {
    orderApi.add(product);
    shoppingCart.update(cart);
    // orderApi.add(order);
});
const submitButton = document.getElementById('submit-order');
submitButton.addEventListener('click', event => {
    console.log('banana');        
    form.reset();

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
