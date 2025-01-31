export const DataFetching=async(FormData)=>{
    console.log("Data is comming from the  form :",FormData);
    
 const response=await fetch('http://localhost:4000/api/add',
   {

    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({FormData})
   }


 )
 const data=await response.json();

 return data;
}