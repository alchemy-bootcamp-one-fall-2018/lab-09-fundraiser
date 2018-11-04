'use strict';

const form = document.getElementById('billingInfo');
let input = [];
let customers = JSON.parse(localStorage.getItem('customers'));
let tempCust = {};

function storeCustInfo(cart) {
    console.log('cart', cart);
    tempCust['cart'] = cart;
    input.forEach(function(element) {
        tempCust[element.name] = element.value;
    });
    if(customers) {
        customers.push(tempCust);
    } else {
        customers = [tempCust];
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    tempCust = {};
}

const custInfo = {
    init(cart) {
        console.log(form);
        console.log('called custInfo init');
        if(form){
            console.log('you have a form');
            form.addEventListener('submit', function(event) {
                console.log('form submitted');
                event.preventDefault();
                input = document.querySelectorAll('input');
                storeCustInfo(cart);
            });
        }   
    }
};

export default custInfo;



