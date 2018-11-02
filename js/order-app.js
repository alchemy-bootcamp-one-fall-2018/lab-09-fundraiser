import cartApi from './cart-api.js';
import addItemData from './collectAddItemData.js';
import itemTable from './addItemAdmin.js';

const items = cartApi.get();
// creates the table in HTML
itemTable.init(items);

//pushes add item to cart cart api 
addItemData.init(function(oranges){
    cartApi.add(oranges);
});






