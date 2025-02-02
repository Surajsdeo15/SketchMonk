import React, { useContext, useState } from 'react';
import { motion } from "framer-motion";
import { MyContext } from '../App';
import { DragContext } from './TodoAdd';

function AssignTaskCard({tasks}) {
    const [toggle,setToogle]=useState(false);
  

const {handleDragEnd}=useContext(DragContext)
const {setRealTime,RealTime}=useContext(MyContext)

const deleteData=async(id)=>{
    const response =await fetch(`https://sketchmonk-44po.onrender.com/api/delete/${id}`,{

        method:'post'
    })  
if(response)
    setRealTime(!RealTime);
    const data =await response.json();
}

    return (
        <div className='w-full  h-20 rounded-lg bg-gray-500/20 border flex  '>

         <motion.div drag
                dragConstraints={{ left: -300, right: 700, top: -150, bottom: 750 }}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                onDragEnd={(event,info)=>handleDragEnd(event,info,tasks._id)}
                className='w-full h-20 rounded-lg bg-white  shadow shadow-black flex flex-col gap-1 p-2 cursor-grab '>
{/*  */}

                <div className='font-mono text-lg  text-black/90 flex justify-between'>
                    <h1 className='description'>{tasks.name}</h1>
                    <h4 onClick={()=>setToogle(!toggle)} className='-mt-2 text-slate-600 cursor-pointer'>...</h4>
                </div>

                <div className='flex justify-between gap-2'>
                    <div className='flex space-x-3 '>
                        <div className='rounded-full  w-8 h-8 shadow shadow-black  overflow-hidden'>
                            <h1 className='bg-slate-900/60 w-full h-full pl-[2px] -pt-[2px] text-xl '>🧞‍♂️</h1>
                        </div>
                        <div className='text-red-500 font-semibold font-mono mt-1 text-xs'>
                            {tasks.date}

                        </div>
                    </div>


                    <div className=' p-1 rounded-lg bg-slate-300 text-slate-600/80 font-semibold font-mono'>
                       {tasks.des}
                    </div>


                </div>


            </motion.div>

           {toggle &&( <div className=' space-y-3 absolute left-[76rem] top-[15rem]  h-24 rounded font-bold text-center border bg-slate-400 text-white p-2 '>
                <h1>Are you sure to Delete?</h1>
                <span onClick={()=>deleteData(tasks._id)} className='border bg-red-500 p-1 rounded cursor-pointer'>yes</span>  <span className='border bg-green-500 p-1 rounded cursor-pointer ' onClick={()=>setToogle(!toggle)}>No</span>
            </div>
)}



        </div>
    )
}

export default AssignTaskCard