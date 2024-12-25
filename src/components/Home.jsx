import React from 'react'
import HeroImage from '../assests/heroimage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Education from './Education'
import { Link } from 'react-scroll'

// The Tailwind CSS class bg-gradient - to - b from - black via - black to - gray - 800 creates a vertical gradient background.Here's a breakdown of what it does:

// bg - gradient - to - b:

// Sets the gradient direction from top to bottom(vertical gradient).
//   from - black:

// Specifies the starting color of the gradient as black.
//   via - black:

// Sets an intermediate color in the gradient to black, making the transition stay dark in the middle.
//   to - gray - 800:

// Specifies the ending color of the gradient as gray - 800(a dark gray in Tailwind's default palette).

function Home() {



  return (
    //1st div
    <div name="Home" className='w-full bg-gradient-to-b from-black to-gray-800 pb-24'>

      <hr className='pb-16'/>

      {/* 2nd div */}
      <div className='flex flex-col sm:flex-row items-center justify-center px-8 lg:px-20 py-4 sm:py-8 gap-5 mx-auto'>

        {/* Left part */}
        <div className='flex flex-col justify-center sm:w-1/2 sm:pl-4 md:pl-24'>

          <h2 className='flex text-3xl sm:text-5xl font-bold text-white'>I'm a Frontend Developer</h2>

          <p className='text-gray-500 py-4 text-sm'>
            To be a successful professional in a global respected company and to achive the objectives of the company
            with honesty and fairness and continuously upgrade my knowledge and skills.
          </p>

          <div>

            <button className='group text-white px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all duration-300'>
              <Link to='Education' smooth duration={500}>Education</Link>
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>

          </div>

        </div>

        {/* Right Part */}
        <div className='flex justify-center w-1/2'>
          <img src={HeroImage} alt="" className='rounded-2xl max-w-60 sm:max-w-72 md:max-w-80 lg:max-w-96'/>
        </div>

      </div>

    </div>
  )
}

export default Home