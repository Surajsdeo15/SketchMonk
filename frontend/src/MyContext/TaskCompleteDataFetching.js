const BASE_URL = import.meta.env.VITE_BASE_URL;
export const CompleteDataFetch=async()=> {

    const response =await fetch(`https://sketchmonk-44po.onrender.com/api/get/complete`);

    const data =await response.json();
    return data;

 
}