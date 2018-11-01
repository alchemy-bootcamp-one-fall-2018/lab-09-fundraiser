import addProduct from './products.js'; 
import productsApi from './product-api.js';

//const products = productsApi.getAll();


addProduct.init(function(product) {

    productsApi.add(product);
}); 
