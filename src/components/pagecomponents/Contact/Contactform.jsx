import React, { useState } from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup';
import Image from '../../../assets/upload.svg'
import toast, { Toaster } from 'react-hot-toast';

function Contactform() {
  const [submit,setsubmit]=useState(false)
     const inputField=[
         {title:'name',
             type:'text',
         },
             {title:'address',
                 type:'text',
             },
                {title:'contact',
                    type:'number',
                },
                {title:'message',
                    type:'text',
                },
            ]
            const Schema = Yup.object().shape({
               name: Yup.string()
                 .min(3, "Too Short")
                 .max(6, "Too Long")
                 .required("Required"),
                
               address: Yup.string()
                 .min(2, "Too short")
                 .max(5, "Too long")
                 
                 .required("Required"),
               message: Yup.string()
                 .min(10, "Too short")
                 .max(20, "Too long")
                 .lowercase("Lowercase")
                 .required("Required"),
                 contact:Yup.number().required("required")
               
             });
  return (
    <div  className="lg:grid lg:grid-cols-10   flex flex-col gap-4  mx-3 px-3   ">
      <Toaster/>
                      <div className="lg:col-span-3">
                        <h1 className='text-2xl  font-medium text-black'>Contact Section</h1>
                        <h2>[name,address,contact,message]</h2>
                      </div>
                      <div className="lg:col-span-7 ">
                        <div className=" ">
                        <Formik
                        initialValues={{
                        
                            name:"",
                            address:"",
                            contact:"",
                            message:"",
                        }}
                        onSubmit={(values) => {
                          setsubmit(true);
                          toast.success('Form submitted successfully!')
                        }}
                        validationSchema={Schema}
                      >
                        {({ setFieldValue, values }) => {
                          return (
                            <Form className="flex flex-col gap-4 items-center h-[490px]   w-full  ">
                              {inputField.map((val, i) => {
                                if (val.type == "file") {
                                  return (
                                    <div key={i} className="w-full  capitalize text-xl ">
                                      <label>{val.title}</label>
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
              
                                      <label htmlFor={val.title}  >
                                        {values.image ? (
                                          <img src={URL.createObjectURL(values.image)} className="h-29"></img>
                                        ) : (
                                          <img src={Image} className="my-3  border-dashed border-1  p-10 "></img>
                                        )}
                                      </label>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div key={i} className="w-full  ">
                                      <div  className="capitalize text-xl">
                                        <label>{val.title}</label>
                                      </div>
                                      <Field
                                        type={val.type}
                                        id={val.title}
                                        placeholder={val.title}
                                        name={val.title}
                                        className=" capitalize border-1 border-black  p-1.5 lg:w-10/12 w-full rounded placeholder:text-gray-600 outline-none my-2 placeholder:px-1.5  "/>
                                     
                                        <ErrorMessage
                                          name={val.title}
                                          component="div"
                                            className="text-red-600 text-lg pl-1.5"
                                        ></ErrorMessage>
                                      
                                    </div>
                                  );
                                }
                              })}
                              <div className="w-full ">
                                  <button type="submit"className=" w-3/12 mx-auto p-2  bg-gray-300 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition">Submit</button>
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

export default Contactform