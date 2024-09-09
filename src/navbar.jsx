import React from 'react'
import {Link} from "react-router-dom"
import profile from "./assets/profile.jpeg"

function Navbar() {
  return (
    <div className='h-[80px] w-full bg-slate-900 flex items-center justify-between'>
        <div className='ml-4 flex items-center'>
          <img src={profile} alt="" className='h-[60px] rounded-full w-[60px] '/>
          <h1 className='text-white ml-4 text-2xl font-serif'>Aarij khan</h1>
        </div>
        <div>
          <ul className='text-white sm:flex gap-6 mr-10 text-xl hidden'>
          <Link to={'/'}>
            <li>Home</li>
            </Link>
            <Link to={'/location'}>
            <li>Location</li>
            </Link>
            <li>Gallery</li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar