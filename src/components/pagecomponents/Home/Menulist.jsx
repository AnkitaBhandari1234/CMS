import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Menuitemimage from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import JoditEditor from "jodit-react";

function Menulist() {
  const [submit, setsubmit] = useState(false);
  const [datas, setdatas] = useState([]);
    const editor = useRef(null);
      const [content, setContent] = useState('');
  // for input fileds used for mapping
  const inputField = [
    {
      title: "name",
      type: "text",
    },
    {
      title: "description",
      type: "jodit",
    },
    {
      title: "price",
      type: "number",
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-10  flex flex-col gap-4 mx-3 px-3 mb-10 my-10  ">
      <Toaster />
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">Menu List</h1>
        <h2 className="">[title,sub-title,category,name, description,price]</h2>
      </div>

      <div className="lg:col-span-7 ">
        <div className=" ">
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
            }}
            onSubmit={(values) => {
              try {
                axios
                  .post("http://localhost:3000/category", values)
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
            {({setFieldValue,values}) => {
              return (
                <Form className="flex flex-col gap-4  items-center h-fit   w-full  ">
                  {inputField.map((val, i) => {
                    if (val.type == "jodit") {
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

export default Menulist;
