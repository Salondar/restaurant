import {Home, Img} from './home.js';
import {Menu} from './menu.js';
import {Contact} from './contact';
import './style.css'

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const divContent = document.querySelector('#content');

homeBtn.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    Home();
});

menuBtn.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    Menu();
});

contactBtn.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    Contact();
});

Home();