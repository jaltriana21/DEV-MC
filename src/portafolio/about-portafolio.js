import {dataPortafolio} from "./data-portafolio";


const sectionAbout = () => {
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(contentAbout());
};


const contentAbout = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'about';
    wrapper.classList = 'wrapper__about section';
    wrapper.innerHTML = `
    <span class="section__subtitle">My intro</span>
    <h2 class="section__title">About Me</h2>`;
    wrapper.appendChild(setAbout());
    return wrapper;
};


const setAbout = () => {
    const persons = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__container bd-grid';
    wrapper.appendChild(setDescription1(persons));
    wrapper.appendChild(setDescription2(persons));
    return wrapper;
};


const setDescription1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__data';
    wrapper.innerHTML = `
    <p class="about__description">${persons[0].description}</p>
    <img class="about__img" src="../assets/about.png" alt="about">`;
    return wrapper;
};


const setDescription2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information';
    wrapper.appendChild(setTxt1());
    wrapper.appendChild(contentInformation1(persons));
    wrapper.appendChild(setTxt2());
    wrapper.appendChild(contentInformation2(persons));
    return wrapper;
};


const setTxt1 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'about__information-title';
    el.innerText = 'Information';
    return el;
};

const setTxt2 = (persons) => {
    const el = document.createElement('h3');
    el.classList = 'about__information-title';
    el.innerText = 'Experience and Support';
    return el;
};


const contentInformation1 = (persons)=>{
    const content = document.createElement('div');
    content.appendChild(setInformationData1(persons));
    content.appendChild(setInformationData2(persons));
    content.appendChild(setInformationData3(persons));
    return content;
};


const contentInformation2 = (persons)=>{
    const content = document.createElement('div');
    content.appendChild(setExperienceData1(persons));
    content.appendChild(setExperienceData2(persons));
    content.appendChild(setExperienceData3(persons));
    return content;
};


const setInformationData1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `
    <i class="bx bx-user about__information-icon"></i>
    <span>${persons[0].name}</span>`;
    return wrapper;
};


const setInformationData2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `
    <i class="bx bx-phone about__information-icon"></i>
    <span>${persons[0].cel}</span>`;
    return wrapper;
};


const setInformationData3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `
    <i class="bx bx-envelope about__information-icon"></i>
    <span>${persons[0].email}</span>`;
    return wrapper;
};


const setExperienceData1 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `<i class="bx bx-medal about__information-icon"></i>`;
    wrapper.appendChild(contentProjects1(persons));
    return wrapper;
};


const contentProjects1 = (persons)=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <span class='about__information-subtitle'>${persons[0].experience} Years Job</span>
    <span class='about__information-subtitle-small'>Experience</span>`;
    return wrapper;
};


const setExperienceData2 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `<i class="bx bx-briefcase about__information-icon"></i>`;
    wrapper.appendChild(contentProjects2(persons));
    return wrapper;
};


const contentProjects2 = (persons)=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <span class='about__information-subtitle'>${persons[0].projects}+ Projects</span>
    <span class='about__information-subtitle-small'>Completed</span>`;
    return wrapper;  
};


const setExperienceData3 = (persons) => {
    const wrapper = document.createElement('div');
    wrapper.classList = 'about__information-data';
    wrapper.innerHTML = `<i class="bx bx-support about__information-icon"></i>`;
    wrapper.appendChild(contentProjects3(persons));
    return wrapper;
};


const contentProjects3 = (persons)=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <span class='about__information-subtitle'>Support</span>
    <span class='about__information-subtitle-small'>Online ${persons[0].disponibility} hs</span>`;
    return wrapper;    
};


export{sectionAbout};