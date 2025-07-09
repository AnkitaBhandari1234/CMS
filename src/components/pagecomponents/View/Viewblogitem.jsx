import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Riceimg from '../../../assets/blogrice.jpg'

function Viewblogitem() {
      const blogcontent=[
        {
        src:Riceimg,
        date:'10 JAN 2018',
        name:'Cooking Perfect Fried Rice in minutes',
        text:'inappropriate behavior ipsum dolor sit amet, consectetur.',
        like:'17',
        comments:'02'
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
        .get(`http://localhost:3000/banners/${i}`)
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

      <div className="w-6/12  m-auto   ">
        {blogcontent.map((val, i) => {
          return (
            <div className="hover:cursor-pointer ">
              <div className="w-full overflow-hidden ">
                <img
                  src={val.src}
                  className="w- hover:scale-110 transition-all duration-200  ease-in-out   "
                ></img>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="bg-black w-6/12 py-1.5 text-white font-light text-center mt-5">
                  {val.date}
                </span>
                <h3 className="w-6/12 text-xl font-bold lg:font-poppins text-[#3F3E3F] hover:text-orange-700 ease-in-out duration-200 ">
                  {val.name}
                </h3>
                <p className="text-[#777777] text-md  font-light w-6/12">
                  {val.text}
                </p>
                <div className="flex justify-between text-[#777777] w-6/12   ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#656363"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="0.8"
                        d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
                      />
                    </svg>
                    <span className="text-sm">{val.like} Likes</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#726e6e"
                        d="M2.678 11.894a1 1 0 0 1 .287.801a11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6s-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7s-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"
                      />
                    </svg>
                    <span className="text-sm">{val.comments} Comments</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Viewblogitem;
