import React from 'react'
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"
import api from "../../utils/api"
import {useSearchParams} from "react-router-dom"
import Card from "../../components/Card"

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [error , setError] = useState(null);

  //  url deki kategori arama parametresine eriştik 
  const [params] = useSearchParams();
  const selected = params.get("category");
  // kategori her değiştiğinde ilgili api endpointine istek at 
  useEffect(() => {
  //  loading devreye girmesi için state i temizledik 
   setVideos(null);

  //  kategoriye bağlı istek atılacak url i belirle 
   const url = !selected ? "/home" : selected === "trending" ? "/trending" : `/search?query=${selected}`;

    // api isteği at 
   api.get(url).then((res) => consol.log(res))
   .catch((err) => setError(err.message))
  }, [selected]);

  return (
    <div className="flex" >
      <Sidebar />
      <div className="videos" >
       {error ? ( <h1>hata bilgisi</h1> ) : !videos ? ( <h1>yükleniyor...</h1> )
       : ( videos.map((i, key) => <Card key= {key} item={i} />))}
      </div>
    </div>
  )
}

export default Feed