// axiosun temel ayarları yapılmış olan bir kopyasını oluştur 

import axios from "axios";

const api = axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '4683c4451fmsh0a5e6d435c438f5p1c3ac6jsn8d937d8ea422',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
      }
  });

export default api