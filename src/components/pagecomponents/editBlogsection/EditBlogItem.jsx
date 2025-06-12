import React from "react";

import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function EditBlogItem({ cancel, editdata }) {
  const inputField = [
    {
      title: "image",
      type: "file",
    },
    {
      title: "subtitle",
      type: "string",
    },
    {
      title: "title",
      type: "text",
    },
    {
      title: "description",
      type: "text",
    },

    {
      title: "like",
      type: "number",
    },
    {
      title: "comments",
      type: "number",
    },
  ];
  return (
    <div className=" bg-gray-800 w-4/12 flex items-center justify-center mx-auto overflow-y-scroll   ">
      <Toaster/>
      <div className=" ">
        <div className="text-white ">
          <Formik
            initialValues={{
              image: "",
              title:
                editdata.length > 0 && editdata[0].title
                  ? editdata[0].title
                  : "",
                  subtitle:editdata.length>0 && editdata[0].subtitle?editdata[0].subtitle:'',

              description:
                editdata.length > 0 && editdata[0].description
                  ? editdata[0].description
                  : "",
              like: editdata && editdata[0].like ? editdata[0].like : "",
              comments:editdata && editdata[0].comments ? editdata[0].comments : "",
            }}
            onSubmit={(values)=>{
                      try {
      axios
        .patch(`http://localhost:3000/banners/${editdata.length>0 && editdata[0].id}`,values)
        .then((result) => {
          console.log(result.data);
          toast.success("Form submitted successfully!");
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }

            }}
          >
            {({handleSubmit}) => {
              return (
                <Form onSubmit={handleSubmit} className="flex flex-col   text-left h-[600px] gap-5   w-full justify-center mx-auto   ">
                  {inputField.map((val, i) => {
                    return (
                      <div key={i} className="w-full    ">
                        <div className="capitalize text-xl">
                          <label className="text-2xl ">{val.title}</label>
                        </div>
                        <Field
                          type={val.type}
                          id={val.title}
                          placeholder={val.title}
                          name={val.title}
                          className=" capitalize  p-1.5 border-1 border-white  w-full  rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5 "
                        />
                      </div>
                    );
                  })}
                  <div className="w-full flex  gap-5 justify-center  ">
                    <button
                      type="submit"
                      className=" w-4/12  p-1  bg-gray-500 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition"
                    >
                      Submit
                    </button>
                    <div
                      onClick={cancel}
                      type="submit"
                      className=" w-4/12  p-1  bg-red-700 text-white uppercase text-lg font-medium rounded cursor-pointer "
                    >
                      cancel
                    </div>
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

export default EditBlogItem;
