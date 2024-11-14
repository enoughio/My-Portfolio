import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonP = ({to, text= "contact" }) => {

    const nevigate = useNavigate();

    const HandelClick = () => {
        nevigate(to);
    }

  return (
    <div>
        <button className='border-2 border-[#363B45]  text-xl font-medium px-3 py-2 rounded-md mt-12' onClick={()=>HandelClick()}>
            {
                text
            }
        </button>

    </div>
  )
}

export default ButtonP