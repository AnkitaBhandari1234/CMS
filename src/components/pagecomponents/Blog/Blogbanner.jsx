import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import JoditEditor from "jodit-react";
import axios from "axios";
function Blogbanner() {
  const [submit, setsubmit] = useState(false);
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const inputField = [
    { title: "image", type: "file" },
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

  const fileUpload=(data,setFieldValue)=>{
    console.log(data);
     try {
      const fromdata=new FormData()
      fromdata.append('files',data)
                axios
                  .post("http://localhost:3000/fileupload", fromdata)
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
    <div className="lg:grid lg:grid-cols-10   flex flex-col gap-4  mx-3 px-3   ">
      <Toaster />
      <div className="lg:col-span-3">
        <h1 className="text-2xl  font-medium text-black">Blog Banner</h1>
        <h2>[image,title,description]</h2>
      </div>
      <div className="lg:col-span-6 ">
        <div className=" ">
          <Formik
            initialValues={{
              imageid: "",
              image:'',
              title: "",
              description: "",
            }}
            onSubmit={() => {
              setsubmit(true);
              toast.success("Form submitted successfully!");
            }}
            validationSchema={Schema}
          >
            {({ setFieldValue, values }) => {
              return (
                <Form className="flex flex-col   items-center h-fit gap-5   w-full  ">
                  {inputField.map((val, i) => {
                    if (val.type == "file") {
                      return (
                        <div key={i} className="w-full  ">
                          <label htmlFor="imagebanner" className="text-xl capitalize ">
                            {val.title}:
                            {values && values.image ? (
                              <div>
                                <img src={values.image} className="mt-2" />
                              </div>
                            ) : (
                              <div className="w-full  border border-dashed  h-70 mt-2">
                                <img src={Image} className="h-full w-20 m-auto "/>
                              </div>
                            )}
                          </label>
                          <input
                            type={val.type}
                            id="imagebanner"
                            placeholder={val.title}
                            onChange={(e) => {
                              fileUpload(e.target.files[0],setFieldValue)
                              // setFieldValue("image", e.target.files[0]);
                            }}
                            className="hidden"
                          />
                        </div>
                      );
                    } 
                    else if(val.type=='jodit'){
                      return(
                        <div key={i} className="w-full">
                          <label htmlFor="carddescription" className="text-xl capitalize">{val.title}:</label>
                          <JoditEditor
			ref={editor}
			value={values.description}
			
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
      className="mt-2"
		/>

                        </div>
                      )
                    }
                    
                    else {
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

export default Blogbanner;
