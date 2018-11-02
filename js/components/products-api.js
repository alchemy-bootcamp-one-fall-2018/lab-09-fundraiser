let items = [
    {
        image: 'Cari.jpg',
        item: 'Frisbee',
        description: 'Cari Pizza autographed tron frisbee',
        price: 50
    },
    {
        image: 'torgazi-bass.jpg',
        item: 'bass',
        description: 'Torgazi Bass',
        price: 200
    }
];

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