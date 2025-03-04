import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import api from "../../utils/api"
import ReactPlayer from 'react-player'
import Description from "./description"
import Comments from "./comments"
import Channel from "./channel"
import Card from "../../components/Card"
import BasicLoader from "../../components/basic-loader"

const Detail = () => {

  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  // arama parametrelerine erişim için kurulum
  const [params] = useSearchParams();

  // url deki v isimli parametreye eriş 
 const id = params.get("v"); 

  // id si bilinen videonun bilgilerini api dan al 
 useEffect(() => {
  const params = {id, extend:1, geo: "TR", lang: "tr" };
  api.get("/video/info", { params }) 
  .then((res) => setVideo(res.data))
  .catch((err) => setError(err.message));
 }, [id])
  return (
    <div className="detail-page h-screen overflow-auto">
     <div className="page-content">
      {/* video içeriği  */}
      <div> 
        {/* oynatıcı */}
        <div className="h-[55vh] md:h-[60vh] lg:h-[60vh] rounded overflow-hidden"><ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="100%"/></div>

        {error ? (<Error msg={error} /> ) : !video ? (<BasicLoader />) : (<div>
          {/* başlık */}
          <h1 className="my-3 text-xl font-bold"> {video.title} </h1>
          {/* kanal bilgileri */}
           <Channel video= {video} />
          {/* açıklama alanı  */}
           <Description video= {video} />
          {/* yorumlar  */}
          <Comments videoId={id} />
        </div> 
      )}
      </div>
      {/* önerilern videolar alanı  */}
      <div className="flex flex-col gap-5 p-1">{video?.relatedVideos.data.map((item, key) => ( <Card key={key} item={item} isRow={true} />))}</div>
     </div>
    </div>
  )
}

export default Detail;