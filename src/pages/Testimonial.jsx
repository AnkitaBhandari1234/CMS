import React, { useState } from 'react'
import UserImage from '../assets/user.png.webp'
import { MdOutlineStar } from "react-icons/md";
import EditDeleteButton from '../components/ui/EditDeleteButton';
import EditReviewSection from '../components/pagecomponents/editReviewsection/EditReviewSection';




function Testimonial() {
  const [clicked,setClicked]=useState(false);
 
        const categoryname = [
    {
      id: "1",
      image: <img src={UserImage} className='w-15 mx-auto'></img>,
      rating: <MdOutlineStar className='text-2xl text-orange-500'  />  ,
      name:"Hulda Sutton",
      description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker",
     
      
    },
    {
      id: "2",
      image: <img src={UserImage} className='w-15 mx-auto'></img>,
      rating: <MdOutlineStar className='text-2xl text-orange-500'  />  ,
      name:"Hulda Sutton",
      description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker",
     
      
    },
    {
      id: "3",
      image: <img src={UserImage} className='w-15 mx-auto'></img>,
      rating: <MdOutlineStar className='text-2xl text-orange-500'  />  ,
      name:"Hulda Sutton",
      description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker",
     
      
    },
    {
      id: "4",
      image: <img src={UserImage} className='w-15 mx-auto'></img>,
      rating: <MdOutlineStar className='text-2xl text-orange-500'  />  ,
      name:"Hulda Sutton",
      description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker",
     
      
    },
   
  ];
  
  return (
     <div className='h-lvh'>
      <table  className=" border-gray-800 w-full text-center  my-4 h-[400px] mx-2 ">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Name</th>
            <th className="border">Rating</th>
            <th className="border">Description</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {categoryname.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800   ">{val.image}</td>
                <td className="border capitalize border-gray-800 ">{val.name}</td>
                <td className="border capitalize border-gray-800 ">{val.rating}</td>
                <td className="border capitalize border-gray-800 w-5/12 text-[12px] px-2 ">{val.description}</td>
                
                <td className=" w-full h-full flex items-center justify-center">
                        <button type="submit" className="cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2   " onClick={()=>{
                    setClicked(true)
                  }} >Edit</button>
                  {
                   clicked?<div className='fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/20 flex items-center'> 
                  

                   <EditReviewSection cancel={()=>{setClicked(false)}} />
                   
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

export default Testimonial