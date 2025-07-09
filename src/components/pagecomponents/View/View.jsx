import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function View() {
 
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

  return (
    <div className="w-full h-6/12   ">
      vhmjhg
      <div
        className=" px-2 bg-gray-300 rounded-full text-gray-600 w-fit h-fit py-2 "
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaArrowLeft className=" text-gray-600 text-xl " />
      </div>

      
      
    </div>
  );
}

export default View;
