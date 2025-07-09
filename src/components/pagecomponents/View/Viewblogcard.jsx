import React, { useEffect, useState } from "react";
import View from "./View";
import Sociallifeimg from "../../../assets/sociallife.jpg";
import Politicsimg from "../../../assets/politics.jpg";
import Foodimg from "../../../assets/sandwich.jpg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Viewblogcard() {
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
        .get(`http://localhost:3000/blogcard/${i}`)
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
  const blogcardcontent = [
    {
      name: "Social Life",
      description: "Enjoy your social life together",
      imageid: Politicsimg,
    },
  ];
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
      <div className="">
        <div className="grid lg:grid-cols-3 lg:w-11/12 h-7/12  gap-7 m-auto lg:px-7 px-4">
          {blogcardcontent.map((val, i) => {
            return (
              <div className="w-6/6 h-11/12 relative " key={i}>
                <img src={val.imageid} alt="" className="h-full  w-full"></img>

                <div className="flex flex-col gap-2 absolute top-0 bottom-0 left-0 right-0 w-full h-full justify-center items-center ">
                  <div className="bg-[#0a0909] w-5/6 h-5/6  opacity-85 absolute"></div>
                  <h1 className="text-white text-[17px] uppercase font-poppins font-bold relative">
                    {val.name}
                  </h1>
                  <span className="w-3/6 h-0.5 border-b-2 border-white relative"></span>
                  <p className="text-white font-poppins relative">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Viewblogcard;
