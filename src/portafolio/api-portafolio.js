import { sectionHome } from "./home-portafolio";
import { createHeader } from "./header-portafolio";
import { sectionAbout } from "./about-portafolio";
import { sectionSkills } from "./skills-portafolio";
import { sectionEducation } from "./education-portafolio";
import { sectionServices } from "./services-portafolio";
import { sectionProject } from "./project-portafolio";
import { sectionContact } from "./contact-portafolio";
import { sectionFooter } from "./footer-portafolio";


const init = (container)=>{
    wrapperLayout(container);
    setSections();
    events();
};


const wrapperLayout = ()=>{
    const main = document.getElementById('container');
    main.appendChild(layaout());
}


const layaout = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-portafolio';
    wrapper.classList = 'wrapper__portafolio';
    return wrapper;
};


const setSections = ()=>{
    createHeader();
    sectionHome();
    sectionAbout();
    sectionSkills();
    sectionEducation();
    sectionServices();
    sectionProject();
    sectionContact();
    sectionFooter();
};


const events = () => {
    setScroll();
};


const setScroll = () =>{
    window.addEventListener('scroll', scrollActive);
};


const scrollActive = () => {
    const sections = document.getElementsByClassName('section');
    const content = [].slice.call(sections);
    const scrollY = window.pageYOffset;
    content.map((element)=>{
        sectionScroll(scrollY,element);
    })
};


const sectionScroll = (scrollY,element) => {
    const sectionHeight = element.offsetHeight;
    const sectionTop = element.offsetTop - 50;
    const sectionId = element.getAttribute('id');
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        const el = document.getElementById(`link-${sectionId}`);
        el.classList.add('active');
    }else{
        const el = document.getElementById(`link-${sectionId}`);
        el.classList.remove('active');
    }
};


export{init};