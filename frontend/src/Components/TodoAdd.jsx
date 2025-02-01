import React, { useContext, useState,useEffect, createContext } from 'react'
import AddtaskForm from './AddtaskForm'
import AssignTaskCard from './AssignTaskCard'
// import { MyContext } from '../App';

export const DragContext=createContext();
function TodoAdd({text,dataProgress,setDataProgress,clasyName}) {
  const [task,setTask]=useState(false);
  // const {data}=useContext(MyContext);
  // console.log("array: ",data);

  // console.log("Data is :",dataProgress);




 async  function handleDragEnd(event,info,taskID){
 const completedSection=document.getElementsByClassName('Drag-Complete-section');
 if (completedSection) {
 

    try {
      const response = await fetch(`https://sketchmonk-44po.onrender.com/api/task/${taskID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "completed" }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      // Update UI after successful response
      setDataProgress((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskID ? { ...task, status: "completed" } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  
}

  }
  


  return (
    <DragContext.Provider value={{handleDragEnd}}>

   
    <div className='w-64 h-auto space-y-6  '>
        {/* Title and Plus And ... buttons */}
      <div className='flex justify-between  text-xl font-semibold'>  <h1 className='ml-3 tracking-tighter'>{text}</h1> <h1 className='space-x-4 mr-3 text-slate-300'><span >+</span><span>...</span></h1></div>
      {/* Dashboard of Tasks */}
    <div className={`${text=='Review'?clasyName:''} w-64 h-[500px]   bg-gray-400/20   rounded-xl p-3`}>
    {/* yahi se data bhejna h */}
       {text !=='To do' &&   (<div className='mt-4 space-y-4'>
        {dataProgress.map((tasks,index)=>{
          return (  <AssignTaskCard key={index} tasks={tasks}/>)
        })}
        
        </div>)}
    {(text=='To do' || text=='In Progress') && ( <div className='text-center mt-5 '>
            <h1 onClick={()=>setTask(!task)} className=' mr-3 text-slate-900/45 text-xl font-medium font-mono cursor-pointer'><span>+</span> <span>
                Add task</span></h1>
        </div>)}
       

        {task && <div>
            <AddtaskForm/>
        </div>}

        

    </div>

{/* Review section */}

   

    </div>
    </DragContext.Provider>
    
  )
}

export default TodoAdd