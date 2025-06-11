import React, { useState } from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";

function EditReviewSection({cancel,editdata}) {
    
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
    
          <div className=" bg-gray-800 w-4/12 h-fit flex items-center justify-center mx-auto rounded   ">
                          
                 
                       <div className=" ">
                         <div className="text-white ">
                           <Formik
                              
            initialValues={{
              
              image: "",
              name:
                editdata.length > 0 && editdata[0].name ? editdata[0].name : "",

              description:
                editdata.length > 0 && editdata[0].description
                  ? editdata[0].description
                  : "",
              price: editdata && editdata[0].price ? editdata[0].price : "",
            }}
            

                            
                           >
                             {({}) => {
                               return (
                                 <Form className="flex flex-col   text-left h-[480px] gap-5   w-full justify-center mx-auto  ">
                                   {inputField.map((val, i) => {
                                     return (
                                       <div key={i} className="w-full    ">
                                         <div className="capitalize text-xl">
                                           <label className='text-2xl '>{val.title}</label>
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
                                                    <button
                                                    onClick={cancel}
                                                      type="button"
                                                      className=" w-4/12  p-1  bg-red-700 text-white uppercase text-lg font-medium rounded cursor-pointer "
                                                      
                                                     
                                                     
                                                    >
                                                      cancel
                                                    </button>
                                                  </div>
                                 </Form>
                               );
                             }}
                           </Formik>
                         </div>
                       </div>
                                           </div>
        
  )
}

export default EditReviewSection