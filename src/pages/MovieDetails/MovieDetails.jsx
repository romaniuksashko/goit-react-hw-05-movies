import { useParams, useLocation, NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";
import { Box, General, Img, AdditionalList, GenresList, Back } from "./MovieDetails.styled";

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation()
  const [movie, setMovie] = useState({});

  const backLink = location.state?.pathname??"/"

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    }

    fetchMovie();
  }, [movieId]);

  const imageUrl = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
  const defaultImg = "https://syncrox.com/assets/img-temp/200x300/img1.png";
  

  return (
    <Box>
      <Back>
        <Link to={backLink} className="go__back">← Go back</Link>
      </Back>

      <General>
        {movie.poster_path ? (
          <Img src={imageUrl} alt={movie.title} />
        ) : (
          <Img src={defaultImg} alt={movie.title} />
        )}
        <div>
          <h1>{movie.title}</h1>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <GenresList>
            {movie.genres?.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </GenresList>
        </div>        
      </General>

      <div>
        <h2>Additional information</h2>
        <AdditionalList>
          <li><NavLink to="cast">Cast</NavLink></li>
          <li><NavLink to="reviews">Review</NavLink></li>
         </AdditionalList>
      </div>
      <Outlet/>  
    </Box>
  );
}

export default MovieDetails;
