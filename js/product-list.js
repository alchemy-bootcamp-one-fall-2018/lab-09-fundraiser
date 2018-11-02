function makeItem(item) {
    const html = `
     <li class="item">
        <h3 class="name"">
            ${item.name}
        </h3>
        <img src="">
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
        const listItem = dom.querySelector('li');
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