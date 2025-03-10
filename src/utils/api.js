// axiosun temel ayarları yapılmış olan bir kopyasını oluştur 

import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': import.meta.env.VITE_API_HOST,
      }
  });

export default api