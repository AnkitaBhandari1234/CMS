import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Reviewimage from '../../../assets/user.png.webp';

function Viewtestimonial() {
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
        .get(`http://localhost:3000/testimonial/${i}`)
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
    
         
            <div className="h-[400px] w-full flex flex-col items-center    ">
      <img src={Reviewimage} className="w-fit h-fit"></img>
      <h1 className="capitalize text-xl font-bold">Hilds sutton</h1>
      <div className="flex gap-1">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <p className=" w-4/12 text-center text-gray-700">
        “Accessories Here you can find the best computer accessory for your
        laptop, monitor, printer, scanner, speaker. Here you can find the
        best computer accessory for your laptop, monitor, printer, scanner,
        speaker.”
      </p>
    </div>
          
        </div>
  )
}

export default Viewtestimonial