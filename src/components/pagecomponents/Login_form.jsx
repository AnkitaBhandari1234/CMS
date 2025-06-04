import React, { useState } from 'react'
import Image from '../../assets/form.jpg'
import { Formik,Form, Field } from 'formik'
import axios from 'axios';

function Login_form() {
  const [datas, setdatas] = useState([]);
 
  return (
    <Formik
    // value initilization
    initialValues={{

      username:"",
      email:"",
      password:"",
    }

    }
    // form submit
    onSubmit={(values)=>{
      //  console.log(values);
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
    }}>
      {({})=>{
        return <Form  className=' flex flex-col items-center w-11/12 my-7 mx-auto   '>

        
        <div className=' flex gap-9  bg-[#5b595a] w-8/12   '>
          <div className='w-6/12  my-auto  '>
            <img src={Image} className=' w-fit m-5'></img>
          </div>
        <div className='flex flex-col gap-6   text-white  w-5/12 my-6   '>
        <div className='text-3xl font-medium text-center text-white'>

        <h1>Sign In </h1>
        </div>

        <div className='flex flex-col gap-2'>
         <label className='font-semibold'>Username:</label>
         <Field name='username' type='text' placeholder='Enter your username' className='bg-[#8a898a] p-1.5 w-full placeholder:text-white outline-none border-none rounded '/>

        </div>
        <div className='flex flex-col gap-2'>
         <label className='font-semibold'>Email:</label>
         <Field name='email' type='email' placeholder='Enter your username' className='bg-[#8a898a] p-1.5 w-full placeholder:text-white outline-none border-none rounded '/>
         

        </div>
        <div className='flex flex-col gap-2'>
         <label className='font-semibold'>Password::</label>
         <Field name='password' type='password' placeholder='Enter your username' className='bg-[#8a898a] p-1.5 w-full placeholder:text-white outline-none border-none rounded '/>

        </div>
       
        
       

        <div className='bg-white w-5/12 text-black text-center mx-auto  rounded font-semibold '>
          <button type='submit' className='hover:text-white hover:bg-[#3a393a] w-full p-1.5 rounded  '>Submit</button>
        </div>
        </div>

    </div>
        
        </Form>
      }}

    </Formik>
  )
}

export default Login_form