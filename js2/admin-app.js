import productsApi from './products-api.js';
import productList from './product-list.js';
import addProduct from './product-add.js';

const products = productsApi.getAll();

productList.init(products, function(product) {
    productsApi.remove(product);
}); 

addProduct.init(function(product) {
    productList.addDom(product);
    productsApi.add(product);
});