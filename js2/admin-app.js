import productsApi from './product-list/products-api.js';
import productList from './product-list/product-list.js';
import addProduct from './product-list/product-add.js';

const products = productsApi.getAll();

productList.init(products, function(product) {
    productsApi.remove(product);
}); 

addProduct.init(function(product) {
    productList.editDom(product);
    productsApi.add(product);
});

