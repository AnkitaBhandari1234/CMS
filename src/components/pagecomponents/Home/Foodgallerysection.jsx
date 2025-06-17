import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";

function Foodgallerysection() {
  const [submit, setsubmit] = useState(false);
  const inputField = [
    {
      title: "title",
      type: "text",
    },
    {
      title: "subtitle",
      type: "text",
    },
    {
      title: "category",
      type: "text",
    },
    {
      title: "image",
      type: "file",
    },
  ];
  const Schema = Yup.object().shape({
    title: Yup.string()

      .max(3, "Too Long")
      .required("Required"),

    subtitle: Yup.string()

      .max(8, "Too long")
      .required("Required"),
    category: Yup.string()

      .max(2, "Too long")

      .required("Required"),
  });
  return (
    <div>
      <div className="lg:grid lg:grid-cols-10  flex flex-col gap-4  mx-3 px-3  ">
        <Toaster />
        <div className="col-span-3 ">
          <h1 className=" text-2xl  font-medium  ">Food Gallery</h1>
          <h2>[title,sub-title,category,image]</h2>
        </div>

        <div className="lg:col-span-7 ">
          <div className=" ">
            <Formik
              initialValues={{
                title: "",
                subtitle: "",
                category: "",
                image: "",
              }}
              onSubmit={(values) => {
                setsubmit(true);
                toast.success("Form submitted successfully!");
              }}
              validationSchema={Schema}
            >
              {({ setFieldValue, values }) => {
                return (
                  <Form className="flex flex-col lg:gap-4 gap-3 items-center h-fit   w-full  ">
                    {inputField.map((val, i) => {
                      if (val.type == "file") {
                        return (
                          <div key={i} className="w-full  ">
                            <label
                              htmlFor="imagefoodgallery"
                              className="text-xl capitalize "
                            >
                              {val.title}:
                              {values && values.image ? (
                                <div>
                                  <img
                                    src={URL.createObjectURL(values.image)}
                                    className="mt-2"
                                  />
                                </div>
                              ) : (
                                <div className="w-10/12  border border-dashed  h-70 mt-2">
                                  <img
                                    src={Image}
                                    className="h-full w-20  m-auto "
                                  />
                                </div>
                              )}
                            </label>
                            <input
                              type={val.type}
                              id="imagefoodgallery"
                              placeholder={val.title}
                              onChange={(e) => {
                                setFieldValue("image", e.target.files[0]);
                              }}
                              className="hidden"
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
                              className=" capitalize  p-1.5 border-1 border-black lg:w-10/12 w-full rounded placeholder:text-gray-500 outline-none my-2 placeholder:px-1.5 "
                            />

                           
                          </div>
                        );
                      }
                    })}
                    <div className="w-full  ">
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
    </div>
  );
}

export default Foodgallerysection;
