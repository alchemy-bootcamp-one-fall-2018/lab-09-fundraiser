import addCart from './product.js';
import productList from './product-list.js';
import productsApi from './products-api.js'; 
import productDetail from './products-details.js'; 
// import cartApi from './cart-api.js';



const products = productsApi.getProducts();
productList.init(products, function(product) {
    productDetail.update(product);
});


// productDetail.init(function(product) {
//     const updatedProducts = productsApi.remove(product);
//     //updatedProducts here is index in martys code 
//     productlist.remove(updateProducts);
// });

addCart.init(function(product) {
    
    // tell the api service first
    productsApi.add(product); 
    // then update components
    productList.add(product);
});