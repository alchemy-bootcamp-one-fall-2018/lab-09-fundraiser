
const formData = {

    init(onAdd) {
       // const formInput = document.getElementById('product-form');
        const formGrains = document.getElementById('grains-div');
     

        const products = {};

        formGrains.addEventListener('onclick', function(event){
            event.preventDefault();

            products.name = formGrains.name;
            products.quantity = formGrains.value;

            onAdd(products);
            formGrains.reset(); 

            console.log(products);

        });
    }
};


export default formData;