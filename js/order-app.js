import mealsApi from '../js/data-apis/meals-api.js';
import cartApi from '../js/data-apis/cart-api.js';
import mealList from './components/meals-list.js';
import shoppingCart from './components/shopping-cart.js';

const meals = mealsApi.getAll();
const cart = cartApi.get();

shoppingCart.init(cart);

mealList.init(meals, function(meal) {
    cartApi.add(meal);
    shoppingCart.update(cart);
});