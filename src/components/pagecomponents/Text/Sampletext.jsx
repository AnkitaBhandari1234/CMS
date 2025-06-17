import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import JoditEditor from "jodit-react";

function Sampletext() {
  const [submit, setsubmit] = useState(false);
  const editor = useRef(null);
      const [content, setContent] = useState("");
  const inputField = [
    { title: "title", type: "text" },
    { title: "description", type: "jodit" },
  ];
  const Schema = Yup.object().shape({
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
    <div className="lg:grid lg:grid-cols-10   flex flex-col gap-4  mx-3 px-3 my-8   ">
      <Toaster />
      <div className="lg:col-span-3">
        <h1 className="text-2xl  font-medium text-black">Sample Text</h1>
        <h2>[title,description]</h2>
      </div>
      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              title: "",
              description: "",
            }}
            onSubmit={(values) => {
              setsubmit(true);
              toast.success("Form submitted successfully!");
            }}
            validationSchema={Schema}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="flex flex-col gap-4 items-center h-fit  w-full  ">
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
                        <div key={i} className="w-full  ">
                          <div className="capitalize text-xl">
                            <label>{val.title}</label>
                          </div>
                          <Field
                            type={val.type}
                            id={val.title}
                            placeholder={val.title}
                            name={val.title}
                            className=" capitalize border-1 border-black  p-1.5 w-full rounded placeholder:text-gray-600 outline-none my-2 placeholder:px-1.5  "
                          />

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
                    <button
                      type="submit"
                      className=" w-3/12 mx-auto p-2  bg-gray-300 uppercase text-lg font-medium rounded cursor-pointer hover:text-white hover:bg-gray-600 transition"
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

export default Sampletext;
