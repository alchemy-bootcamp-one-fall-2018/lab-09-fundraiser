// function makeProduct(product) {
//     const html = /*html*/`
//         <li>
//             <h3>${product.name}</h3>
//             <p>${product.animal}</p>
//             <p>${product.price}</p>
//             <button class="danger">X</button>
//         </li>
//     `;

//     const template = document.createElement('template');
//     template.innerHTML = html;
//     return template.content;
// }

// const customerList = document.getElementById('customer-products');

// const customerProductList = {
//     init(products, onRemove) {
//         for(let i = 0; i < products.length; i++) {
//             customerProductList.add(products[i]);

//         }
//         customerProductList.onRemove = onRemove;
//     },
//     add(product) {
//         const dom = makeProduct(product);
//         const removeButton = dom.querySelector('button');
//         const listItem = dom.querySelector('li');

//         removeButton.addEventListener('click', function() {
//             customerProductList.onRemove(product);
//             listItem.remove();
//         });
//         customerList.appendChild(dom);
//     }
// };

// export default customerProductList;