import mealList from './components/meals-list.js';
import mealsApi from '../js/data-apis/meals-api.js';



const meals = mealsApi.getAll();




// console.log(meals, 'app.js');


mealList.init(meals, function(meal) {
    // mealDetail.update(meal);
    console.log(meal);
});

// addMeal.init(function(meal) {
//     mealsApi.add(meal);
//     mealList.add(meal);
// });