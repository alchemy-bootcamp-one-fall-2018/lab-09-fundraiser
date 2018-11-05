import productsApi from './products-api.js';
import cartApi from './cart-api.js';
import productList from './product-list.js';
import shoppingCart from './shopping-cart.js';

// import customerApi from './customer-api.js';

const products = productsApi.getAll();
const cart = cartApi.get();
// const customer = customerApi.getAll();

shoppingCart.init(cart);

productList.init(products, function(product) {
    cartApi.add(product);
    shoppingCart.update(cart);
    // customerApi.add(customer);
});










// jei is taking a guess here 
// this is from app.js

// const products = cartApi.getAll();



// productList.init(products, /*onSelect*/ function(product){
//     productDetail.update(product);
    
// });

// productDetail.init(/*onRemove*/ function(product){
//     const index = carttApi.remove(product);
// // tell the product list to re-render
//     productList.remove(index);
// });

// addProduct.init(function(product){

//     //onAdd listener

//      // tell the api service first
//     cartApi.add(product);

//     //update components
//     productList.add(product);
// });





