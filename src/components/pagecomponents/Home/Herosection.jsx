import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import React, { useRef, useState } from "react";
import Homepageimage from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import Image from "../../../assets/upload.svg";
import JoditEditor from "jodit-react";
import axios from "axios";

function Herosection() {
  const [submit, setsubmit] = useState(false);
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
      type: "jodit",
    },
    {
      title: "image",
      type: "file",
    },
  ];
 
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const fileUpload=(data,setFieldValue)=>{
    console.log(data);
    try{
      const formdata=new FormData()
      formdata.append('files',data);
   axios
                  .post("http://localhost:3000/fileupload", formdata)
                  .then((result) => {
                    console.log(result.data);
                    setFieldValue('imageid',result.data.id)
                    setFieldValue('image',result.data.file)

                    toast.success("Form submitted successfully!");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } catch (error) {
                console.log(error);

    }

  }
  return (
    <div className="lg:grid lg:grid-cols-10  flex flex-col gap-5 mx-3 px-3  ">
      <Toaster />
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">Hero Section</h1>
        <h2 className="">[subtitle,title, description,image]</h2>
      </div>

      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              subtitle: "",
              title: "",
              description: "",
              image: "",
              imageid:"",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="flex flex-col   items-center h-fit gap-5   w-full  ">
                  {inputField.map((val, i) => {
                    if (val.type == "file") {
                      return (
                        <div key={i} className="bg-amber- w-full ">
                          <label
                            htmlFor="imageherosection"
                            className="text-xl capitalize "
                          >
                            {val.title}:
                            {values && values.image ? (
                              <img
                                src={values.image}
                                alt=""
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              <div className="w-full border h-full mt-2 border-dashed">
                                <img
                                  src={Image}
                                  alt=""
                                  className="w-20 h-70 m-auto "
                                />
                              </div>
                            )}
                          </label>
                          <input
                            type={val.type}
                            id="imageherosection"
                            className="hidden"
                            onChange={(e) => {
                              fileUpload(e.target.files[0],setFieldValue)
                              // setFieldValue("image", e.target.files[0]);
                            }}
                          />
                        </div>
                      );
                    } else if (val.type == "jodit") {
                      return (
                        <div key={i} className="w-full">
                          <label
                            htmlFor="carddescription"
                            className="text-xl capitalize"
                          >
                            {val.title}:
                          </label>
                          <JoditEditor
                            ref={editor}
                            value={values.description}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                            className="mt-2"
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div key={i} className="w-full    ">
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
                    }
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

export default Herosection;
