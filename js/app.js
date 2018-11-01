import addProduct from './components/add-product.js';
import productsApi from './data-apis/products-api.js';

addProduct.init(function(product) {
    productsApi.add(product);
    // productList.add(product);
});

const products = productsApi.getAll();
