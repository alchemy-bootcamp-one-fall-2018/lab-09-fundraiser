import productsApi from './products-api.js';
import addProduct from './add-product.js';
import productList from './product-list.js';

const products = productsApi.getAll();

productList.init(products); 

addProduct.init(function(product) {
    productsApi.add(product);
    productList.add(product);
});

