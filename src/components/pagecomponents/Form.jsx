import React from 'react'
import Image from '../../assets/form.jpg'

function Form() {
  return (
    <form className=' flex flex-col items-center w-11/12 my-7 mx-auto   '>
        
        <div className=' flex gap-9  bg-[#5b595a] w-8/12   '>
          <div className='w-6/12  my-auto  '>
            <img src={Image} className=' w-fit m-5'></img>
          </div>
        <div className='flex flex-col gap-5   text-white  w-5/12 my-6   '>
        <div className='text-2xl font-medium text-center text-white'>

        <h1>Sign In </h1>
        </div>

        <div className='flex flex-col gap-1'>
         <label className='font-semibold'>Username:</label>
         <input type='text' placeholder='Enter your username' className='bg-[#8a898a] p-1.5 w-full placeholder:text-white outline-none border-none rounded '></input>

        </div>
        <div className='flex flex-col gap-1'>
         <label className='font-semibold'>Email:</label>
         <input type='email' placeholder='Enter your email' className='bg-[#8a898a] p-1.5 w-full  placeholder:text-white outline-none border-none rounded '></input>

        </div>
        <div className='flex flex-col gap-1'>
         <label className='font-semibold'>Password::</label>
         <input type='password' placeholder='Enter your password' className='bg-[#8a898a] p-1.5 w-full  placeholder:text-white outline-none border-none rounded'></input>

        </div>
        <div className='flex flex-col gap-1'>
         <label className='font-semibold'>Password::</label>
         <input type='password' placeholder='Confirm Password' className='bg-[#8a898a] p-1.5 w-full  placeholder:text-white outline-none border-none rounded'></input>

        </div>
        
       

        <div className='bg-white w-5/12 text-black text-center mx-auto  rounded font-semibold '>
          <button type='submit' className='hover:text-white hover:bg-[#3a393a] w-full p-1.5 rounded  '>Submit</button>
        </div>
        </div>

    </div>
        </form>
  )
}

export default Form