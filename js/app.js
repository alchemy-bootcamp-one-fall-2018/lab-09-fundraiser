import productsList from './product-list.js';
import addProduct from './add-product.js';
import productApi from './product-api.js';

const products = productApi.getAll();

productsList.init(products);

addProduct.init(function(product) {
    productApi.add(product);
    productsList.add(product);
});