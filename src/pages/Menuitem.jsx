import React from 'react'
import EditDeleteButton from '../components/ui/EditDeleteButton';

function Menuitem() {
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
                <td className="border w-3/12">
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