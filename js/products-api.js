let products = [
    {
        donation: 20,//this is dummy content to see
    }
];
function saveProduct() {

    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
    getProducts() {
        const json = localStorage.getItem('products');
        if(json) {
            products = JSON.parse(json);
        }
        return products;
    },
    
    add(product){
        products.push(product);

        saveProduct();
    }
};





export default productsApi;