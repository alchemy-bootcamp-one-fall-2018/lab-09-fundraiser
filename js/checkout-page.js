'use strict';

const form = document.getElementById('billingInfo');
let input = [];
let customers = {};
let tempCust = [];

function storeCustInfo() {
    input.forEach(function(element) {
        customers[element.name] = element.value;
    });
    tempCust.push(customers);
    localStorage.setItem('customers', JSON.parse(customers));
}

const custInfo = {
    init() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            input = document.querySelectorAll('input');
            console.log(input);
            storeCustInfo();
        });
    }
};

export default custInfo;



