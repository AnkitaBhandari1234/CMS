import React, { useEffect, useState } from 'react'
import CheeseSandwich from '../assets/sandwich.jpg'
import BeefCutlet from '../assets/cutlet.jpg'
import Meat from '../assets/meat.jpg'
import EditDeleteButton from '../components/ui/EditDeleteButton';
import Editabout from '../components/pagecomponents/EditaboutSection/Editabout';
import axios from 'axios';

function AboutService() {
  const [click,setclick]=useState(false)
  const [datas, setdatas] = useState([]);
  const getdatas = () => {
    try {
      axios
        .get("http://localhost:3000/aboutus")
        .then((result) => {
          console.log(result.data);
          setdatas([...result.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdatas();
  }, []);
  return (
   <div className=''>
      <table  className=" border-gray-800 w-11/12 text-center mx-auto my-4 h-[500px]">
        <thead className=" h-19  bg-gray-500 border-gray-800">
          <tr className="text-xl text-white font-semibold">
            <th className="">S:N</th>
            <th className="border">Image</th>
            <th className="border">Title</th>
            <th className="border">Description</th>
            
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody className="border">
          {datas.map((val, i) => {
            return (
              <tr key={i} className="border border-gray-800">
                <td className="">{val.id}</td>
                <td className="border capitalize border-gray-800  w-2/12">{val.image}</td>
                <td className="border capitalize border-gray-800 w-3/12 ">{val.title}</td>
                <td className="border capitalize border-gray-800  w-4/12 px-2">{val.description}</td>
               
               <td className=" w-full h-full flex items-center justify-center">
                <button type='submit' className='cursor-pointer bg-gray-600 m-1 w-fit h-10 rounded text-white px-4 py-2' onClick={()=>{
                  setclick(true)
                }}>Edit</button>
                  {
                    click?<div className='fixed top-0 left-0 right-0 bottom-0 bg-[#9f9f9c]/30 flex items-center'>
                     <Editabout cancel={()=>{
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

export default AboutService