import React, { useState } from 'react'
import millify from 'millify'

const Description = ({video}) => {

   const [isOpen, setIsOpen] = useState(false)
   const text = isOpen ? video.description : video.description.slice(0, 100) +  "  ...daha fazla"

  return (
    <div 
    onClick={() => setIsOpen(!isOpen)}
    className='bg-[#3E403F] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80 '>
        <div className='flex gap-4 mb-2'>
            <p> {millify(video.viewCount)} Görüntülenme </p>
            <p>{new Date(video.publishDate).toLocaleDateString("tr", {day:"2-digit",
                month:"short",
                year: "numeric",
            })} </p>
        </div>
        <p className='whitespace-pre-wrap'> {text} </p>
    </div>
  )
}

export default Description;