'use strict';

const form = document.getElementById('billingInfo');
let input = [];
let customers = JSON.parse(localStorage.getItem('customers'));
let tempCust = {};
const checkbox = document.getElementById('sameAddress');
const showBillingField = document.getElementById('billingAddress');

function storeCustInfo(cart) {
    const cartTotal = JSON.parse(localStorage.getItem('cartTotal'));
    tempCust['cart'] = cart;
    tempCust['cartTotal'] = cartTotal;
    input.forEach(function(element) {
        if(element.value) {
            tempCust[element.name] = element.value;
        }
    });
    if(customers) {
        tempCust['custId'] = customers.length;
        customers.push(tempCust);
    } else {
        tempCust['custId'] = 0;
        customers = [tempCust];
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    tempCust = {};
}

const custInfo = {
    init(cart) {
        if(form){
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                input = document.querySelectorAll('input');
                storeCustInfo(cart);
                form.reset();
            });
        }   
    }
};

if(showBillingField) {
    checkbox.addEventListener('change', function(){
        showBillingField.style.display = 'block';
    });
}

export default custInfo;



