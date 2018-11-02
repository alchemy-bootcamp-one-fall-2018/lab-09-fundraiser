import cartApi from './cart-api.js';
import addItemData from './collectAddItemData.js';
import itemTable from './addItemAdmin.js';

const items = cartApi.getAll();
// creates the table in HTML
// only adds name of item to table in HTML
itemTable.init(items);

//pushes add item to cart cart api
// only pushes the item
addItemData.init(function(oranges){
    cartApi.add(oranges);
});






