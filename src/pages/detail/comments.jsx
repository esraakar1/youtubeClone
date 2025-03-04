import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({videoId}) => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const params = {
            geo: "TR", lang:"tr", id: videoId,
        }
        api
        .get("/comments", {params})
        .then((res) => setComments(res.data))
        .catch((err) => setError(err.message))
    }, [videoId])

    
  return (
    <div className='my-6'>
        {error ? (<p>üzgünüz yorumlar alınamadı</p>) : !comments ? (<p>yorumlar yükleniyor...</p>) : comments.length === 0 ? (<p>henüz herhangi bir yorum bulunmuyor</p>) : 
        
        (
        <>
        <h2 className='text-xl font-bold'>{comments.commentsCount}</h2>
        <input type="text" placeholder='Yorum Yaz...' className='w-full bg-transparent border-b border-[#3E403F] outline-none p-2 mb-5 ' />
       { comments.data.map((comment) => (<div key={comment.commentId} className='flex gap-2 sm:gap-3 items-start px-1 py-3 sm:py-4'>
        <img src={comment.authorThumbnail[0].url} className='rounded-full size-8 sm:size-10' />
        <div className='flex flex-col gap-2'>
            <h5 className='flex gap-2 items-center'>
                <span className='font-semibold'>{comment.authorText} </span>
                <span className='text-gray-500 text-sm'>{comment.publishedTimeText} </span>
            </h5>
            <p className='whitespace-pre-wrap'>{comment.textDisplay} </p>
            <div className='flex gap-5 items-center'>
                <button className='flex items-center gap-1 hover:bg-gray-700 py-1 px-2 cursor-pointer rounded'>
                  <AiFillLike/>
                  <span> {comment.likesCount} </span>
                </button>
                <button className='hover:bg-gray-700 py-1 px-2 cursor-pointer rounded'>
                    <AiFillDislike/>
                </button>
            </div>
            <div> {comment.replyCount > 0 && (<div className='flex w-fit items-center p-1 rounded-md gap-2 text-blue-500 hover:bg-gray cursor-pointer'> <IoMdArrowDropdown /> {comment.replyCount} yanıt </div>
          )}
         </div>
        </div>
       </div>
      
       ))}
        </>
        )}
    </div>
    
  )
}

export default Comments;