

export const GetData=async()=> {

    const response =await fetch('https://sketchmonk-44po.onrender.com/api/get');

    const data =await response.json();
    return data;

 
}

 