import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";

function EditReviewSection({cancel}) {
    
    const inputField = [
        {
          title: "image",
          type: "file",
        },
        {
          title: "name",
          type: "text",
        },
        {
          title: "rating",
          type: "number",
        },
        {
          title: "description",
          type: "text",
        },
      ];
      
  return (
    
          <div className='bg-gray-800 w-5/12 h-fit flex items-center justify-center mx-auto '>
            <div className=" flex flex-col gap-4 w-full pl-8   ">
              
    
              <div className="  ">
              
                  <Formik>
                   
                        <Form className="flex flex-col  gap-4 items-center h-[500px]   w-full justify-center  ">
                          {inputField.map((val, i) => {
                            if (val.type == "file") {
                              return (
                                <div
                                  key={i}
                                  className="w-full   capitalize text-xl    text-white text-left  "
                                >
                                  <label>{val.title}:</label>
                                  <input
                                    type={val.type}
                                    id={val.title}
                                    name={val.title}
                                    placeholder={val.title}
                                    onChange={(e) => {
                                      setFieldValue(val.title, e.target.files[0]);
                                    }}
                                    className="outline-none hidden "
                                  />
    
                                  <label htmlFor={val.title}>
                                    <img
                                        src={Image}
                                        className="my-2  border-dashed border-1 border-white   p-8  "
                                      ></img>
                                  </label>
                                </div>
                              );
                            } else {
                              return (
                                <div key={i} className="w-full flex flex-col  text-white  ">
                                  <div className="capitalize text-xl text-left ">
                                    <label>{val.title}:</label>
                                  </div>
                                  <Field
                                    type={val.type}
                                    id={val.title}
                                    placeholder={val.title}
                                    name={val.title}
                                    className=" capitalize w-11/12   p-1.5 border-1 border-white   rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5  "
                                  />
    
                                  
                                </div>
                              );
                            }
                          })}
                          <div className="w-full flex  gap-5 justify-center  ">
                            <button
                              type="submit"
                              className=" w-3/12  p-1  bg-gray-300 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition"
                            >
                              Submit
                            </button>
                            <button
                            onClick={cancel}
                              type="submit"
                              className=" w-3/12  p-1  bg-red-700 text-white uppercase text-lg font-medium rounded cursor-pointer "
                             
                             
                            >
                              cancel
                            </button>
                          </div>
                        </Form>
                      
                 
                  </Formik>
                
              </div>
            </div>
          </div>
        
  )
}

export default EditReviewSection