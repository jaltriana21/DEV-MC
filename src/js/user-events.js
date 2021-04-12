import { getUser } from './http-provider';

import { createPerson, deletePerson } from './user-add-delete'


let maxId       = 1;

let maxIdPerson = 0;



export const createEvent = (btnNew, userList, btnDelete)=>{


    btnNew.addEventListener('click',async ()=>{


    if(maxId <= 12){

       const userCreated    = await getUser( maxId );

       const personsCreated = await createPerson( userCreated );

       let   personContainer  = document.createElement('tr');

       personContainer.classList.add(`${personsCreated[maxIdPerson].id}`)

       

       personContainer.innerHTML = `<td>${personsCreated[maxIdPerson].id}</td>

       <td>${personsCreated[maxIdPerson].first_name} ${personsCreated[maxIdPerson].last_name}</td>
       
       <td>${personsCreated[maxIdPerson].email}</td>

       <td><img src="${personsCreated[maxIdPerson].avatar}" alt="avatar"></td>`



       userList.append(personContainer);



       maxId       += 1;
       
       maxIdPerson += 1;
       
    }
  
    })



    btnDelete.addEventListener('click',()=>{

        const deleteIdPerson = userList.removeChild(userList.lastChild);

        const idPerson     = deleteIdPerson.getAttribute('class');


        deletePerson( idPerson );


        maxId       = 1;
        
        maxIdPerson = 0;
    
        })


};

