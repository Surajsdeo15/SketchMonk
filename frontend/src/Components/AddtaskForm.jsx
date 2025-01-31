import React from 'react'

function AddtaskForm() {
  return (
    <div className='w-full h-auto rounded shadow shadow-black '>
 <form action="" className=' bg-black/50  text-white flex flex-col  p-2 rounded '>
    <label htmlFor="">Name :</label>
    <input type="text"  className='border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <label htmlFor="">Description :</label>
    <textarea name="" id="" className='border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'></textarea>
    <label htmlFor="" >Date :</label>
    <input type="date"  className=' border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <label htmlFor="">Assignee :</label>
    <input type="text"  className=' border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <input type="submit" value="Add Task" className='border mt-4 rounded shadow shadow-black active:scale-90 transition-all bg-green-600'  />

 </form>
    </div>
  )
}

export default AddtaskForm