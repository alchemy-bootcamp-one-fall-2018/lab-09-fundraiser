import productsList from './product-list.js';
import addProduct from './add-product.js';
import productApi from './product-api.js';
import productDetail from './product-detail.js';

const products = productApi.getAll();

productsList.init(products);

productDetail.init(function(product) {
    const index = productApi.remove(product);
    productsList.remove(index);
});

addProduct.init(function(product) {
    productApi.add(product);
    productsList.add(product);
});

