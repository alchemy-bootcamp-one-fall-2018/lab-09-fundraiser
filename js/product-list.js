let cart = [];


function makeProduct(product) {
    const html = `
        <li class="products">
            <img src="img/${product.image ? product.image : 'Snoop-Dogg.jpg'}">
            <h3 class="name">
            ${product.name}
            </h3>
            <p>  
            ${product.description} 
            </p>
         </li>
        `;   

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('products');

const productList = {

    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        }
        productList.onSelect = onSelect;
        productList.products = products;
    },
    add(product) {
        const dom = makeProduct(product);

        // do work of finding elements _before_ appending
        const listItem = dom.querySelector('li');
        listItem.addEventListener('click', function() {
            productList.onSelect(product);

            cart.push(product);
        
        });
        
        // append to <ul>, this will empty the fragment
        list.appendChild(dom);

       
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
};

export default productList;
