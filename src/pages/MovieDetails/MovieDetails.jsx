import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation()
  const [movie, setMovie] = useState({});

  const backLink = location.state?.from??"/"

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
    }

    fetchMovie();
  }, [movieId]);

  // log

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const defaultImg = "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/330px-No_image_available.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail";
  

  return (
    <div>
      <Link to={backLink}>← Go back</Link>
      {movie.poster_path ? (
        <img src={imageUrl} alt={movie.title} />
      ) : (
        <img src={defaultImg} alt={movie.title} />
      )}
      <div>
        <h1>{movie.title}</h1>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movie.genres?.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetails;
