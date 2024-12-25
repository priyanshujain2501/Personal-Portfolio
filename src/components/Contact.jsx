import React from 'react'

function Contact(){
  return (
    <div name='Contact' className='w-full bg-gradient-to-b from-black to-gray-800 px-4 lg:px-16 text-white py-16'>

          {/* 2nd div */}
          <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

            {/* Heading section */}
            <div className='pb-8'>
                <p className='text-3xl sm:text-5xl font-bold border-b-4 inline border-gray-500'>Contact</p>
                <p className='py-6'>
                    Submit the form below to get in touch with me
                </p>
            </div>

            {/* form section */}
            <div className='flex justify-center align-items'>

              <form action="https://getform.io/f/agdyrwwb" method='POST' className='flex flex-col w-2/3 md:w-1/2'> 

                    <input type="text" name='name' placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="text" name='email' placeholder='Enter your Email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                      <textarea name="message" rows='10'
                      placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                      </textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's talk
                    </button>

                </form>
                
            </div>

        </div>

    </div>
  )
}

export default Contact