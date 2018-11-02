let items = [];

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

const itemsApi = {
    getAll() {
        const json = localStorage.getItem('items');
        if(json){
            items = JSON.parse(json);
        }
        return items;
    },
    add(item) {
        items.push(item);
        saveItems();
    },
    remove(item) {
        const index = items.indexOf(item);
        if(index !== -1) {
            items.splice(index, 1);
            saveItems();
            return index;
        }
    }
    
};

export default itemsApi;