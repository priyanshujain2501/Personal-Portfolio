import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs' 
 
function SocialLinks(){
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>

      <ul>

        <li className='flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
          <a href="https://in.linkedin.com" className='flex justify-between items-center w-full text-white ' target="_blank">
            LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>

        <li className='flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
          <a href="https://github.com/priyanshujain2501" className='flex justify-between items-center w-full text-white ' target="_blank">
              Github <FaGithub size={30}/>
          </a>
        </li>

        <li className='flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
          <a href="mailto:mailto.priyanshu2000@gmail.com" target='_blank' className='flex justify-between items-center w-full text-white '>
              Mail <HiOutlineMail size={30}/>
            </a>
        </li>

        <li className='flex justify-center items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
          <a href="/Resume.pdf" download={true} target='_blank' className='flex justify-between items-center w-full text-white '>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
        </li>

      </ul> 
    </div>
  )
}

export default SocialLinks