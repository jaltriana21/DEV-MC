import {dataPortafolio} from "./data-portafolio";


const sectionServices = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentServices());
};


const contentServices = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'services';
    wrapper.classList = 'wrapper__services section';
    wrapper.innerHTML = `
    <span class="section__subtitle">What I Offer</span>
    <h2 class="section__title">My Services</h2>`;
    wrapper.appendChild(setServices());
    return wrapper;
};


const setServices = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'services__container bd-grid';
    wrapper.appendChild(setDescription1(persons));
    wrapper.appendChild(setDescription2(persons));
    wrapper.appendChild(setDescription3(persons));
    wrapper.appendChild(setDescription4(persons));
    return wrapper;
};


const setDescription1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'services__content';
    wrapper.appendChild(setIcon1());
    wrapper.appendChild(setTitle1(persons));
    wrapper.appendChild(setHability1(persons));
    return wrapper;
};


const setIcon1 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bx-code services__icon';
    return el;
};


const setTitle1 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'services__title';
    el.innerText = `${persons[0].habilities[0].hab}`
    return el;
};


const setHability1 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'services__description';
    el.innerText = `${persons[0].habilities[0].desc}`
    return el;
};



const setDescription2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'services__content';
    wrapper.appendChild(setIcon2());
    wrapper.appendChild(setTitle2(persons));
    wrapper.appendChild(setHability2(persons));
    return wrapper;
};


const setIcon2 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bx-pen services__icon';
    return el;
};


const setTitle2 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'services__title';
    el.innerText = `${persons[0].habilities[1].hab}`
    return el;
};


const setHability2 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'services__description';
    el.innerText = `${persons[0].habilities[1].desc}`
    return el;
};


const setDescription3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'services__content';
    wrapper.appendChild(setIcon3());
    wrapper.appendChild(setTitle3(persons));
    wrapper.appendChild(setHability3(persons));
    return wrapper;
};


const setIcon3 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bx-brush services__icon';
    return el;
};


const setTitle3 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'services__title';
    el.innerText = `${persons[0].habilities[2].hab}`
    return el;
};


const setHability3 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'services__description';
    el.innerText = `${persons[0].habilities[2].desc}`
    return el;
};



const setDescription4 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'services__content';
    wrapper.appendChild(setIcon4());
    wrapper.appendChild(setTitle4(persons));
    wrapper.appendChild(setHability4(persons));
    return wrapper;
};


const setIcon4 = () => {
    const el = document.createElement('i');
    el.classList = 'bx bx-server services__icon';
    return el;
};


const setTitle4 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'services__title';
    el.innerText = `${persons[0].habilities[3].hab}`
    return el;
};


const setHability4 = (persons) => {
    const el = document.createElement('p');
    el.classList = 'services__description';
    el.innerText = `${persons[0].habilities[3].desc}`
    return el;
};


export{sectionServices};