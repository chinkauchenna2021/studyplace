"use client";

import React from 'react'
import { FaHome,FaHouseDamage ,FaUser,FaCog,FaCode} from "react-icons/fa";


export const SideNavComponent = () => {
  return (
     <div className="w-full h-full flex flex-col items-center  gap-y-4  py-16 bg-white">
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center'> <FaHouseDamage className="text-black"/></div>
               </div>
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center'> <FaUser className="text-gray-500"/> </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center'> <FaCog className="text-gray-500"/> </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center'> <FaCog className="text-gray-500"/> </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center'> <FaCode className="text-gray-500"/> </div>
               </div>
               <div className='flex flex-col justify-center items-center w-full '>
                    <div className='w-10 h-10  rounded-full flex items-center justify-center'> <FaCode className="text-gray-500"/> </div>
               </div>
      </div>
  )
}




