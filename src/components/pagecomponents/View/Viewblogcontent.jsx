import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Horseridingimg from '../../../assets/blogcontent1.webp'
import { FaArrowLeft } from "react-icons/fa";
function Viewblogcontent() {

     const blogcontent=[
        {
            src:Horseridingimg,
            title:'Astronomy Binoculars A Great Alternative',
            text:'MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.'
        },
       
        
        
    ]
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
        .get(`http://localhost:3000/blogcontent/${i}`)
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
      
        <div className=" w-8/12   m-auto ">
          {blogcontent.map((val, i) => {
            return (
              <div className='flex flex-col gap-4' key={i}>
                
                <img src={val.src} className='w-full '></img>
                <h1 className='text-2xl font-poppins font-bold text-gray-800'><a href='#'>{val.title}</a></h1>
                <p className='w-full text-[16px] text-gray-500 font-[350]'>{val.text}</p>
                </div>
            );
          })}
        </div>
     
    </div>
  );
}

export default Viewblogcontent;
