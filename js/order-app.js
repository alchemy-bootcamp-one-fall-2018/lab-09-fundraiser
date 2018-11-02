import cartApi from './cart-api.js';
import addItemData from './collectAddItemData.js';
import itemTable from './addItemAdmin.js';
import orderPage from './addItemOrder.js';

const items = cartApi.getAll();
// creates the table in HTML
// only adds name of item to table in HTML
itemTable.init(items);

orderPage.init(items);

//pushes add item to cart cart api
// only pushes the item
addItemData.init(function(products){
    cartApi.add(products);
});






