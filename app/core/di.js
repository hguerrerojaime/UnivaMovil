import React from 'react';
import ReactDI from 'react-di';

import UserService from '../services/UserService';
import CookieService from '../services/CookieService';
import ImageService from '../services/ImageService';

let resolver = new ReactDI({
    userService: new UserService(),
    cookieService: new CookieService(),
    imageService: new ImageService()
});

export default resolver;

//ESTO ES UN CAMBIO
