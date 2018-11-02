import cartApi from './cart-api.js';
import productDetail from './add-product.js';
import itemTable from './product-list.js';

const items = cartApi.getAll();

itemTable.init(items);

productDetail.init(function(products){
    cartApi.add(products);
});


