import { getTrendingMovies } from "../../api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { HomeTitle } from "./Home.styled";

function Home() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getTrendingMovies()
      setMovie(movies)

      localStorage.removeItem("movie")
    }

    fetchMovies()

  }, [])

  return (
    <>
      <h1 hidden>Search movie website</h1>
      <HomeTitle>Trending Today</HomeTitle>
      <MovieList movies={movie}/>
    </>

  )
}

export default Home;