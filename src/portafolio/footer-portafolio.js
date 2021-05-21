import {dataPortafolio} from "./data-portafolio";


const sectionFooter = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentFooter());
};


const contentFooter = () => {
    const wrapper = document.createElement('footer');
    wrapper.id = 'footer';
    wrapper.classList = 'footer';
    wrapper.appendChild(setFooter());
    return wrapper;
};


const setFooter = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'footer__container bd-grid';
    wrapper.appendChild(setDescription1());
    wrapper.appendChild(setDescription2(persons));
    wrapper.appendChild(setDescription3(persons));
    wrapper.appendChild(setDescription4(persons));
    return wrapper;
};



const setDescription1 = () => {
    const el = document.createElement('h3');
    el.classList = 'footer__title';
    el.innerHTML = `Triana`;
    return el;
};


const setDescription2 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'footer__description';
    el.innerHTML = `${persons[0].description_small}`;
    return el;
};


const setDescription3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'footer__social';
    wrapper.appendChild(socialLink1());
    wrapper.appendChild(socialLink2());
    wrapper.appendChild(socialLink3());
    return wrapper;
};


const socialLink1 = () => {
    const el = document.createElement('a');
    el.classList = 'footer__link';
    el.appendChild(setIcon1());
    return el;
};


const setIcon1 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-facebook';
    return el;
};


const socialLink2 = () => {
    const el = document.createElement('a');
    el.classList = 'footer__link';
    el.appendChild(setIcon2());
    return el;
};


const setIcon2 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-instagram';
    return el;
};


const socialLink3 = () => {
    const el = document.createElement('a');
    el.classList = 'footer__link';
    el.appendChild(setIcon3());
    return el;
};


const setIcon3 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bxl-twitter';
    return el;
};


const setDescription4 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'footer__copy';
    el.innerHTML = `All right reserved by ${persons[0].name} ${persons[0].surname} 2021`;
    return el;
};


export{sectionFooter};