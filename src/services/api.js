import axios from 'axios';
// base da url:  https://api.themoviedb.org/3/
// url da api: movie/now_playing?api_key=6a0aae5ada35be3e977a9b7c7871f9b6



const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
