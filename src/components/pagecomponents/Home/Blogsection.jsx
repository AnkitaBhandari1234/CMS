import React, { useState } from "react";
import { Formik, Form, Field } from "formik";


import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Blogsection() {
  const [submit, setsubmit] = useState(false);
   const [datas, setdatas] = useState([]);
  const inputField = [
    
    {
      title: "image",
      type: "file",
    },

    {
      title: "date",
      type: "date",
    },
    {
      title: "name",
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
    <div className="lg:grid lg:grid-cols-10  flex flex-col gap-4 mx-3 px-3  ">
      <Toaster />
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">Blog</h1>
        <h2 className="">
          [image,date,name, description,like,comments]
        </h2>
      </div>

      <div className="lg:col-span-7 ">
        <div className=" ">
          <Formik
            initialValues={{
              
              image: "",
              date: "",
              name:"",
              description: "",
              like: "",
              comments: "",
            }}
            onSubmit={() => {
              setsubmit(true);
              toast.success("Form submitted successfully!");
                try {
      axios
        .get("http://localhost:3000/banners")
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
            {({  }) => {
              return (
                <Form className="flex flex-col gap-4  items-center h-[600px]   w-full  ">
                  {inputField.map((val, i) => {
                   return(

                        <div key={i} className="w-full h-full   ">
                          <div className="capitalize text-xl">
                            <label>{val.title}</label>
                          </div>
                          <Field
                            type={val.type}
                            id={val.title}
                            placeholder={val.title}
                            name={val.title}
                            className=" capitalize  p-1 border-1 border-black lg:w-10/12 w-full rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5 "
                          />

                          
                        </div>
                   )
                    
                     
                    
                    })
                  }
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

export default Blogsection;
