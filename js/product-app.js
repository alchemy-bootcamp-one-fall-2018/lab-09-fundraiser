import productsApi from './product-api.js'; 
import productList from './product-admin-list.js'; 
// import productDetail from './product-detail.js';

const products = function() {
    productsApi.getAll(); 
}; 

const productListTest = function() {
    productList.getAll();
}; 
console.log("hello", products, productListTest); 

productsApi.add(product); 