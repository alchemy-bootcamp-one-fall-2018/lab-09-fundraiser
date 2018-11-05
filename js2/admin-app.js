import productsApi from './products-api.js';
import productList from './product-list.js';
import addProduct from './product-add.js';

const products = productsApi.getAll();

productList.init(products); 

addProduct.init(function(product) {
    productList.create(product);
    productsApi.add(product);
});