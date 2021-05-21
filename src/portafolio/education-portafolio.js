import {dataPortafolio} from "./data-portafolio";


const sectionEducation = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentEducation());
};


const contentEducation = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'education';
    wrapper.classList = 'wrapper__education section';
    wrapper.innerHTML = `
    <span class="section__subtitle">Qualifications</span>
    <h2 class="section__title">My Education</h2>`;
    wrapper.appendChild(setEducation());
    return wrapper;
};


const setEducation = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'education__container bd-grid';
    wrapper.appendChild(setDescription1(persons));
    wrapper.appendChild(setDescription2(persons));
    return wrapper;
};


const setDescription1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'education__content';
    wrapper.appendChild(contentEducationProfessional1(persons));
    wrapper.appendChild(contentEducationProfessional2());
    wrapper.appendChild(contentEducationProfessional3(persons));
    return wrapper;
};


const contentEducationProfessional1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <h3 class="education__year">${persons[0].title.year[1]}</h3>
    <span class="education__university">${persons[0].university}</span>`;
    return wrapper;
};


const contentEducationProfessional2 = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'education__time';
    wrapper.innerHTML = `
    <span class="education__rounder"></span>
    <span class="education__line"></span>`;
    return wrapper;
};


const contentEducationProfessional3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <h3 class="education__race">${persons[0].title.universities[0]}</h3>
    <span class="education__specialty">Estudiante distinguido</span>`;
    return wrapper;
};


const setDescription2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'education__content';
    wrapper.appendChild(contentEducationTecnology1(persons));
    wrapper.appendChild(contentEducationTecnology2());
    wrapper.appendChild(contentEducationTecnology3(persons));
    return wrapper;
};


const contentEducationTecnology1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <h3 class="education__year">${persons[0].title.year[0]}</h3>
    <span class="education__university">${persons[0].university}</span>`;
    return wrapper;
};


const contentEducationTecnology2 = () => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'education__time';
    wrapper.innerHTML = `
    <span class="education__rounder"></span>
    <span class="education__line"></span>`;
    return wrapper;
};


const contentEducationTecnology3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <h3 class="education__race">${persons[0].title.universities[1]}</h3>`;
    return wrapper;
};


export{sectionEducation};