function makeItem(item) {
    const html = `
     <li class="item">
        <div class="click-target">
            <h3 class="name"">
                ${item.name}
            </h3>
            <p>
                ${item.price}
            </p>
            <img src=${item.image} style="width: 100px">
        </div>
        <button class="button">+</button> <button class="button">-</button>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('products');
const itemList = {
    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            itemList.add(products[i]);
        }
        itemList.onSelect = onSelect;
        itemList.products = products;
    },

    
    add(item) {
        const dom = makeItem(item);
        const listItem = dom.querySelector('.click-target');

        listItem.addEventListener('click', function() {
            itemList.onSelect(item);
        });

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};


export default itemList;