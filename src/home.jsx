import React from 'react'
import Navbar from './navbar'
import pic from "./assets/profile.jpeg"

function Home() {
  return (
    <div className='bg-green-600 h-screen w-full'>
        <Navbar/>
        <div className=' w-full h-[400px] flex sm:flex-row font-semibold mt-16 flex-col gap-10 sm:gap-0 '>
            <div className='text-white  sm:w-1/2 w-full flex justify-center items-center sm:text-4xl text-3xl flex-col gap-4'>
            <h1 >I am Aarij khan</h1>
            <h1 className='font-mono' >Web and App Developer</h1>
            </div>
            <div className='text-white  sm:w-1/2 w-full flex justify-center items-center'>
            <img src={pic} alt="pic" className='w-[50%] sm:w-[40%]  rounded-xl shadow-xl' />
            </div>
        </div>

    </div>
  )
}

export default Home