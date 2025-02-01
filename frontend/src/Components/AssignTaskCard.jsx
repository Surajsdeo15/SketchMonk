import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { MyContext } from '../App';
import { DragContext } from './TodoAdd';

function AssignTaskCard({tasks}) {

const {handleDragEnd}=useContext(DragContext)



    return (
        <div className='w-full  h-20 rounded-lg bg-gray-500/20 '>

         <motion.div drag
                dragConstraints={{ left: -300, right: 700, top: -150, bottom: 750 }}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
                onDragEnd={(event,info)=>handleDragEnd(event,info,tasks._id)}
                className='w-full h-20 rounded-lg bg-white  shadow shadow-black flex flex-col gap-1 p-2 cursor-grab '>

                <div className='font-mono text-lg  text-black/90'>
                    <h1 className='description'>{tasks.name}</h1>
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




        </div>
    )
}

export default AssignTaskCard