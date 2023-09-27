"use client"
import React from 'react'
import Button from "./Button"
import { logo2 } from '../assets'
import Image from 'next/image'

const Navbar2 = () => {
  return (
   
<nav className="fixed bg-black-gradient-2 w-full z-20 top-0 left-0 py-4 sm:px-4">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
  <a href="" className="flex items-center  md:ml-0 ml-6 ">
      {/* <Image src={logo2} className="w-full " alt="Logo"/> */}
      <span className="self-center md:text-2xl text-base font-semibold whitespace-nowrap dark:text-white  ">StudyPlace</span>
  </a>
  <div className="flex md:order-2">
       <Button styles={undefined}/>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 d" aria-controls="navbar-sticky" aria-expanded="false">
        
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 font-medium  md:flex-row md:space-x-8 md:mt-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200  rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar2