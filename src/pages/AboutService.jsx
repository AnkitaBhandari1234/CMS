import React from 'react'
import CheeseSandwich from '../assets/sandwich.jpg'
import BeefCutlet from '../assets/cutlet.jpg'
import Meat from '../assets/meat.jpg'

function AboutService() {
        const categoryname = [
    {
      id: "1",
      image:<img src={CheeseSandwich} className='w-28 mx-auto'></img>,
      name: "Bread Fruit Cheese Sandwich",
      descrition:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
     
     
      
    },
    {
      id: "2",
      image:<img src={BeefCutlet} className='w-28 mx-auto'></img>,
      name: "Beef Cutlet with Spring Onion",
      descrition:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
     
     
      
    },
    {
      id: "3",
      image:<img src={Meat} className='w-28 mx-auto'></img>,
      name: "Meat with sauce & Vegetables",
      descrition:"inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.",
     
     
      
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
                <td className="border capitalize border-gray-800  w-2/12">{val.image}</td>
                <td className="border capitalize border-gray-800 w-3/12 ">{val.name}</td>
                <td className="border capitalize border-gray-800  w-4/12 px-2">{val.descrition}</td>
               
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

export default AboutService