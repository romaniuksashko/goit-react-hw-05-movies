import axios from "axios";

const API_KEY = "f72770c36af767f72944d145b5e83afb"

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export async function getTrendingMovies() {
  const response = await axios.get("trending/movie/day", {
    params: {
      api_key: API_KEY
    }
  })

  return response.data.results
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: API_KEY
    }
  })

  return response.data
}