'use strict';

const custOrders = document.getElementById('custOrders');

const orderReport = {

    init() {
        console.log('init called');
        if(custOrders) {
            const customers = JSON.parse(localStorage.getItem('customers'));
            console.log(customers);
    
            var node = document.createElement('li');
            node.innerHTML = `
                <p>${customers[0].fName}</p>
                 `;
                 
            custOrders.appendChild(node);
        }
    }

};

export default orderReport;