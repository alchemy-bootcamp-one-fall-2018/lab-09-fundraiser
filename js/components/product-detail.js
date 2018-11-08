const section = document.getElementById('product-detail');

const productDetail = {
    update(product) {
        productDetail.product = product;
        section.querySelector('h2').textContent = product.name;
        section.querySelector('p').textContent = product.description;
    }
};

export default productDetail;