import addCookie from './add-cookie.js';
import cookieApi from './cookies-api.js';
import cookieList from './cookie-list.js';
import cookieDetail from './cookie-remove.js';

const cookies = cookieApi.getAll();

cookieDetail.init(function(cookie) {
    const index = cookieApi.remove(cookie);
    cookieList.remove(index);
});

addCookie.init(function(cookie) {
  // tell the api service first
    cookieApi.add(cookie);

});

cookieList.init(cookies);




