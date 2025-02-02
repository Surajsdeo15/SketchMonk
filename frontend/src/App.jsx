import React, { createContext, useEffect, useState } from 'react'
import TodoAdd from './Components/TodoAdd'
import Navbar from './Components/Common/Navbar'
import { DataFetching } from './MyContext/DataFetching.js';
import { GetData } from './MyContext/GetData.js';
import { CompleteDataFetch } from './MyContext/TaskCompleteDataFetching.js';
export const MyContext=createContext();

 function App () {
  const [data, setData] = useState([]);
  const [comData, setComData] = useState([]);
  const [RealTime,setRealTime]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await GetData();
        const resultComplete=await CompleteDataFetch();
        console.log(resultComplete);
        
        console.log("Data is is :", result.tasks);
        setData(result.tasks);
        setComData(resultComplete.tasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [RealTime]); 
  return (
    <MyContext.Provider value={{DataFetching,data,comData,setRealTime,RealTime}}>
    <div className='bg-slate-300 w-full h-screen p-12 fixed overflow-auto'>
    <div className='w-full h-screen bg-white  p-2  rounded shadow-md shadow-black'>
      <Navbar/>
      <div className='w-full h-auto  flex justify-center gap-7 items-center p-4 '>
      <TodoAdd text="To do"/>
      <TodoAdd text="In Progress" dataProgress={data} />
      <TodoAdd text="Review" clasyName="Drag-Complete-section" dataProgress={comData} setDataProgress={setComData}/>
      <TodoAdd text="Review" clasyName="Drag-Complete-section"   dataProgress={comData} setDataProgress={setComData}/>
     <div className='w-64 h-8  text-slate-500 ml-12 relative -top-64  '>
       <h1 className='space-x-4'>
        <span className='text-xl font-bold text-slate-400'>+</span>
       <span className='font-bold text-md'> Add section</span>
       </h1>

     </div>
     </div>

    </div>
    </div>
    </MyContext.Provider>

  )
}

export default App