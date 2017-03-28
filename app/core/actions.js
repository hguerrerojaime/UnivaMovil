import React from 'react';
import Home from '../components/views/Home';
import Gallery from '../components/views/Gallery';
import UnivaMap from '../components/views/UnivaMap';
import MyData from '../components/views/MyData';

const appActions = [
    { id:'Home',title:'Principal',component: <Home /> },
    { id:'MyData',title:'Mis Datos', component: <MyData /> },
    { id:'Gallery',title:'Galeria',component: <Gallery /> },
    { id:'Map',title:'Mapa', component: <UnivaMap /> },
    { id:'Logout',title:'Logout' }
];

export default appActions;
