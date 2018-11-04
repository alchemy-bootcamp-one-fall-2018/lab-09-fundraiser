const section = document.getElementById('order-detail');

const productDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListener('click', function() {
            onRemove(productDetail.product);
            productDetail.product = null;
            section.classList.add('hidden');
        });
    },
   
};

export default productDetail;
    