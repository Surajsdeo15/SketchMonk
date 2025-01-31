import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-14  flex justify-between pl-4 pr-4 pt-2 '>
            <div className='flex  gap-4'>
                <div className='w-10 h-10 rounded-lg  border border-slate-400 text-3xl text-slate-500 font-bold  flex justify-center
            items-center'>
                    <span className='relative -top-1' >←</span>

                </div>
                <div className='w-10 h-10 rounded-lg  bg-slate-900 text-3xl text-slate-500 font-bold  flex justify-center
            items-center'>
                    <span className='relative  text-white text-xl' ><i class="fi fi-brands-apple"></i></span>

                </div>
                <div className='text-slate-900  text-xl font-bold'>
                    <h1 className='-mt-1'>Apple</h1>
                    <h6 className='text-slate-300 text-xs font-sans'><span>5 boards</span> . <span>24 members</span></h6>
                </div>

            </div>

            <div className='flex gap-4'>
                <div className='w-64 h-10 rounded-lg border border-slate-300 bg-white focus:outline-1 flex '>
                    <h4 className='w-8 text-center pt-2 text-slate-400 '><i class="fi fi-br-search"></i></h4>
                    <input type="text" className='  w-56 h-10 object-cover rounded-e-lg focus:outline-none text-slate-500 font-semibold font-mono' />

                </div>
                <div className='w-10 h-10 rounded-lg  border border-slate-400 text-3xl text-slate-500 font-bold  flex justify-center
            items-center'>
                    <span className='pt-1 text-xl' ><i class="fi fi-rr-share-square"></i></span>

                </div>
                <div className='w-10 h-10 rounded-lg  border border-slate-400 text-3xl text-slate-500 font-bold  flex justify-center
            items-center'>
                    <span className=' pt-1 text-xl' ><i class="fi fi-sc-settings"></i></span>

                </div>

            </div>
        </div>
    )
}

export default Navbar