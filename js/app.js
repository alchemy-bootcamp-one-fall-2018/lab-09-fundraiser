import productApi from './products-api.js';
import addProduct from './add-product.js';

const products = productApi.getAll();

addProduct.init(function(product) {
    productApi.add(product);
});

console.log(products);