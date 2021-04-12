let persons = [];


const createPerson =async (person)=>{

    persons.push(await person);

    return persons;

}



const deletePerson = (id)=>{

    persons = persons.filter(person=>persons[id-1].id != id );

    return persons;
    
}


export{

    createPerson,
    deletePerson

}
