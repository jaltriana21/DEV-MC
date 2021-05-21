import { dataPortafolio } from "./data-portafolio";

const createHeader = ()=>{
    const wrapper = document.getElementById('wrapper-portafolio');
    wrapper.appendChild(setHeader());
};


const setHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-header';
    wrapper.classList = 'wrapper__header';
    wrapper.appendChild(setNavegation());
    return wrapper;
};


const setNavegation = ()=>{
    const navegation = document.createElement('nav');
    navegation.classList = 'nav__container bd-grid';
    navegation.appendChild(setToggle());
    navegation.appendChild(setLogo());
    navegation.appendChild(setMenu());
    return navegation;
};

const setToggle = ()=>{
    const navToggle = document.createElement('div');
    navToggle.id = 'nav-toggle';
    navToggle.classList = 'nav__toggle';
    navToggle.appendChild(setIcon());
    navToggle.addEventListener('click', showMenu);
    return navToggle;
};


const setIcon = ()=>{
    const icon = document.createElement('i');
    icon.classList = 'bx bx-menu';
    icon.id = 'nav-icon';
    return icon;
};


const setLogo = ()=>{
    const navLogo = document.createElement('div');
    navLogo.classList = 'nav__logo';
    navLogo.id = 'nav-logo';
    navLogo.appendChild(setTxtLogo());
    return navLogo;
};


const setTxtLogo = ()=>{
    const persons = dataPortafolio();
    const logo = document.createElement('span');
    logo.id = 'txt-logo';
    logo.classList = 'txt__logo';
    logo.innerText = `${persons[0].name}`;
    return logo;
};


const setMenu = ()=>{
    const navMenu = document.createElement('div')
    navMenu.classList = 'nav__menu';
    navMenu.id = 'nav-menu';
    navMenu.appendChild(closeContent());
    navMenu.appendChild(list());  
    return navMenu;
};


const closeContent = ()=>{
    const close = document.createElement('div');
    close.classList = 'nav__close';
    close.id = 'nav-close';
    close.appendChild(iconClose());
    close.addEventListener('click', closeMenu);
    return close;
};

const iconClose = ()=>{
    const eliconClose = document.createElement('i');
    eliconClose.classList = 'bx bx-x';
    eliconClose.id = 'nav-icon_close';
    return eliconClose;
};


const list = ()=>{
    const navList = document.createElement('ul');
    navList.classList = 'nav__list';
    navList.id = 'nav-list'; 
    addItems(navList);
    return navList;
};


const addItems = (navList) => {
    navList.appendChild(setItem1());
    navList.appendChild(setItem2());
    navList.appendChild(setItem3());
    navList.appendChild(setItem4());
    navList.appendChild(setItem5());
    navList.appendChild(setItem6());
};



const setItem1 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink1());
    return navItem;
};

const setItem2 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink2());
    return navItem;
};


const setItem3 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink3());
    return navItem;
};

const setItem4 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink4());
    return navItem;
};

const setItem5 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink5());
    return navItem;
};

const setItem6 = ()=>{
    const navItem = document.createElement('li');
    navItem.classList = 'nav__item';
    navItem.appendChild(setLink6());
    return navItem;
};



const setLink1 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link active';
    navLink.id = 'link-home';
    navLink.innerText = 'Home';
    navLink.href = '#home';
    navLink.addEventListener('click', linkAction);
    return navLink;
};

const setLink2 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'link-about';
    navLink.innerText = 'About';
    navLink.href = '#about';
    navLink.addEventListener('click', linkAction);
    return navLink;
}    

const setLink3 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'link-skills';
    navLink.innerText = 'Skills';
    navLink.href = '#skills';
    navLink.addEventListener('click', linkAction);
    return navLink;
}  


const setLink4 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'link-education';
    navLink.innerText = 'Education';
    navLink.href = '#education';
    navLink.addEventListener('click', linkAction);
    return navLink;
}  


const setLink5 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'link-services';
    navLink.innerText = 'Services';
    navLink.href = '#services';
    navLink.addEventListener('click', linkAction);
    return navLink;
}  
 

const setLink6 = ()=>{
    const navLink = document.createElement('a');
    navLink.classList = 'nav__link';
    navLink.id = 'link-contact';
    navLink.innerText = 'Contact';
    navLink.href = '#contact';
    navLink.addEventListener('click', linkAction);
    return navLink;
} 


const showMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
};

const closeMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};


export{createHeader};