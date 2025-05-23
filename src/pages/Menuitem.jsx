import React, { useState } from 'react'
import EditDeleteButton from '../components/ui/EditDeleteButton';
import EditMenuSection from '../components/pagecomponents/editmenusection/EditMenuSection';

function Menuitem() {
  const [click,setclick]=useState(false)
      const categoryname = [
    {
      id: "1",
      name: "Cappuccion",
      descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',
     
      
    },
    {
      id: "2",
      name: "Americano",
       descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',

    },
    { id: "3",
       name: "Macchiato",
        descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',
       },
    { id: "4",
       name: "Piccolo Latte",
        descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',
       },
    { id: "5",
       name: "Mocha",
        descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',
       },
    { id: "6",
       name: "Ristretto",
        descrition:"Usage of the Internet is becoming more common due to rapid advance.",
      price:'$49',
       },
   
  ];
  
  return (
   <div className=''>
      <table  className=" border-gray-800 w-11/12 text-center mx-auto my-4 h-[500px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Name</th>
            <th className="border">Description</th>
            <th className="border">price</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {categoryname.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800 ">{val.name}</td>
                <td className="border capitalize border-gray-800  w-4/12">{val.descrition}</td>
                <td className="border capitalize border-gray-800 ">{val.price}</td>
                  <td className=" w-full h-full flex items-center justify-center">
                <button type='submit' className='cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2' onClick={()=>{
                  setclick(true)
                }}>Edit</button>
                  {
                    click?<div className='fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/30 flex items-center'>
                      <EditMenuSection cancel={()=>{
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

export default Menuitem