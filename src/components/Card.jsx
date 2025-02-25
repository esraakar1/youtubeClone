import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    // eğer elemanın tipi video değilse ekrana bir şey basma 
    if(item.type !== "video") return null;
    
    // kapak fotoğrafı 
    const thumbnail = item.thumbnail[item.thumbnail.length - 1].url; 

    // kanal fotoğrafı 
    const channelPic = item.channelThumbnail && item.channelThumbnail[0].url;

  return (
   <Link to="/">
    {/* resim alanı  */}
   <div>
<img src={thumbnail} className='rounded-lg w-full h-full'/>
   </div>
  {/* alt detay  */}
   <div>
    <img src={channelPic} />
    <div>
        <h4></h4>

        <p></p>

        <div>
            <p></p>
            <p></p>
        </div>
    </div>
   </div>
   </Link>
  )
}

export default Card