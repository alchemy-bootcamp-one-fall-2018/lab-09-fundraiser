import addProduct from './add-product.js';
import itemTable from './product-list.js';
import productApi from './products-api.js';

const products = productApi.getAll();


console.log(products);

itemTable.init(products);

addProduct.init(function(product) {
    productApi.add(product);
    itemTable.add(product);
});


