import addItem from './add-product.js';
import productsApi from './products-api.js';
import itemList from './product-list.js';
import itemDetail from './item-detail.js';

const products = productsApi.getAll();

itemList.init(products, /*onSelect*/ function(item) {
    itemDetail.update(item);
});

addItem.init(function(item) {
    productsApi.add(item);
    itemList.add(item);
});