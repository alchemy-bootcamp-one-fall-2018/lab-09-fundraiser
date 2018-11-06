
let cookies = [
    {
        id:'samoa',
        name:'Samoa Cookies',
        description:'Caramel cookies with coconut',
        price:'$4.00',
        image:'../assets/images/samoa.png'
    },
    {
        id:'thinmint',
        name:'Thin Mints Cookies',
        description:'Chocolate cookie with mint flavor',
        price:'$3.50',
        image:'../assets/images/thinmints.png'
    }
];

function saveCookies() {
    localStorage.setItem('cookies', JSON.stringify(cookies));
}

const cookiesApi = {
    getAll() {
        const json = localStorage.getItem('cookies');
        if(json) {
            cookies = JSON.parse(json);
        }
        return cookies;
    },
    add(cookie) {
        cookies.push(cookie);
        saveCookies();
        console.log('Cookie added ', cookies);
    }
};
export default cookiesApi;