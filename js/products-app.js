import itemList from './product-list.js';
import productsApi from './products-api.js';

const section = document.getElementById('item-detail');
const products = productsApi.getAll();


const itemDetail = {
    // init() {

    // },
    update(item) {
        // console.log(section);
        itemDetail.item = item;
        section.querySelector('h3').textContent = item.name;
        section.querySelector('p').textContent = item.description;
        section.querySelector('img').src = item.image;
        section.querySelector('div').textContent = item.price;
    }
};

itemList.init(products, /*onSelect*/ function(item) {
    itemDetail.update(item);
});

export default itemDetail;