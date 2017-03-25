import React from 'react';
import ReactDI from 'react-di';

let resolver = new ReactDI({
    message: aMessageService,
    alert: anAlertService
});

React.inject()

export default resolver;

//ESTO ES UN CAMBIO
