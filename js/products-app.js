import productsApi from './products-api.js';
import itemList from './product-list.js';

const products = productsApi.getAll();

itemList.init(products);