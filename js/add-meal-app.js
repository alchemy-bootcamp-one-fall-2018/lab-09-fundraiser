import mealsApi from '../js/data-apis/meals-api.js';
import mealList from './components/meals-list.js';
import cartApi from '../js/data-apis/cart-api.js';

const meals = mealsApi.getAll();


mealList.init(meals, function(meal) {
    cartApi.add(meal);
});