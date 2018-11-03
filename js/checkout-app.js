// pushing out to admin/orders.html page 
import cartApi from './data-apis/cart-api.js';
import itemForm from './components/checkout.js';

itemForm.init(function(item){
    cartApi.add(item);
});
