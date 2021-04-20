import { getPokemon } from "./data";


const init = (container)=>{
    containPokemon(container);
};

let countEvents=1;

const containPokemon = (container)=>{
    const wrapper = document.createElement('div');
    wrapper.id = `wrapp-pokemon`;
    const inputPokemon = document.createElement('input');
    inputPokemon.classList = `form-control mt-3 mb-3`;
    inputPokemon.placeholder = `Ingrese pokemon...`;
    wrapper.appendChild(inputPokemon);
    wrapper.appendChild(assignPokemon(shinyPokemon));
    inputPokemon.addEventListener('keyup', filterPokemon);
    const main = document.getElementById(container);
    main.appendChild(wrapper);
}



const assignPokemon = (event)=>{
    const pokemons = getPokemon();
    const wrapper = document.createElement('div');
    wrapper.classList = `row text-center bg-warning`;
    wrapper.id = 'wrapp-pokemons';
    createPokemon(pokemons, wrapper, event);
    return wrapper;
}


const createPokemon = (pokemons, wrapper, event)=>{
    wrapper.innerHTML = ``;
    pokemons.map((element)=>{  
        const contentPokemon = document.createElement('div');
        contentPokemon.classList = `col-12 col-md-3 col-lg-3 mb-5 border border-dark content-pokemon`;
        contentPokemon.id = `${element.id}`;
        contentPokemon.innerHTML = `<h1>${element.id}-${element.name}</h1>`;
        const imgPokemon = document.createElement('img');
        imgPokemon.id = `img-pokemon-${element.id}`;
        imgPokemon.classList = 'border border-dark rounded-circle activate mb-3';
        imgPokemon.setAttribute("src",`${element.sprites.front_default}`);
        const linea = document.createElement('br');
        contentPokemon.appendChild(imgPokemon);
        contentPokemon.appendChild(linea);
        const btn = document.createElement('button');
        btn.id = `shiny-pokemon`;
        btn.classList = `btn btn-dark mb-3`;
        btn.textContent = 'Shiny';
        btn.addEventListener('click', event);
        contentPokemon.appendChild(btn);
        wrapper.appendChild(contentPokemon);
    });
};


const shinyPokemon = (ev)=>{
    const poke = getPokemon();
    const contentPokemon = ev.target.parentElement;
    const idPokemon = contentPokemon.getAttribute('id');
    poke.filter((element)=> element.id == idPokemon)
    .map((element)=>{
        if(countEvents==1){
            const imgPokemon = document.getElementById(`img-pokemon-${element.id}`);
            imgPokemon.classList.remove('activate');
            imgPokemon.classList.add('desactivate');
            imgPokemon.setAttribute("src",`${element.sprites.front_shiny}`);
            countEvents += 1;
        }else{
            const imgPokemon = document.getElementById(`img-pokemon-${element.id}`);
            imgPokemon.classList.remove('deactivate');
            imgPokemon.classList.add('activate');
            imgPokemon.setAttribute("src",`${element.sprites.front_default}`);
            countEvents =1;
        };
    });
};



const filterPokemon = (ev)=>{
    const poke = getPokemon();
    let letraCliente = ev.target.value.toLowerCase();
    let wrapper = ev.srcElement.parentElement.lastChild
    const result = poke.filter((element)=> element.name.toLowerCase().indexOf(letraCliente) != -1)
    createPokemon(result, wrapper, shinyPokemon);
}


export{init};