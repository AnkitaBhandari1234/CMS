import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import JoditEditor from "jodit-react";

function Blogcontent() {
  const [submit, setsubmit] = useState(false);
  const [datas, setdatas] = useState([]);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const inputField = [
    { title: "image", type: "file" },
    { title: "title", type: "text" },
    { title: "description", type: "jodit" },
  ];

  return (
    <div className="lg:grid lg:grid-cols-10  flex flex-col gap-5 mx-3 px-3  ">
      <Toaster />
      <div className="lg:col-span-3 ">
        <h1 className=" text-2xl  font-medium  ">Blog Content</h1>
        <h2 className="">[image,title, description]</h2>
      </div>

      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              image: "",
              title: "",
              description: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              try {
                axios
                  .post("http://localhost:3000/blogcontent", values)
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
            {({ setFieldValue, values }) => {
              return (
                <Form className="flex flex-col   items-center h-fit gap-5   w-full  ">
                  {inputField.map((val, i) => {
                    if (val.type == "file") {
                      return (
                        <div key={i} className=" w-full  flex capitalize ">
                          <label
                            htmlFor="imagecontent"
                            className=" w-full  text-xl mb-6    "
                          >
                            {val.title}:
                            {values && values.image ? (
                              <img
                                className="h-full w-full object-contain border"
                                src={URL.createObjectURL(values.image)}
                              />
                            ) : (
                              <div className="border border-dashed   h-full w-full rounded text-sm mt-2">
                                <img
                                  src={Image}
                                  className=" w-20 m-auto h-70 "
                                />
                              </div>
                            )}
                          </label>
                          <input
                            type={val.type}
                            placeholder={val.title}
                            name={val.title}
                            id="imagecontent"
                            onChange={(e) => {
                              // console.log("object");
                              // console.log(e.target);
                              setFieldValue("image", e.target.files[0]);
                            }}
                            className="hidden"
                          />
                        </div>
                      );
                    } else if (val.type == "jodit") {
                      return (
                        <div key={i} className="w-full ">
                          <label
                            className="text-xl w-full capitalize  "
                            htmlFor="blogcontentdescription"
                          >
                            {val.title}:
                            <JoditEditor
                              ref={editor}
                              value={values.description}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                              onChange={(newContent) => {}}
                              className="mt-2"
                            />
                          </label>
                        </div>
                      );
                    } else {
                      return (
                        <div key={i} className="w-full    ">
                          <div className="capitalize text-xl">
                            <label>{val.title}:</label>
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

export default Blogcontent;
