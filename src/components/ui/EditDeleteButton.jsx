import React, { useState } from 'react'

function EditDeleteButton({deleteChange,setdeleteclick,click}) {
  return (
    <div>

        {/* edit button */}
        

                  {/* Delete Button */}
        <button type="submit" className="cursor-pointer bg-red-600 m-1 w-fit rounded text-white px-4 py-2   " onClick={()=>{
                    setdeleteclick()
                  }} >Delete</button>
                  {
                    click?<div className='fixed top-0 left-0 z-10 bottom-0 right-0 bg-[#9f9f9c]/90 flex justify-center items-center'>
                      <div className='flex justify-center flex-col gap-8 bg-gray-900/80 w-5/12 h-6/12 rounded'>
                        <h1 className='text-2xl text-white '>Are you sure you want to Delete?</h1>
                        <div  className='flex justify-center gap-4  '>
                          <button type="submit" onClick={()=>deleteChange()} className="cursor-pointer bg-red-600  w-20 h-10 rounded text-white text-sm font-semibold    "  >Yes</button>
                          <button type="submit" className="cursor-pointer bg-gray-600  w-20 h-10 rounded text-white text-sm font-semibold  " onClick={()=>{setdeleteclick()}}  >No</button>
                        </div>
                      </div>
                    </div>:null
                  }
                  
    </div>
  )
}

export default EditDeleteButton