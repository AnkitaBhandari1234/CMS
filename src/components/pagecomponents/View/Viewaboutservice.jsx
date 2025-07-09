import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Sandwichimg from '../../../assets/sandwich.jpg'
import axios from "axios";
function Viewaboutservice() {
     const aboutitem=[
    {
      src:Sandwichimg,
      name:'Bread Fruit Cheese Sandwich',
      text:'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.'

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
        .get(`http://localhost:3000/aboutus/${i}`)
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
              {aboutitem.map((val, i) => {
                return (
                  <div className="flex flex-col gap-3 w-11/12 px-4 " key={i}>
                    <img src={val.src}></img>
                    <h1 className="text-xl font-semibold font-poppins">
                      {val.name}
                    </h1>
                    <p className="text-[#777777] font-light w-11/12">
                      {val.text}
                    </p>
                  </div>
                );
              })}
            </div>
      
    </div>
  );
}

export default Viewaboutservice;
