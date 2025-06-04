import React from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";

import Image from "../../../assets/upload.svg";


function Editabout({cancel}) {
    const inputField=[
        { 
            title:"image",
            type:'file',
        },
        { 
            title:"name",
            type:'text',
        },
        { 
            title:"description",
            type:'text',
        },
    ]
  return (
     <div className=" bg-gray-800 w-5/12 h-fit flex items-center justify-center mx-auto   ">
                                    <Formik
                                     
                                    >
                                      {({ setFieldValue, values }) => {
                                        return (
                                          <Form className="flex flex-col gap-4  items-center h-[500px]   w-full justify-center   ">
                                            {inputField.map((val, i) => {
                                              if (val.type == "file") {
                                                return (
                                                  <div
                                                    key={i}
                                                    // for image
                                                    className="w-full   capitalize text-xl flex flex-col text-left text-white "
                                                  >
                                                    <label className='pl-11'>{val.title}</label>
                                                    <input
                                                      type={val.type}
                                                      id={val.title}
                                                      name={val.title}
                                                      placeholder={val.title}
                                                      onChange={(e) => {
                                                        setFieldValue(val.title, e.target.files[0]);
                                                      }}
                                                      className="outline-none hidden  "
                                                    />
                      
                                                    <label htmlFor={val.title} className='pl-11'>
                                                      
                                                      
                                                        <img
                                                          src={Image}
                                                          className="my-3  border-dashed border-1 border-white  p-10  "
                                                        ></img>
                                                    
                                                    </label>
                                                  </div>
                                                );
                                              } else {
                                                return (
                                                  <div key={i} className="w-full  ">
                                                    <div className="capitalize text-xl flex flex-col text-left text-white ">
                                                      <label className='pl-10'>{val.title}</label>
                                                    </div>
                                                    <Field
                                                      type={val.type}
                                                      id={val.title}
                                                      placeholder={val.title}
                                                      name={val.title}
                                                      className=" capitalize  p-1.5 border-1 border-white w-10/12  rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5 "
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
                                        );
                                      }}
                                    </Formik>
                                  </div>
  )
}

export default Editabout