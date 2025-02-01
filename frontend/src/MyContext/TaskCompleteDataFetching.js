export const CompleteDataFetch=async()=> {

    const response =await fetch('http://localhost:4000/api/get/complete');

    const data =await response.json();
    return data;

 
}