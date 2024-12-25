import React from 'react'
import portFolio from '../assests/portFolio.jpg'
import appointment from '../assests/appointment.avif'
import todo from '../assests/todo.png'

const Projects = () => {


  return (
    <div name='Projects' className='w-full bg-gradient-to-b from-black to-gray-800 text-white py-28' >
        
        {/* 2nd div */}
        <div className='w-full px-4 sm:px-20 mx-auto flex flex-col  justify-center'>

            {/* Heading */}
            <div className='pb-8'>
                <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6 text-md md:text-xl'>This is my projects</p>
            </div>
            
            {/* Projects details */}
              <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-14 py-2'>

                {/* 1st Project */}
                <div className='shadow-md shadow-gray-600 rounded-lg w-2/3 md:w-full mx-auto'>

                    <img src={appointment} alt="" className='h-52 w-full  rounded-md duration-200 hover:scale-105' />

                    <div className='flex items-center justify-center text-sm sm:text-lg'>
                        <button className='w-1/2 px-1 py-3 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-1 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Code</button>
                    </div>

                </div>

                {/* 2nd project */}
                <div className='shadow-md shadow-gray-600 rounded-lg w-2/3 md:w-full mx-auto '>
                    
                    <img src={portFolio} alt="" className='h-52 w-full rounded-md duration-200 hover:scale-105'/>

                    <div className='flex items-center justify-center text-sm sm:text-lg'>
                        <button className='w-1/2 px-1 py-3 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-1 py-3 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                    
                </div>

                {/* 3rd Project */}
                <div className='shadow-md shadow-gray-600 rounded-lg w-2/3 md:w-full mx-auto'>
                    
                    <img src={todo} alt="" className='rounded-md h-52 w-full duration-200 hover:scale-105'/>

                    <div className='flex items-center justify-center text-sm sm:text-lg'>
                        <button className='w-1/2 px-1 py-3 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Demo</button>
                        <a href="https://github.com/priyanshujain2501/todo" target='_blank' className='w-1/2 px-1 py-3 sm:px-6 sm:m-4 duration-200 hover:scale-105'>Code</a>
                    </div>

                </div> 

            </div>

        </div>

    </div>
  )
}

export default Projects