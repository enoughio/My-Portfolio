import React from 'react'
import './Technology.css'


const Technology = ({tech}) => {
  return (
    <div id='tech' className='capitalize hover:uppercase border-2 rounded-lg border-black px-2 text-xl min-w-max flex justify-center items-center' >
        {tech }
    </div>
  )
}

export default Technology