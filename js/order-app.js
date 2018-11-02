import productApi from './products-api.js';
import productList from './product-list.js';

const products = productApi.getAll();

productList.init(products);

