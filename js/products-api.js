let products = [
    {
        donation: 20, //this is dummy content to see
    }
];
function saveProduct() {

    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
   //this is set, if you change it all products disappear, change it back they reappear
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
    },
   
    remove(product) {
        const index = products.indexOf(product);
        if(index !== -1) {
            products.splice(index, 1);
            saveProduct();
            return index;
        }
    }
};
 

export default productsApi;