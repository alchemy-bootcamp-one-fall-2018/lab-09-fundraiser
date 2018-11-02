import mealList from './components/meals-list.js';
import mealsApi from '../js/data-apis/meals-api.js';
import mealDetail from './components/meal-detail.js';

const meals = mealsApi.getAll();

mealList.init(meals, function(meal) {
    mealDetail.update(meal);
});

// addMeal.init(function(meal) {
//     mealsApi.add(meal);
//     mealList.add(meal);
// });