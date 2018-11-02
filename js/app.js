import addProduct from './add-product.js';
import productList from './product-list.js';
import productApi from './products-api.js';
import productDetail from './product-detail';

const products = productApi.getAll();

productList.init(products, /*onSelect*/ function(product){
    productDetail.update(product);
});

productDetail.init(/*onRemove*/ function(product){
    const index = productApi.remove(product);
    //tell the product list to re-render
    productList.remove(index);
});

addProduct.init(function(product){

    //onAdd listener

    //tell the api service first
    productApi.add(product);

    //update components
    productList.add(product);
});

