const section = document.getElementById('item-detail');

const itemDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListener('click', function() {
            onRemove(itemDetail.item);
            itemDetail.item = null;
            section.classList.add('hidden');
        });
    },
    update(item) {
        itemDetail.item = item;
        section.querySelector('h2').textContent = item.name;
        section.querySelector('p').textContent = item.description;
        section.classList.remove('hidden');
    }
};

export default itemDetail;