import addProduct from './products.js'; 
import productsApi from './product-api.js';

addProduct.init(function(product) {
    productsApi.add(product); 
}); 