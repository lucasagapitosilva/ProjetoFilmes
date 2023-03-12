import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/
//URL API: /movie/now_playing?api_key=fcd0af7da8afc0e1599c2c3b6e0f64c7&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;