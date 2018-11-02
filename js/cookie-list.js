

function makeCookie(cookie) {
    const html = /*html*/ `
        <li class="cookie">
            <h3 class="name">
                ${cookie.name}
                </h3>
                <p>${cookie.description}</p>
                <p>${cookie.price}</p>
                <img src="${cookie.image}"/></img>
            
        </li>
        `;

    const template = document.createElement('template');

    template.innerHTML = html;

    return template.content;
}

const list = document.getElementById('cookies');

const cookieList = {
    init(cookies) {
        for(let i = 0; i < cookies.length; i++) {
            cookieList.add(cookies[i]);
        }
        cookieList.cookies = cookies;

    },
    add(cookie) {
        const dom = makeCookie(cookie);
        list.appendChild(dom);
    }
};

export default cookieList;