// const cartList = document.getElementById('cart-list');

const addOrder = {
    init(onAdd) {
        const checkoutForm = document.getElementById('checkout-form');

        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
        
            const elements = checkoutForm.elements;
            const orderData = {
        
                name: elements.name.value,
                address: elements.address.value,
                billing: elements.billing.value,
            };
        
            onAdd(orderData);
        });
    }
};
// const checkoutFormItems = {
//     init(onAdd) {
            // checkoutForm.reset();

//         });
//     }
// };

export default addOrder;
