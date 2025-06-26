import axios from 'axios';
import { Field,Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function Formauth() {
  const [data,setdatas]=useState([]);
  const navigate=useNavigate()

  return (
    <div className=' w-full h-screen flex items-center '>
   <Formik
      // value initilization
      initialValues={{
        username: "",
       
        password: "",
      }}
      // form submit
      onSubmit={(values) => {
         console.log(values);
         try {
          axios
            .post("http://localhost:3000/formauth",values)
            .then((result) => {
              console.log(result.data);
              setdatas([...result.data]);
              localStorage.setItem('token',result.data)
              if(result.data){
                navigate('/')
              }
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
          <Form className=" flex flex-col items-center w-9/12  mx-auto     ">
             
             
              <div className="flex flex-col gap-6   text-white  w-5/12 py-6  bg-gray-800 rounded-lg  ">
                <div className="text-3xl font-medium text-center text-white">
                  <h1>Sign In </h1>
                </div>

                <div className="flex flex-col gap-2 w-10/12 mx-auto ">
                  <label className="font-semibold">Username:</label>
                  <Field
                    name="username"
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="bg-white  p-1.5  placeholder:text-gray-800  outline-none border-none rounded  "
                  />
                </div>
               
                <div className="flex flex-col gap-2 w-10/12 mx-auto">
                  <label className="font-semibold">Password:</label>
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="bg-white p-1.5 w-full placeholder:text-gray-800 focus:text-black outline-none border-none rounded "
                  />
                </div>

                <div className="bg-gray-600 w-5/12 text-white text-center mx-auto  rounded font-semibold ">
                  <button
                    type="submit"
                    className="hover:text-white hover:bg-[#3a393a] w-full p-1.5 rounded  "
                  >
                    Submit
                  </button>
                </div>
              </div>
           
          </Form>
        );
      }}
    </Formik>
    </div>
  )
}

export default Formauth