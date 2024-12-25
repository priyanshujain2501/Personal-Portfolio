import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'


function Navbar() {

    const [nav, setNav] = useState(false);

    return (
        <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4'>

            <div>
                <h1 className='text-4xl sm:text-5xl font-signature ml-2 mr-2'>Priyanshu</h1>
            </div>

            <ul className='hidden md:flex'>

                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='Home' smooth duration={500}>Home</Link>
                </li>

                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='Education' smooth duration={500}>Education</Link>
                </li>
                
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='Projects' smooth duration={500}>Projects</Link>
                </li>
                
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='Skills' smooth duration={500}>Skills</Link>
                </li>
                
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to='Contact' smooth duration={500}>Contact</Link>
                </li>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* write for mobile version */}

            {nav &&

                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Home</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Education</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Skills</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Projects</li>
                    <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>Contact</li>

                </ul>
            }

        </div>
    )
}

export default Navbar