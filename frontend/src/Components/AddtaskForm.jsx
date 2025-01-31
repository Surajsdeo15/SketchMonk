import React, { useContext,useState } from 'react'
import { MyContext } from '../App'

function AddtaskForm() {
  const [formData, setFormData] = useState({
    name: '',
    des: '',
    date: '',
    assignee: '',
  });
  const {DataFetching,setRealTime,RealTime}=useContext(MyContext)
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    DataFetching(formData); // Send data to DataFetching function
  
    setFormData({ name: '', des: '', date: '', assignee: '' }); // Reset form
    setRealTime(!RealTime);
  };
  return (
    <div className='w-full h-auto rounded shadow shadow-black '>
 <form onSubmit={handleSubmit} className=' bg-black/50  text-white flex flex-col  p-2 rounded '>
    <label htmlFor="">Name :</label>
    <input type="text"  name="name"
          value={formData.name}
          onChange={handleChange}  className='border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <label htmlFor="">Description :</label>
    <textarea name="des" id=""  value={formData.des}
          onChange={handleChange} className='border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'></textarea>
    <label htmlFor="" >Date :</label>
    <input type="date"  name="date"
          value={formData.date}
          onChange={handleChange}  className=' border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <label htmlFor="">Assignee :</label>
    <input type="text"  name="assignee"
          value={formData.assignee}
          onChange={handleChange} className=' border rounded h-8 focus:outline-none focus:shadow-inner shadow-black p-1'/>
    <input type="submit" value="Add Task" className='border mt-4 rounded shadow shadow-black active:scale-90 transition-all bg-green-600'  />

 </form>
    </div>
  )
}

export default AddtaskForm