import {dataPortafolio} from "./data-portafolio";


const sectionContact = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentContact());
};


const contentContact = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'contact';
    wrapper.classList = 'wrapper__contact section';
    wrapper.innerHTML = `
    <span class="section__subtitle">Contact Me</span>
    <h2 class="section__title">Get In Touch</h2>`;
    wrapper.appendChild(setContact());
    return wrapper;
};


const setContact = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'contact__container bd-grid';
    wrapper.appendChild(setDescription1());
    wrapper.appendChild(setDescription2(persons));
    return wrapper;
};


const setDescription1 = (persons) => {
    const wrapper = document.createElement('form');
    wrapper.classList = 'contact__form';
    wrapper.appendChild(contentinputs());
    wrapper.appendChild(elInput3());
    wrapper.appendChild(elInput4());
    wrapper.appendChild(elSent());
    return wrapper;
};


const contentinputs = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'contact__inputs';
    wrapper.appendChild(elInput1());
    wrapper.appendChild(elInput2());
    return wrapper;
};


const elInput1 = () => {
    const el = document.createElement('input');
    el.type = 'text';
    el.classList = 'contact__input';
    el.placeholder = 'Name';
    return el;
};


const elInput2 = () => {
    const el = document.createElement('input');
    el.type = 'email';
    el.classList = 'contact__input';
    el.placeholder = 'Email';
    return el;
};


const elInput3 = () => {
    const el = document.createElement('input');
    el.type = 'text';
    el.classList = 'contact__input';
    el.placeholder = 'Project';
    return el;
};


const elInput4 = () => {
    const el = document.createElement('textarea');
    el.classList = 'contact__input';
    el.cols = '0';
    el.rows = '10';
    el.placeholder = 'Messaje';
    return el;
};


const elSent = () => {
    const el = document.createElement('input');
    el.type = 'submit';
    el.value = 'Send Message';
    el.classList = 'button contact__button';
    return el;
};


const setDescription2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.appendChild(setInfo1(persons));
    wrapper.appendChild(setInfo2(persons));
    wrapper.appendChild(setInfo3(persons));
    return wrapper;
};


const setInfo1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'contact__info';
    wrapper.appendChild(setTitle1());
    wrapper.appendChild(setTxt1(persons));
    wrapper.appendChild(setTxt2(persons));
    return wrapper;
};


const setTitle1 = () => {
    const el = document.createElement('h3');
    el.classList = 'contact__subtitle';
    el.innerText = 'Call me';
    return el;
};


const setTxt1 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].celular}`;
    return el;
};


const setTxt2 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].celular}`;
    return el;
};


const setInfo2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'contact__info';
    wrapper.appendChild(setTitle2());
    wrapper.appendChild(setTxt3(persons));
    wrapper.appendChild(setTxt4(persons));
    return wrapper;
};


const setTitle2 = () => {
    const el = document.createElement('h3');
    el.classList = 'contact__subtitle';
    el.innerText = 'E-mail';
    return el;
};


const setTxt3 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].email}`;
    return el;
};


const setTxt4 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].email_contact}`;
    return el;
};


const setInfo3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'contact__info';
    wrapper.appendChild(setTitle3());
    wrapper.appendChild(setTxt5(persons));
    wrapper.appendChild(setTxt6(persons));
    return wrapper;
};


const setTitle3 = () => {
    const el = document.createElement('h3');
    el.classList = 'contact__subtitle';
    el.innerText = 'Location';
    return el;
};


const setTxt5 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].country}`;
    return el;
};

const setTxt6 = (persons) => {
    const el = document.createElement('span');
    el.classList = 'contact__text';
    el.innerHTML = `${persons[0].location}`;
    return el;
};


export{sectionContact};