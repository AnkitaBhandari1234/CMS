import React from 'react'
import FriedRice from '../assets/blogrice.jpg'
import EggImage from '../assets/blogegg.jpg'
import SteakImage from '../assets/blogsteak.jpg'
import FlavouredBun from '../assets/blogbun.jpg'
import EditDeleteButton from '../components/ui/EditDeleteButton'

function BlogItem() {
          const categoryname = [
    {
      id: "1",
      image:<img src={FriedRice} className='w-25 mx-auto'></img>,
      date:'10 Jan 2018',
      name: "Cooking Perfect Fried Rice in minutes",
      descrition:"inappropriate behavior ipsum dolor sit amet, consectetur.",
      like:"15",
      comments:'02',
     
      
    },
    {
      id: "2",
      image:<img src={EggImage} className='w-25 mx-auto'></img>,
      date:'10 Jan 2018',
      name: "Secret of making Heart Shaped eggss",
      descrition:"inappropriate behavior ipsum dolor sit amet, consectetur.",
      like:"15",
      comments:'02',
     
      
    },
    {
      id: "3",
      image:<img src={SteakImage} className='w-25 mx-auto'></img>,
      date:'10 Jan 2018',
      name: "How to check steak if it is tender or not",
      descrition:"inappropriate behavior ipsum dolor sit amet, consectetur.",
      like:"15",
      comments:'02',
     
      
    },
    {
      id: "4",
      image:<img src={FlavouredBun} className='w-25 mx-auto'></img>,
      date:'10 Jan 2018',
      name: "Seaseme and black seed Flavored Bun Rocks",
      descrition:"inappropriate behavior ipsum dolor sit amet, consectetur.",
      like:"15",
      comments:'02',
     
      
    },
    
  ];
  return (
      <div className=''>
      <table  className=" border-gray-800 w-full text-center mx-2 my-4 h-[500px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-medium text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Date</th>
            <th className="border">Name</th>
            <th className="border">Description</th>
            <th className="border">Likes</th>
            <th className="border">Comments</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {categoryname.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800 ">
                <td className="p-6">{val.id}</td>
                <td className="border capitalize border-gray-800  px-1 ">{val.image}</td>
                <td className="border capitalize border-gray-800 w-1/12">{val.date}</td>
                <td className="border capitalize border-gray-800  ">{val.name}</td>
                <td className="border capitalize border-gray-800  ">{val.descrition}</td>
                <td className="border capitalize border-gray-800 p-8 ">{val.like}</td>
                <td className="border capitalize border-gray-800  ">{val.comments}</td>
                <td className="border w-2/12">
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

export default BlogItem