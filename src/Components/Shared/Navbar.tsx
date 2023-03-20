import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
            <div className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
            text-gray-800">
                <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                    <ion-icon name="logo-ionic"></ion-icon>
                </span>
                PROXY
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden">
                <ion-icon name={open ? 'close': 'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Home </Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Register </Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Visitas </Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Talleres </Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Conferencias </Link>    
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Comité</Link>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={"/"} className="text-gray-800 hover:text-gray-400 duration-500">Contact</Link>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar


