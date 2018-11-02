
function makeItem(item) {
    const html = /*html*/`
        <li>
            <h3> 
                ${item.name}
            </h3>  
            <h4>  
                ${item.description}
            </h4>    
                ${item.price}
            </h4>    
            <br> 
            <button class="danger">Remove</button>   
        </li>
                `;
                
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const list = document.getElementById('items');

const itemList = {

    
    init(items, onRemove) {
        for(let i = 0; i < items.length; i++) {
            itemList.add(items[i]);
        }
        itemList.onRemove = onRemove;
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