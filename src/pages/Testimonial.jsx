import React from 'react'
import UserImage from '../assets/user.png.webp'
import { MdOutlineStar } from "react-icons/md";


function Testimonial() {
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
                <td className="border w-2/12">
                  <button type="submit" className="cursor-pointer bg-gray-600 m-1 w-fit rounded text-white px-4 py-2    " >Edit</button>
                  <button type="submit" className="cursor-pointer bg-red-600 m-1 w-fit rounded text-white px-4 py-2   "  >Delete</button>
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