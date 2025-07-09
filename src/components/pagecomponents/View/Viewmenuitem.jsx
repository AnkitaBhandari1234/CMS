import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Viewmenuitem() {
    const foodname =[
   {
     name:'cappuccion',
     price:'$49',
     text:'  Usage of the Internet is becoming more common due to rapid advance.'
   },]
      const location = useLocation();
  const navigate = useNavigate();
  console.log(location, navigate);

  const linkPth = location.pathname.split(`/`);
  console.log(linkPth[2]);
  const [datas, setdatas] = useState([]);
  const getdatas = (i) => {
    console.log(i);
    try {
      axios
        .get(`http://localhost:3000/category/${i}`)
        .then((result) => {
          console.log(result.data);
          setdatas([result.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdatas(linkPth[2]);
  }, []);
  return (
    <div className="">
         {/* back */}
         <div className="w-full h-6/12   ">
           <div
             className=" px-2 bg-gray-300 rounded-full text-gray-600 w-fit h-fit py-2 "
             onClick={() => {
               navigate(-1);
             }}
           >
             <FaArrowLeft className=" text-gray-600 text-xl " />
           </div>
         </div>
         {/* content */}
   
        
           <div className="w-8/12  m-auto   ">
                 {
          foodname.map((val,i)=>
            {
            return(


        <div className="bg-gray-200 px-8  py-7 lg:py-5 rounded-[6px]  " key={i}>
          <div className="flex justify-between mb-3 ">
            <h1 className="text-xl capitalize  font-poppins text-[#222222] font-bold">
              {val.name}
            </h1>
            <span className="text-red-600 font-bold text-xl">{val.price}</span>
          </div>
          <p className="text-[#808484] font-sm  lg:w-10/12">
            {val.text}
          </p>
        </div>
            );
          })
        }
               </div>
         
       </div>
  )
}

export default Viewmenuitem