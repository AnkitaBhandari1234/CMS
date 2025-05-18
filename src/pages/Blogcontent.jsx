import React from 'react'
import BinocularImage from '../assets/blogcontent1.webp'
import TelescopeImage from '../assets/blogcontent2.webp'
import GlossaryImage from '../assets/blogcontent3.webp'
import NightImage from '../assets/blogcontent4.webp'
import CityImage from '../assets/blogcontent5.webp'


function Blogcontent() {
              const categoryname = [
            {
              id: "1",
              image:<img src={BinocularImage} className='w-28 mx-auto'></img>,
              title:'Astronomy Binoculars A Great Alternative',
              description:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction'
             
             
              
            },
            {
              id: "2",
              image:<img src={CityImage} className='w-28 mx-auto'></img>,
              title:'The Basics Of Buying A Telescopes',
               description:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction',
             
             
              
            },
            {
              id: "3",
              image:<img src={TelescopeImage} className='w-28 mx-auto'></img>,
              title:'The Glossary Of Telescopes',
               description:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction',
    
             
             
              
            },
            {
              id: "4",
              image:<img src={GlossaryImage} className='w-28 mx-auto'></img>,
              title:'The Night Sky',
               description:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction',
    
             
             
              
            },
            {
              id: "5",
              image:<img src={NightImage} className='w-28 mx-auto'></img>,
              title:'Telescopes 101',
               description:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction',
    
             
             
              
            },
           
           
          ];
  return (
   <div className=''>
      <table  className=" border-gray-800 w-full text-center  my-4 h-[500px] mx-2">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Name</th>
            <th className="border">Description</th>
            
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {categoryname.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800  w-2/12">{val.image}</td>
                <td className="border capitalize border-gray-800 w-2/12 ">{val.title}</td>
                <td className="border capitalize border-gray-800  w-5/12 px-2 text-sm">{val.description}</td>
               
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

export default Blogcontent