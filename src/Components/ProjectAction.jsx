import React from 'react'
import { GiOlive } from "react-icons/gi";


const ProjectAction = ({icon, text="Live Demo"}) => {

  return (
    <div className='bg-zinc-200 text-center border-gray-500 border-2 px-4 py-2 rounded-xl flex justify-center gap-3 items-center' >
        {!icon &&  <GiOlive /> }
        <h5>{text}</h5>
    </div>

  )
}

export default ProjectAction