import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Loader = () => {
    
    // 20 elemana sahip bir dizi oluştur 
    const arr = new Array(20).fill("selam");

    // diziyi dönüp ekrana 20 tane card elementi bas 
  return arr.map((i, key) => ( <div key={key} className='animate-pulse'>
    <div className='bg-gray-600 h-[220px] md:h-48 mb-4 rounded' ></div>
    <div className='flex gap-3 items-center'>
    <FaUserCircle className='text-5xl text-gray-600 self-start '/>
    <div>
        <div className='w-[90%] bg-gray-600 h-2.5 rounded-full'/>
        <div className='w-[40%] bg-gray-600 h-2.5 my-4 rounded-full'/>

        <div className='flex gap-2 items-center rounded-full text-gray-600'>

        <div className='w-44 h-2 bg-gray-600 h-2.5 rounded-full'/>
        *
        <div className='w-16 h-2 bg-gray-600 h-2.5 rounded-full'/>
        </div>
    </div>

   </div>
</div>
)) 
   
}

export default Loader