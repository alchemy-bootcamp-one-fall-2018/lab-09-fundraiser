const form = document.getElementById('order-form');

const elements = form.elements;

const orderForm = {

    init(onAdd) {

        form.addEventListener('submit', function() {

            const orderDetail = {};

            orderDetail.lname = elements.lname.value;
            orderDetail.fname = elements.fname.value;
            orderDetail.billing = elements.billing.value;
            orderDetail.shipping = elements.shipping.value;
            orderDetail.sameAddress = elements.sameAddress.value;

            onAdd(orderDetail);
            form.reset();
        });  
    }
};

export default orderForm;