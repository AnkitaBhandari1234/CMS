import React from 'react' 
import Sociallife from '../assets/Sociallife.jpg'
import PoliticsPerson from '../assets/politics.jpg'
import FoodImage from '../assets/food.jpg'

function Blogcard() {
           const categoryname = [
        {
          id: "1",
          image:<img src={Sociallife} className='w-28 mx-auto'></img>,
          title:'Social Life',
          subtitle:'Enjoy your social life together',
         
         
          
        },
        {
          id: "2",
          image:<img src={PoliticsPerson} className='w-28 mx-auto'></img>,
          title:'Politics',
          subtitle:'Be a part of politics',
         
         
          
        },
        {
          id: "3",
          image:<img src={FoodImage} className='w-28 mx-auto'></img>,
          title:'Food',
          subtitle:'Let the food be finished',

         
         
          
        },
       
       
      ];
  return (
    <div className=''>
      <table  className=" border-gray-800 w-11/12 text-center mx-auto my-4 h-[500px]">
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
                <td className="border capitalize border-gray-800  w-3/12">{val.image}</td>
                <td className="border capitalize border-gray-800 w-2/12 ">{val.title}</td>
                <td className="border capitalize border-gray-800  w-3/12 px-2">{val.subtitle}</td>
               
                <td className="border w-3/12">
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

export default Blogcard