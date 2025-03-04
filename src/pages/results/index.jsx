import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import api from "../../utils/api"
import BasicLoader from '../../components/basic-loader'
import Error from "../../components/Error"
import Card from "../../components/Card"

const Results = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [token, setToken] = useState(null)
  const [page , setPage] = useState(1)

  // urldeki arama parametresine eriş 
  const [params] = useSearchParams();
  const query = params.get("search_query")

  // api dan aratılan kelimeye uygun videoları almak 
  useEffect(() => {
    setIsLoading(true);
    // gönderilecek parametreleri ayarla 
    const params = { query, token:page > 1 ? token : undefined };
   
    // videoları state e aktar ve videoları bas 
    api.get("/search", {params})
    .then((res) => {
      setData((prev) => [...prev, ...res.data.data]);
      setToken(res.data.continuation)
    })
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }, [query, page])

  //  her yeni kelime aratıldığında önceki sonuçları temizle 
  useEffect(() => {
    setData([]);
    setToken(null);
    setPage(1);
  }, [query]);

  return (
    <div className='p-4 sm:p-6 md:p-10 h-[93vh] overflow-auto'>
      <h2 className='text-xl mb-5'>
        <span className='font-bold me-2'> {query} </span>
        <span>için sonuçlar</span>
      </h2>
      {isLoading && <BasicLoader /> }
      {error && <Error msg={error} /> }

      <div className='wrapper flex flex-col gap-5 justify-center'>
        {data.map((item, key) => <Card key={key} item={item} isRow={true} /> )}
      </div>

      <div className='flex justify-center my-10'>
        {!isLoading && (
        <button className= ' py-2 px-5 rounded-md bg-gray-500 hover:bg-zinc-800 transition cursor-pointer' >Daha Fazla</button>
      )}
      </div>
    </div>
  )
}

export default Results;