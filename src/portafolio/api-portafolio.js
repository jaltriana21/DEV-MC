import { dataPortafolio } from "./data-portafolio";

const init = (container)=>{
    menuPortafolio(container);
}

const menuPortafolio = ()=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-portafolio';
    wrapper.appendChild(createHeader());

    const main = document.getElementById('container');
    main.appendChild(wrapper);

    showNav(onMenu, offMenu);
    showLink(linkAction);
}

const createHeader = ()=>{
    const setPerson = dataPortafolio();
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-nav';
    wrapper.innerHTML =`<header class="l-header">
    <nav class="nav bd-grid">
        <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
        </div>

        <div>
            <a href="#" class="nav__logo">${setPerson[0].name} ${setPerson[0].surname}</a>
        </div>
    
        <div class="nav__menu" id="nav-menu">
            <div class="nav__close" id="nav-close">
            <i class='bx bx-window-close' id="closet"></i>
        </div>

        <ul class="nav__list">
          <li class="nav__item"><a href="#home" class="nav__link active">Inicio</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">Información</a></li>
          <li class="nav__item"><a href="#skills" class="nav__link">Habilidades</a></li>
          <li class="nav__item"><a href="#services" class="nav__link">Servicios</a></li>
          <li class="nav__item"><a href="#works" class="nav__link">Trabajos</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Contacto</a></li>
        </ul>
      </div>
    </nav>
    </header> `;

    return wrapper;
}


const showNav = (event1, event2)=>{
    const toggleMenu = document.getElementById('nav-toggle');
    const closeMenu  = document.getElementById('nav-close');
    toggleMenu.addEventListener('click',event1);     
    closeMenu.addEventListener('click',event2);
}


const onMenu = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}


const offMenu = ()=>{
    const navMenu = document.getElementById('nav-menu');
    const closeMenu = document.getElementById('nav-close');
    navMenu.classList.toggle('show');
}



const showLink = (ev)=>{
    const navLink = document.querySelectorAll('.nav__link');
    navLink.forEach(element => element.addEventListener('click', linkAction));
}

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}




export{init};