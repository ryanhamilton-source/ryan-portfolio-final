import React, { Component } from 'react'

import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import reactImage from "../assets/react.svg"
import sql from "../assets/mysql.svg"
import github from "../assets/github.svg"
import php from "../assets/php.svg"
import cakephp from "../assets/cakephp.svg"



const Experience = () => {


        const techs = [
            {
                id: 1,
                src: html,
                title:'Html',
                style: 'shadow-orange-500'
            },
            {
                id: 2,
                src: css,
                title:'css',
                style: 'shadow-pink-500'
            },
            {
                id: 3,
                src: javascript,
                title:'JavaScript',
                style: 'shadow-yellow-500'
            },
            {
                id: 4,
                src: reactImage,
                title:'React',
                style: 'shadow-blue-500'
            },
            {
                id: 5,
                src: sql,
                title:'SQL',
                style: 'shadow-blue-500'
            },
            {
                id: 6,
                src: github,
                title:'Github',
                style: 'shadow-green-500'
            },
            {
                id: 7,
                src: php,
                title:'PHP',
                style: 'shadow-blue-500'
            },
            {
                id: 8,
                src: cakephp,
                title:'CakePhp',
                style: 'shadow-red-500'
            }
            
            

        ]

    return (
      <div name = 'experience' className=' bg-gradient-to-b from-gray-800 to black w-full h-screen'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>What I have worked with:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 px-12 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                        <div 
                            key={id}
                            className={`shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt='' style={{ width: '100%', height: 'auto', maxHeight: '100px' }}/>
                                 <p className='mt-4'>{title}</p>
                        </div>

                        ))
                    }

            </div>
        </div>



      </div>
    )
    };

export default Experience