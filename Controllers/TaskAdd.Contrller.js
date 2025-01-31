import {Task} from '../Models/TaskModels.js'
export const TaskAddController=async(req,res)=>{
const {name,des,date,assignee}=req.body.FormData;


console.log("Data is  comming to the backend:",req.body.FormData);

try {
    const arr=[name,des,date,assignee];
    console.log("Data Array is :",arr);
    
 if(arr.includes('')){
    return res.status(400).json({message:"All Data is Required ",success:false})
 }

 
 const task=new Task({
    name,
    des,
    date,
    assingUser:assignee
 })
 await task.save();
 return res.status(200).json({message:"Task Added Successfully",success:true})
    
} catch (error) {
    return res.status(500).json({
        message:"Internal Server Error",
        success:false,
    })
}
} 