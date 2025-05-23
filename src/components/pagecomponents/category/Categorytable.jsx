import React, { useState } from 'react'
import EditDeleteButton from '../../ui/EditDeleteButton.jsx';
import Editcategory from '../editcategory/Editcategory.jsx';


function Categorytable() {
  const [click,setclick]=useState(false)
  
     const categoryname = [
    {
      id: "1",
      name: "Breakfast",
     
      
    },
    {
      id: "2",
      name: "dinner",
    },
    { id: "3", name: "lunch" },
    {
      id: "4",
      name: "budget meal",
    },
    {
      id: "5",
      name: "buffet",
    },
  ];

  
 
  return (

    <div className='relative'>
      <table  className=" border-gray-800 w-10/12 text-center mx-auto my-4 h-[400px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Title</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {categoryname.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800 ">{val.name}</td>
                <td className=" w-full h-full flex items-center justify-center">
                        <button type="submit" className="cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2   " onClick={()=>{
                    setclick(true)
                  }} >Edit</button>
                  {
                   click?<div className='fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/20 flex items-center'> 
                  

                   <Editcategory cancel={()=>{
                    setclick(false)
                   }}/>
                   
                   </div>:null
                  }
                 
                  <EditDeleteButton/>
                  </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Categorytable