import React, { useRef, useState } from "react";
import { Formik, Form, Field } from "formik";

import Image from "../../../assets/upload.svg";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import JoditEditor from "jodit-react";

function Blogsection() {
  const [submit, setsubmit] = useState(false);
   const [datas, setdatas] = useState([]);
   const editor = useRef(null);
     const [content, setContent] = useState("");
  const inputField = [
    
    {
      title: "image",
      type: "file",
    },

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
      title: "like",
      type: "number",
    },
    {
      title: "comments",
      type: "number",
    },
  ];
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
              imageid:"",
              subtitle: "",
             title:"",
              description: "",
              like: "",
              comments: "",
            }}
            onSubmit={(values) => {
             
              
                try {
      axios
        .post("http://localhost:3000/banners",values)
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
            {({setFieldValue,values  }) => {
              return (
                <Form className="flex flex-col gap-4  items-center h-[600px]   w-full  ">
                  {inputField.map((val, i) => {
                  if(val.type=='file'){
                    return(
                      <div key={i} className="w-full  ">
                                                <label htmlFor="imageblogsection" className="text-xl capitalize ">
                                                  {val.title}:
                                                  {values && values.image ? (
                                                    <div>
                                                      <img src={values.image} className="mt-2" />
                                                    </div>
                                                  ) : (
                                                    <div className="w-10/12 border border-dashed  h-70 mt-2">
                                                      <img src={Image} className="h-full w-20 m-auto "/>
                                                    </div>
                                                  )}
                                                </label>
                                                <input
                                                  type={val.type}
                                                  id="imageblogsection"
                                                  placeholder={val.title}
                                                  onChange={(e) => {
                                                    // setFieldValue("image", e.target.files[0]);
                                                    fileUpload(e.target.files[0],setFieldValue);
                                                  }}
                                                  className="hidden"
                                                />
                                              </div>
                    )
                  }
                  else if(val.type=='jodit'){
                    return(
                      <div key={i} className="w-full   ">
                          <label
                            htmlFor="carddescription"
                            className="text-xl capitalize "
                          >
                            {val.title}:
                          </label>
                          <JoditEditor
                            ref={editor}
                            value={values.description}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                            className="mt-2 !w-10/12"
                          />
                        </div>
                    )
                  }
                  else{
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

                  }

                 
                    
                     
                    
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
