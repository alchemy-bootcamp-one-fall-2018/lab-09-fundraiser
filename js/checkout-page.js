'use strict';

const form = document.getElementById('billingInfo');
let input = [];
let customers = JSON.parse(localStorage.getItem('customers'));
let tempCust = {};

function storeCustInfo() {
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
        if(form){
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                input = document.querySelectorAll('input');
                storeCustInfo();
            });
        }   
    }
};

export default custInfo;



