const section = document.getElementById('items-selected');
const mealDetail = {
    update(meal) {
        mealDetail.meal = meal;
        section.querySelector('h2').textContent = meal.name;
        section.querySelector('p').textContent = meal.description;
    }
};

export default mealDetail;
