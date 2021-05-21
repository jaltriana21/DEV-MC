import {dataPortafolio} from "./data-portafolio";


const sectionSkills = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentSkills());
};


const contentSkills = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'skills';
    wrapper.classList = 'wrapper__skills section';
    wrapper.innerHTML = `
    <span class="section__subtitle">Why Choose Me</span>
    <h2 class="section__title">My Expertise Area</h2>`;
    wrapper.appendChild(setSkills());
    return wrapper;
};


const setSkills = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'skills__container bd-grid';
    wrapper.appendChild(setDescription1(persons));
    wrapper.appendChild(setDescription2(persons));
    return wrapper;
};


const setDescription1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'skills__content';
    wrapper.innerHTML = `<h3 class="skills__subtitle">Fronted</h3>`;
    wrapper.appendChild(contentFronted1(persons));
    wrapper.appendChild(contentFronted2(persons));
    wrapper.appendChild(contentFronted3(persons));
    wrapper.appendChild(contentFronted4(persons));
    return wrapper;
};

const setDescription2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'skills__content';
    wrapper.innerHTML = `<h3 class="skills__subtitle">Backend</h3>`;
    wrapper.appendChild(contentBackend1(persons));
    wrapper.appendChild(contentBackend2(persons));
    return wrapper;
};


const contentFronted1 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[0].front[0]}</span>
    <span class='skills__number'>${persons[0].skills[0].porcent[0]}</span>
    <span class='skills__bar skills__html'></span>`
    return content;
};


const contentFronted2 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[0].front[1]}</span>
    <span class='skills__number'>${persons[0].skills[0].porcent[1]}</span>
    <span class='skills__bar skills__js'></span>`
    return content;
};


const contentFronted3 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[0].front[2]}</span>
    <span class='skills__number'>${persons[0].skills[0].porcent[2]}</span>
    <span class='skills__bar skills__react'></span>`
    return content;
};


const contentFronted4 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[0].front[3]}</span>
    <span class='skills__number'>${persons[0].skills[0].porcent[3]}</span>
    <span class='skills__bar skills__angular'></span>`
    return content;
};


const contentBackend1 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[1].backend[0]}</span>
    <span class='skills__number'>${persons[0].skills[1].porcent[0]}</span>
    <span class='skills__bar skills__php'></span>`
    return content;
};


const contentBackend2 = (persons)=>{
    const content = document.createElement('div');
    content.classList = 'skills__data';
    content.innerHTML = `
    <span class='skills__name'>${persons[0].skills[1].backend[1]}</span>
    <span class='skills__number'>${persons[0].skills[1].porcent[1]}</span>
    <span class='skills__bar skills__node'></span>`
    return content;
};



export{sectionSkills};