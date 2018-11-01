import cartApi from './cart-api.js';
import formData from './cart-form.js';



formData.init(function(formInfo){

    cartApi.add(formInfo);

});





