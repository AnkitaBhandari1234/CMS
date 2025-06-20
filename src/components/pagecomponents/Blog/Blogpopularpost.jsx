import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Blogpopularpost() {
  const [submit, setsubmit] = useState(false);
  const inputField = [
    { title: "image", type: "file" },
    { title: "title", type: "text" },
  ];
  const Schema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too short")
      .max(5, "Too long")

      .required("Required"),
  });
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
    <div className="lg:grid lg:grid-cols-10   flex flex-col gap-4  mx-3 px-3 my-7   ">
      <Toaster />
      <div className="lg:col-span-3">
        <h1 className="text-2xl  font-medium text-black">Popular Posts</h1>
        <h2>[image,title]</h2>
      </div>
      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              image: "",
              imageid:"",
              title: "",
            }}
            onSubmit={() => {
              setsubmit(true);
              toast.success("Form submitted successfully!");
            }}
            validationSchema={Schema}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="flex flex-col gap-4 items-center h-fit   w-full  ">
                  {inputField.map((val, i) => {
                    if (val.type == "file") {
                      return (
                        <div key={i} className="w-full  ">
                          <label
                            htmlFor="imagepopularpost"
                            className="text-xl capitalize "
                          >
                            {val.title}:
                            {values && values.image ? (
                              <div>
                                <img
                                  src={values.image}
                                  className="mt-2"
                                />
                              </div>
                            ) : (
                              <div className="w-full  border border-dashed  h-70 mt-2">
                                <img
                                  src={Image}
                                  className="h-full w-20 m-auto "
                                />
                              </div>
                            )}
                          </label>
                          <input
                            type={val.type}
                            id="imagepopularpost"
                            placeholder={val.title}
                            onChange={(e) => {
                              fileUpload(e.target.files[0],setFieldValue);
                              // setFieldValue("image", e.target.files[0]);
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
                            className=" capitalize border-1 border-black  p-1.5  w-full rounded placeholder:text-gray-600 outline-none my-2 placeholder:px-1.5  "
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

export default Blogpopularpost;
