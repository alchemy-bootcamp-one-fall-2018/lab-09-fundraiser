function makeMeal(meal) {
    const html = /*html*/`
        <li class="meal">
           <h3 class="name"${meal.name}</h3>
`;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}
const list = document.getElementById('meals');

const mealList = {
    init(meals, onSelect) {
        for(let i = 0; i < meals.length; i++) {
            mealList.add(meals[i]);
        }
        mealList.onSelect = onSelect;
        mealList.meals = meals;
    },
    add(meal) {
        const dom = makeMeal(meal);
        const listItem = dom.querySelectorAll('li');
        
        listItem.addEventListener('click', function() {
            mealList.onSelect(meal);
        });
        list.appendChild(dom);
        // remove function
    }
};

export default mealList;



