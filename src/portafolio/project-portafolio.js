import {dataPortafolio} from "./data-portafolio";


const sectionProject = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentProject());
};


const contentProject = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'project';
    wrapper.classList = 'wrapper__project';
    wrapper.appendChild(setProject());
    return wrapper;
};


const setProject = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'project__container bd-grid';
    wrapper.appendChild(setDescription());
    wrapper.appendChild(setImg(persons));
    return wrapper;
};

const setDescription = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'project__data';
    wrapper.appendChild(setTitle());
    wrapper.appendChild(setTxtProject());
    wrapper.appendChild(setBtnProject());
    return wrapper;
};


const setTitle = () => {
    const el = document.createElement('h2');
    el.classList = 'section__title project__title';
    el.innerText = `Do you have a project in mind`;
    return el;
};


const setTxtProject = () => {
    const el = document.createElement('p');
    el.classList = 'project__description';
    el.innerText = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi aliquam quidem accusantium, ad, libero sapiente perspiciatis mollitia, natus dolorem veniam repudiandae quam optio aperiam?`
    return el;
};


const setBtnProject = () => {
    const el = document.createElement('a');
    el.classList = 'button button__light';
    el.href = '#contact';
    el.innerText = `Contact Me`;
    return el;
};


const setImg = (persons) => {
    const el = document.createElement('img');
    el.classList = 'project__img';
    el.src = `${persons[0].img[0].project}`;
    el.innerText = `Contact Me`;
    return el;
};


export{sectionProject};