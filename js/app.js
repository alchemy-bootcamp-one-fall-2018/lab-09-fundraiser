import addProduct from './products.js'; 
import productsApi from './product-api.js'; 
import productDetail from './product-admin-list.js';

const products = productsApi.getAll();

addProduct.init(function(product) {

    productsApi.add(product);
}); 
