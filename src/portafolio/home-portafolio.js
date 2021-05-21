import {dataPortafolio} from "./data-portafolio";
import layout from '../html/layout-home.html'

const sectionHome = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentHome());
};


const contentHome = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'home';
    wrapper.classList = 'wrapper__home bd-grid section';
    wrapper.appendChild(setHome());
    return wrapper;
};


const setHome = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'home__data';
    wrapper.innerHTML = layout;
    wrapper.appendChild(setTitleHome());
    wrapper.appendChild(setProfessionHome());
    wrapper.appendChild(setSocialHome());
    wrapper.appendChild(setDowloadHome());
    return wrapper;
};


const setTitleHome = () => {
    const persons = dataPortafolio();
    const el = document.createElement('h1');
    el.classList = 'home__title';
    el.innerText = `${persons[0].name}`;
    return el;
};


const setProfessionHome = () => {
    const persons = dataPortafolio();
    const el = document.createElement('span');
    el.classList = 'home__profession';
    el.innerText = `${persons[0].profession}`;
    return el;
};


const setSocialHome = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'home__social';
    wrapper.appendChild(setLinkHome1());
    wrapper.appendChild(setLinkHome2());
    wrapper.appendChild(setLinkHome3());
    wrapper.appendChild(setLinkHome4());
    wrapper.appendChild(setLinkHome5());
    return wrapper;
};


const setLinkHome1 = () => {
    const el = document.createElement('a');
    el.classList = 'home__social-link'
    el.appendChild(setIconHome1());
    return el;
};


const setIconHome1 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-linkedin';
    return el;
};


const setLinkHome2 = () => {
    const el = document.createElement('a');
    el.classList = 'home__social-link'
    el.appendChild(setIconHome2());
    return el;
};


const setIconHome2 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-github';
    return el;
};


const setLinkHome3 = () => {
    const el = document.createElement('a');
    el.classList = 'home__social-link'
    el.appendChild(setIconHome3());
    return el;
};


const setIconHome3 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-instagram';
    return el;
};


const setLinkHome4 = () => {
    const el = document.createElement('a');
    el.classList = 'home__social-link'
    el.appendChild(setIconHome4());
    return el;
};


const setIconHome4 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-twitter';
    return el;
};


const setLinkHome5 = () => {
    const el = document.createElement('a');
    el.classList = 'home__social-link'
    el.appendChild(setIconHome5());
    return el;
};


const setIconHome5 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-facebook';
    return el;
};


const setDowloadHome = () => {
    const el = document.createElement('a');
    el.download = '';
    el.classList = 'button home__button';
    el.innerText = ' Dowload';
    return el;
};

export{sectionHome};