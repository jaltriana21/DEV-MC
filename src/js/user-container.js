import { createEvent} from './user-events';


let container = document.querySelector('.container');

let buttonNew, userList, buttonDelete;


export const userContainer = ()=>{

    const html = ` <h1>Usuarios</h1>

    <table class="table table-dark table-striped">  

        <thead>

            <tr>

              <th scope="col">Id</th>

              <th scope="col">Name</th>

              <th scope="col">Email</th>

              <th scope="col">Avatar</th>

            </tr>

          </thead>

          <tbody class="list-user">
          
          </tbody>

    </table>

    <br>

    <button type="button" class="btn btn-dark btnNew">New</button>
    
    <button type="button" class="btn btn-dark btnDelete">Delete</button> `



    container.innerHTML = html; 


    
    buttonNew    = document.querySelector('.btnNew');

    buttonDelete = document.querySelector('.btnDelete');

    userList     = document.querySelector( '.list-user' );



    createEvent( buttonNew, userList, buttonDelete);
    
};















