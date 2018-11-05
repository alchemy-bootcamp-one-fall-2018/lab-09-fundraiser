let meals = [
    {
        name: 'Vegetarian',
        description: 'Eat lots of veggies',
        cost: 10,
        id: 1
    },
    {
        name: 'Meat Delight',
        description: 'Eat your meats',
        cost: 20,
        id: 2
    },
    {
        name: 'Gluten Free',
        description: 'Grain free',
        cost: 15,
        id: 3
    }
];


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
    },
    remove(meal) {
        const index = meals.indexOf(meal);
        if(index !== -1) {
            meals.splice(index, 1);
            saveMeals();
            return index;
        }
    }
};

export default mealsApi;
