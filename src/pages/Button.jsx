import React, { useState } from 'react'

function Button() {
    const[clickable,setclickable]=useState(false);
  return (
    <div className='bg-gray-800 w-2/12 text-white text-center mx-auto  rounded font-semibold '>
          <button type='submit' onClick={()=>{
           setclickable(true)
          }} className='hover:text-white hover:bg-[#3a393a] w-full p-1.5 rounded  '>Click Me</button>
              

          {
            
            clickable?<div className='fixed top-0 left-0 right-0 bottom-0 z-10 w-screen h-screen  flex items-center justify-center bg-gray-400/80 '>
                <div className='w-4/12  h-5/12 bg-gray-900/90 text-3xl text-center place-content-center capitalize   '>
                    hello
                    </div>
                    </div>:null
          }
        </div>
  )
}

export default Button