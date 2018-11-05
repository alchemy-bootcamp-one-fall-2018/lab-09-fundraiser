import mealsApi from '../js/data-apis/meals-api.js';
import cartApi from '../js/data-apis/cart-api.js';
import mealList from './components/meals-list.js';
import shoppingCart from './components/shopping-cart.js';
// import mealDetail from './components/meal-detail.js';

// This is the illustrated list of meal options on Orders page
const meals = mealsApi.getAll();


const cart = cartApi.get();

shoppingCart.init(cart);

mealList.init(meals, function(meal) {
    cartApi.add(meal);
    shoppingCart.update(cart);
});