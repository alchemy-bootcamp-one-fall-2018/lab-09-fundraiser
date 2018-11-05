
const list = document.getElementById('admin-info');

const addCart = {

    init(customer) {
        for(let i = 0; i < customer.length; i++) {
            const li = document.createElement('li');
            li.textContent += customer[i].name;
            li.textContent += customer[i].email;
            li.textContent += customer[i].shipping;
            li.textContent += customer[i].billing;

            list.appendChild(li);
        }
    }

};

export default addCart;
