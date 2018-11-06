

function makeCookie(cookie) {
    const html = /*html*/ `
        <li class="cookie">
            <h3 class="name">
                ${cookie.name}
            </h3>
            <p>${cookie.description}</p>
            <p>${cookie.price}</p>
            <img src="${cookie.image}"/>

        </li>
        <button id="${cookie.id}"> Remove</button>
                `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('cookies');


const cookieList = {
    init(cookies, onIncrement, onDecrement) {
        for(let i = 0; i < cookies.length; i++) {
            cookieList.add(cookies[i]);
        }
        cookieList.cookies = cookies;
        cookieList.onIncrement = onIncrement;
        cookieList.onDecrement = onDecrement;
    },
    add(cookie) {
    
        const dom = makeCookie(cookie);
        const listItem = dom.querySelector('li');
        listItem.addEventListener('click', function() {
            cookieList.onIncrement(cookie);
        });
        const buttonRemove = dom.querySelector('button');
        buttonRemove.addEventListener('click', function() {
            cookieList.onDecrement(cookie);
        });
        list.appendChild(dom);
    },
};

export default cookieList;