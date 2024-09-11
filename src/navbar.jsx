import React from 'react'
import {Link} from "react-router-dom"
import profile from "./assets/profile.jpeg"

function Navbar() {
  return (
    <div className='h-[70px] w-full bg-slate-900 flex items-center justify-between'>
        <div className='ml-4 flex items-center' >
          <h1 className='text-white text-2xl font-serif'>Aarij Dev</h1>
        </div>
        <div>
          <ul className='text-white sm:flex gap-6 mr-10 text-xl hidden'>
          <Link to={'/'}>
            <li>Home</li>
            </Link>
            <Link to={'/portfolio'}>
            <li>portfolio</li>
            </Link>
            <Link to={'/location'}>
            <li>Location</li>
            </Link>
          </ul>
        </div>

    </div>
  )
}

export default Navbar