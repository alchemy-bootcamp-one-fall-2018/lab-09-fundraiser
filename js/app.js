import addCart from './product.js';
import productsApi from './products-api.js'; 


const products = productsApi.getAll();
productList.init(products, function(product) {
    productDetail.update(product);
});


productDetail.init(function(product) {
    const updatedProducts = productsApi.remove(product);
    //updatedProducts here is index in martys code 
    productlist.remove(updateProducts);
});

addProduct.init(function(product) {
    productsApi.add(product);
    productList.add(product);
});