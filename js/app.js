import mealsApi from '../js/data-apis/meals-api.js';

const meals = mealsApi.getAll();

console.log(meals);