import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import Homepageimage from "../../../assets/upload.svg";

function Herosection() {
    // for input fileds used for mapping
  const inputField = [
    {
      title: "subtitle",
      type: "text",
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
      title: "image",
      type: "file",
    },
  ];
  // for form validation using Yup
  const Schema = Yup.object().shape({
    subtitle: Yup.string()
      .min(3, "Too Short")
      .max(6, "Too Long")
      .required("Required"),
     
    title: Yup.string()
      .min(2, "Too short")
      .max(5, "Too long")
      
      .required("Required"),
    description: Yup.string()
      .min(10, "Too short")
      .max(20, "Too long")
      .lowercase("Lowercase")
      .required("Required"),
    
  });

  return (
  <div >
    {/* Home page */}
    <div className="lg:grid lg:grid-cols-10  mx-3 flex flex-col gap-4 px-3    ">
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">Home Page Form</h1>
        <h2>[title,subtitle,description,image]</h2>

      </div>
      
    <div className="lg:col-span-7  ">
      <div  className=" ">
        <Formik
          initialValues={{
            subtitle: "",
            title: "",
            description: "",
            image: "",
          }}
          onSubmit={(values) => {
            console.log("Submit", values);
            alert("Order submitted successfully!");
          }}
          validationSchema={Schema}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form className="flex flex-col lg:gap-4 gap-3 items-center h-[550px]  w-full  ">
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
                            <img src={Homepageimage} className="my-3  border-dashed border-1  p-10 "></img>
                          )}
                        </label>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="w-full ">
                        <div  className="capitalize text-xl">
                          <label>{val.title}</label>
                        </div>
                        <Field
                          type={val.type}
                          id={val.title}
                          placeholder={val.title}
                          name={val.title}
                          className=" capitalize border-1 border-black p-1.5 lg:w-10/12 w-full rounded placeholder:text-gray-600 outline-none my-2 placeholder:px-1.5 "/>
                       
                          <ErrorMessage
                            name={val.title}
                            component="div"
                              className="text-red-600 text-lg pl-1.5"
                          ></ErrorMessage>
                        
                      </div>
                    );
                  }
                })}
                <div className="w-full  ">
                    <button type="submit"className=" lg:w-3/12 w-5/12 mx-auto p-2  bg-gray-300 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition mx-auto">Submit</button>
                    </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
      </div>
     

      


 </div>




  );
}

export default Herosection;
