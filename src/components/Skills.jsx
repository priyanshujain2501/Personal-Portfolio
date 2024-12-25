import React from 'react'
import cpp from '../assests/CPP.png'
import html from '../assests/html.png'
import css from '../assests/css.jpg'
import js from '../assests/js.png'
import react from '../assests/reactjs.png'
import tailwind from '../assests/tailwind.png'


function Skills(){
  return (
    <div name='Skills' className='bg-gradient-to-b  from-black to-gray-800 w-full py-16'>

        {/* 2nd div */}
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col    justify-center w-full text-white'>

          {/* Heading Section */}
          <div>
              <p className='text-3xl sm:text-5xl font-bold border-b-4 border-gray-500 px-2 inline'>Skills</p>
              <p className='py-6 text-md'>These are the technologies on which I've worked</p>
          </div>

          {/* Content Section */}
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-8 md:px-20 lg:px-16 place-items-center'>
              
              {/* 1st */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-xl shadow-blue-600 sm:w-60 mx-14 sm:mx-auto'> 
                  <img src={cpp} alt="" className='w-48 h-48 mx-auto sm:rounded-xl'/>
                  <p className='mt-4'>CPP</p>
              </div>

              {/* 2nd */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-orange-700 sm:w-60 mx-14 sm:mx-auto'>
                <img src={html} alt="" className='w-48 h-48 mx-auto sm:rounded-xl' />
                  <p className='mt-4'>HTML</p>
              </div>

              {/* 3rd */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-blue-600 sm:w-60 mx-14 sm:mx-auto'>
                <img src={css} alt="" className='w-48 h-48 mx-auto sm:rounded-xl' />
                  <p className='mt-4'>CSS</p>
              </div>

              {/* 4th */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-sky-500 sm:w-60 mx-14 sm:mx-auto'>
                <img src={tailwind} alt="" className='w-48 h-48 mx-auto rounded-xl' />
                  <p className='mt-4'>Tailwind CSS</p>
              </div>

              {/* 5th */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-yellow-500 sm:w-60 mx-14 sm:mx-auto'>
                <img src={js} alt="" className='w-48 h-48 mx-auto sm:rounded-xl' />
                  <p className='mt-4'>JavaScript</p>
              </div>

              {/* 6th */}
              <div className='w-7/12 shadow-md hover:scale-105 duration-200 py-2 rounded-lg shadow-sky-400 sm:w-60 mx-14 sm:mx-auto'>
                <img src={react} alt="" className='w-48 h-48 mx-auto sm:rounded-xl' />
                  <p className='mt-4'>ReactJs</p>
              </div>

          </div>

        </div>

    </div>
  )
}

export default Skills