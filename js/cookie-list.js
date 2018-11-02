

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
        `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('cookies');

const cookieList = {
    init(cookies, onSelect) {
        for(let i = 0; i < cookies.length; i++) {
            cookieList.add(cookies[i]);
        }
        cookieList.cookies = cookies;
        cookieList.onSelect = onSelect;
    },
    add(cookie) {
    
        const dom = makeCookie(cookie);
        const listItem = dom.querySelector('li');
        
        listItem.addEventListener('click', function() {
            cookieList.onSelect(cookie);
        });
        
        list.appendChild(dom);
    },

 
};

export default cookieList;