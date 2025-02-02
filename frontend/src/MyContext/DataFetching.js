export const DataFetching=async(FormData)=>{
    console.log("Data is comming from the  form :",FormData);
    // 'https://sketchmonk-44po.onrender.com
    
 const response=await fetch('https://sketchmonk-44po.onrender.com/api/add',
   {

    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({FormData})
   }


 )
 const data=await response.json();

 return data;
}