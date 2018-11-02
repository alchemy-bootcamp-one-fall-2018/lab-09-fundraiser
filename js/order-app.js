import addCookie from './add-cookie.js';
import cookieApi from './cookies-api.js';
import cookieList from './cookie-list.js';

const cookies = cookieApi.getAll();



cookieList.init(cookies);