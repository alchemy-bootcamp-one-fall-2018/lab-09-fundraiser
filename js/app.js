import addCart from './product.js';
import productList from './product-list.js';
import productsApi from './products-api.js'; 
import productDetail from './product-detail.js'; 
// import cartApi from './cart-api.js';



const products = productsApi.getProducts();
productList.init(products, function(product) {
    productDetail.update(product);
});


productDetail.init(function(product) {
    const index = productsApi.remove(product);
    //calling this index now instead of updatedProducts 
    productList.remove(index);
});

addCart.init(function(product) {
    
    // tell the api service first
    productsApi.add(product); 
    // then update components
    productList.add(product);
});