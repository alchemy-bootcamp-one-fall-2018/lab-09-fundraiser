import productApi from './products-api.js';
import addProduct from './add-product.js';
import productList from './product-list.js';
import productDetail from '.product-detail.js';

const products = productApi.getAll();

productList.init(products, function(product) {
    productDetail.update(product);
});

productDetail.init(function(product) {
    const index = productApi.remove(product);
    productList.remove(index);
});

addProduct.init(function(product) {
    productApi.add(product);
    productList.add(product);
});

// console.log(products);