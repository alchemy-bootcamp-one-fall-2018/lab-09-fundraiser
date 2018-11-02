function makeMeal(meals) {
    const html = /*html*/`
        <li class="meals">
           <h3 class="name">${meals.name}</h3>
        </li>
`;
    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}


const list = document.getElementById('meals');

const mealList = {
    init(meals) {
        for(let i = 0; i < meals.length; i++) {
            mealList.add(meals[i]);
        }
        mealList.meals = meals;
    },
    add(meal) {
        const dom = makeMeal(meal);
        // const listItem = dom.querySelectorAll('li');

        // listItem.addEventListener('click', function() {
        //     mealList.onSelect(meal);     // INCREASE CART COUNT
        // });
        list.appendChild(dom);
        // TODO: remove function
    }
};

export default mealList;



