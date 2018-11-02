import productsApi from './products-api.js';
import addProduct from './add-product.js';
import productList from './product-list.js';
import productDetail from '.product-detail.js';

const products = productsApi.getAll();

productList.init(products, function(product) {
    productDetail.update(product);
});

productDetail.init(function(product) {
    const index = productsApi.remove(product);
    productList.remove(index);
});

addProduct.init(function(product) {
    productsApi.add(product);
    productList.add(product);
});

// console.log(products);