import React from 'react'
import ButtonP from './ButtonP'
import ParticlesBackground from '../utils/ParticlesBackground.jsx'

const Hero = () => {
  return (
    <div id="Hero" className='pl-[13vw] flex justify-center w-[60%] h-[90%] pt-[2vh] mt-8 '>
        <div id='textContent' className='w-[80%] h-[100%] pt-[3rem]  text-left font-semibold '>
            <h1 className='text-6xl pb-3'>Hii, I am Aniket</h1>
            <h3 className='text-5xl pb-3'>Web Developer</h3>
            <p className='text-2xl font-medium mt-8'>I am a full stack web developer I like to code (and occasionally design). Based Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, quam.
            in India.</p>
            <div className='flex items-center gap-4 mt-2'>

            <ButtonP  to='/blog' text='Project'/>
            <ButtonP  to='/blog' text='Contact'/>
            </div>
        </div>
    </div>
  )
}

export default Hero