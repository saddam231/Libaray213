import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = (destionation = '/') => {
  return (
   <div className='flex'>
   <Link to={destionation} className="bg-sky-800 tex-white px-4 py-1 rounded-lg w-fit">
    <BsArrowLeft className='text-2xl' />
   </Link>

   </div>
  )
}

export default BackButton