const url = 'https://reqres.in/api/users';


export const getUser    = async (id)=>{

    const petition      = await fetch(`${url}/${id}`);
    
    const {data:result} = await petition.json();
    

    return result;

};




