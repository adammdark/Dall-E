import React from 'react'
import { downloadImage } from '../utils/fileSaver'
import { download } from '../assets'

const Card = ({_id,name,prompt,photo}) => {
  return (
    <div className='card relative group shadow-card hover:shadow-cardhover rounded-xl '>
      <img src={photo} alt={prompt} className='h-auto w-full object-cover rounded-xl' />
      <div className='hidden group-hover:flex flex-col m-2 p-4 absolute left-0 right-0 bottom-0 bg-black/70 rounded-md'>
        <p className='text-white text-sm prompt overflow-y-auto '>{prompt}</p>
        <div className='flex justify-between items-center mt-4 gap-2 text-white'>
          <div className='flex items-center gap-2'>
            <div className='h-7 w-7 bg-green-400 flex justify-center rounded-full items-center font-bold'>{name[0]}</div>
            <p className='text-sm'>{name}</p>
          </div>
          <button type='submit' onClick={()=>downloadImage(_id,photo)} className='outline-none border-none bg-transparent hover:cursor-pointer'>
            <img src={download} alt='download' className='w-6 h-7 object-contain invert' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card