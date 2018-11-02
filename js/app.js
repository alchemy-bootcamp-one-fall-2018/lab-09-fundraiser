import addCookie from './add-cookie.js';
import cookieApi from './cookies-api.js';
import cookieList from './cookie-list.js';

const cookies = cookieApi.getAll();


// addCookie.init(function(cookie) {
//   // tell the api service first
//     cookieApi.add(cookie);

// });

cookieList.init(cookies);




