import addProduct from './components/add-product.js';
import productsApi from './data-apis/products-api.js';
import productList from './components/product-list.js';

const products = productsApi.getAll();

productList.init(products, function(product){
    productDetail.update(product);
});

addProduct.init(function(product) {
    productsApi.add(product);
    productList.add(product);
});




