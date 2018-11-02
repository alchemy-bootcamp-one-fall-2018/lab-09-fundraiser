import productsApi from '/js/components/products-api.js';
import productForm from '/js/components/products-form.js';

productForm.init(function(product) {
    productsApi.add(product);
});


