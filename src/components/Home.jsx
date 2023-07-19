import React from 'react'
import doggo from '../assets/doggo.jpg' // adjust the file extension as per your image
import { BsFillArrowRightCircleFill } from 'react-icons/bs' // correct import path
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' 
    className='h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800'>


      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold
            text-white
            '>
                Ryan Hamilton Portfolio
            </h2>
        
            <p className='text-gray-500 py-4 max-w-md'>
            Motivated and detail-oriented student pursuing a Bachelor of Business (Finance) 
            and Bachelor of Science in Information Technology (Enterprise Systems) seeking 
            to leverage academic knowledge and diverse work experience in a challenging role within the
             finance or IT/Software Developer Industry. 
            </p>
            <div>
                <Link to= "portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio  
                    <span className='group-hover:rotate-90 duration-300'>
                      
                      <BsFillArrowRightCircleFill size={25} 
                      className='ml-1'
                      />
                    
                    </span>
                </Link>
            </div>
        </div>
        <div className='md:w-1/2'>
            <img src={doggo} alt='no doggo' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  );
}

export default Home
