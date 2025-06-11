import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Aboutsection() {
  const [submit, setsubmit] = useState(false);
  const [datas, setdatas] = useState([]);
  
  const inputField = [
    { title: "image", type: "file" },
    { title: "title", type: "text" },
    { title: "description", type: "text" },
  ];

  return (
    <div className="lg:grid lg:grid-cols-10  flex flex-col gap-3 mx-3 px-3  ">
      <Toaster />
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">About Us Service</h1>
        <h2 className="">[image,title, description]</h2>
      </div>

      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              image: "",
              title: "",
              description: "",
            }}
            onSubmit={() => {
              setsubmit(true);
              toast.success("Form submitted successfully!");
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
            }}
          >
            {({}) => {
              return (
                <Form className="flex flex-col   items-center h-[380px] gap-5   w-full  ">
                  {inputField.map((val, i) => {
                    return (
                      <div key={i} className="w-full   ">
                        <div className="capitalize text-xl">
                          <label>{val.title}</label>
                        </div>
                        <Field
                          type={val.type}
                          id={val.title}
                          placeholder={val.title}
                          name={val.title}
                          className=" capitalize  p-1.5 border-1 border-black  w-full  rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5 "
                        />
                      </div>
                    );
                  })}
                  <div className="w-full ">
                    <button
                      type="submit"
                      className=" w-4/12  p-2  bg-gray-300 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
