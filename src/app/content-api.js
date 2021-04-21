const init=(container)=>{
    containerProduct(container);
}

let id = 0, productos = [];

const containerProduct=(container)=>{
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper-form';
    wrapper.classList = `row`;
    wrapper.appendChild(formProduct(addProduct));


    const main = document.getElementById('container');
    main.appendChild(wrapper);
}



const formProduct = (event)=>{
    const wrapper = document.createElement('div');
    wrapper.id = `content-form`;
    wrapper.classList = `col-12 col-lg-6 col-md-6`;
    const inputProduct = document.createElement('input');
    inputProduct.classList = `form-control mt-3`;
    inputProduct.id = `input-product`;
    wrapper.appendChild(inputProduct);
    const btnProduct = document.createElement('button');
    btnProduct.classList = `btn btn-primary mt-3`;
    btnProduct.innerText = 'Agregar';
    wrapper.appendChild(btnProduct);
    btnProduct.addEventListener('click', event);
  return wrapper;
}



const addProduct = ()=>{
    id = productos.length;

    const wrapperForm = document.getElementById('wrapper-form');
    const wrapper = document.createElement('div');
    wrapper.id = `contain-product`;
    wrapper.classList = `col-12 col-lg-12 col-md-12`; 
    wrapperForm.appendChild(wrapper)

    const valueInput = document.getElementById('input-product').value;
    productos.push({valueInput,id});
    if(valueInput) elProducts(productos, wrapper);
    id += 1;
};



const elProducts = (productos, wrapper)=>{
    wrapper.innerHTML=``;
    productos.filter((element)=> element.id==id).map((element)=>{

        const contentProduct = document.createElement('div');
        contentProduct.id = `content-product`;
        contentProduct.classList = `col-12 col-lg-12 col-md-12 mt-4 p-2 border position-relative`;
        contentProduct.innerHTML = `${element.id}- ${element.valueInput}`;

        const assignProduct = document.createElement('div');
        assignProduct.classList = `position-absolute top-0 end-0`;
        contentProduct.appendChild(assignProduct);

        const editProduct = document.createElement('button');
        editProduct.classList = `btn btn-warning`;
        editProduct.id = `${element.id}`;
        editProduct.innerText = `Edit`;
        assignProduct.appendChild(editProduct);
        editProduct.addEventListener('click', modifyProduct);

        const deleteProduct = document.createElement('button');
        deleteProduct.classList = `btn btn-danger`;
        deleteProduct.id = `${element.id}`;
        deleteProduct.innerText = `Delete`;
        assignProduct.appendChild(deleteProduct);
        deleteProduct.addEventListener('click', removeProduct);

        wrapper.appendChild(contentProduct);   
    });   
};


const removeProduct = (ev)=>{
    const idDelete = ev.srcElement.id;
    let wrapper = ev.srcElement.parentElement.parentElement.parentElement;
    const product = productos.filter((element)=>element.id!==idDelete);
    elProducts(product, wrapper);
};


const modifyProduct = (ev)=>{
    const idEdit = ev.srcElement.id;
    let wrapper = ev.srcElement.parentElement.parentElement.parentElement;
    const valueEdit = prompt("ingrese nuevo nombre");
    let valueProduct = productos.map((element)=>{
        if(element.id==idEdit) element.valueInput = valueEdit;
        return element;
    });
    id = ev.srcElement.id;
    elProducts(valueProduct, wrapper);
}



export{init};