
function makeItem(item) {
    const html = /*html*/`
        <li class="item">
            <h3>
                ${item.item} ${item.item-description}
            </h3>
            <button class="danger">Remove</button>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('items');

const itemList = {

    
    init(items) {
        for(let i = 0; i < items.length; i++) {
            itemList.add(items[i]);
        }
        // itemList.onRemove = onRemove;
    },
    
    add(item) {
        const dom = makeItem(item);
       
        const removeButton = dom.querySelector('button');
        const listItem = dom.querySelector('li');

        removeButton.addEventListener('click', function() {
            itemList.onRemove(item);
            listItem.remove();
        });

        list.appendChild(dom);
    }
};

export default itemList;