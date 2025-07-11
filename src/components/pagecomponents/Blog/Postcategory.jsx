import React, { useState } from 'react'
import { Formik,Form,ErrorMessage,Field } from 'formik';
import * as Yup from 'yup';
import Image from '../../../assets/upload.svg'
import toast, { Toaster } from 'react-hot-toast';

function Postcategory() {
  const [submit,setsubmit]=useState(false)
       const inputField=[
           
                {title:'title',
                    type:'text',
                },
               
            ]
            const Schema = Yup.object().shape({
            
                
               title: Yup.string()
                 .min(2, "Too short")
                 .max(5, "Too long")
                 
                 .required("Required"),
               
             });
  return (
   <div  className="lg:grid lg:grid-cols-10 lg:gap-7 flex flex-col gap-4  mx-3 px-3   ">
    <Toaster/>
                       <div className="lg:col-span-3 ">
                         <h1 className='text-2xl  font-medium text-black'>Post Categories</h1>
                         <h2 className='break-all'>[title]</h2>
                       </div>
                       <div className="lg:col-span-6 ">
                         <div className=" ">
                         <Formik
                         initialValues={{
                         
                           title:'',
                      

                         }}
                         onSubmit={(values) => {
                          setsubmit(true);
                          toast.success('Form submitted successfully!');
                         }}
                         validationSchema={Schema}
                       >
                         {({ setFieldValue, values }) => {
                           return (
                             <Form className="flex flex-col gap-4 items-center h-[210px]   w-full  ">
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
                                         className=" capitalize border-1 border-black  p-1.5  w-full rounded placeholder:text-gray-600 outline-none my-2 placeholder:px-1.5  "/>
                                      
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

export default Postcategory