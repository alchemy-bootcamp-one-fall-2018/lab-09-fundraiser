const section = document.getElementById('product-detail');

const productDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListner('click', function() {
            onRemove(productDetail.product);
            productDetail.product = null;
            section.classList.add('hidden');
        });
    },
   
};

export default productDetail;
    