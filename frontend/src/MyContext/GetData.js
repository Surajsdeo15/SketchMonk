

export const GetData=async()=> {

    const response =await fetch('http://localhost:4000/api/get');

    const data =await response.json();
    return data;

 
}

 