
let meals = [
    {
        name: 'Vegetarian',
        description: 'Eat lots of veggies',
        cost: '$10'
    },
    {
        name: 'Meat Delight',
        description: 'Eat your meats',
        cost: '$20'
    },
    {
        name: 'Gluten Free',
        description: 'Grain free',
        cost: '$15'
    }
];

// console.log(meals[0].description);


function saveMeals() {
    localStorage.setItem('meals', JSON.stringify(meals));
}

const mealsApi = {
    getAll() {
        const json = localStorage.getItem('meals');
        if(json) {
            meals = JSON.parse(json);
        }
        return meals;
    },
    add(meal) {
        meals.push(meal);
        saveMeals();
    }
};

export default mealsApi;
