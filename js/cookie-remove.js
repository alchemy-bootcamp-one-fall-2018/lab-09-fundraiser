
const section = document.getElementById('cookie-detail');

const cookieDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListener('click', function() {
            onRemove(cookieDetail.cookie);
            cookieDetail.cookie = null;
        });
    },
    update(cookie) {
        cookieDetail.cookie = cookie;
        section.querySelector('h2').textContent = cookie.name;

    }
};

export default cookieDetail;