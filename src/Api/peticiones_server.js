import axios from "axios";
import {errorServer} from './messages'

//export const domain_server = process.env.REACT_APP_API || "http://localhost:8000";
export const domain_server = process.env.REACT_APP_API || "https://sisboa.net";
const list_movies = "/database/dbMovies.json";






// GETTING TOKEN
export const getUserToken = async (post) => {
    try {
      const { data } = await axios.post(`${domain_server}/public/api/auth/login`, post)
      // const { data } = await axios.post(`${domain_server}/api/auth/login`, post)
      .catch(error => console.log(
        error
        // {"error": "Error en conexion"}
        ));
      return data;
    } catch (error) {
      let AuthUserToken = {logged: false};
      {localStorage.setItem('AuthUserToken', JSON.stringify(AuthUserToken))}
      return errorServer
    }
  };
  

// debe ir con token
export const getPostListMovies = async () => {
  const { data } = await axios.get(`${domain_server}${list_movies}`);
  const {movies} = data;
  return movies;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(`${domain_server}${list_movies}`);
  const {movies} = await data;
   let movieselected = await movies.filter(movie => movie.id === movieId);
  return movieselected;
};




//https://sisboa.net/public/api/auth/Users/geAllUsers
//let userData = { "name":"Braulio", "email": "b@gmail.com", "password": "123456" };

// let token = {"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2lzYm9hLm5ldFwvcHVibGljXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjQxNzg5MTEyLCJleHAiOjE2NDE3OTI3MTIsIm5iZiI6MTY0MTc4OTExMiwianRpIjoiVW5zUFFVTWtSTmJnR0pZQSIsInN1YiI6MTEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.14_MmItxgajD3PIWNTwdnGuNOFNL_G6CwM3P8su4q8o"};
// return axios.post(`${domain_server}/public/api/auth/Users/geAllUsers`, token).then(({data}) => {
//    return console.log(data);
//   });




        
// export const getPostById = async (postId) => {
//   const { data } = await axios.get(`${API}/posts/${postId}`);
//   return data;
// };

// export const getAllPosts = async () => {
//   const { data } = await axios.get(`${API}/posts`);
//   return data;
// };

// export const createNewPost = async (post) => {
//   const { data } = await axios.post(`${API}/posts`, post);
//   return data;
// };



