import productsApi from './products-api.js';
import productList from './product-list.js';

const products = productsApi.getAll();

productList.init(products); 