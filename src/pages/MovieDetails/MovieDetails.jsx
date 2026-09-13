import { useParams } from "react-router-dom";

function MovieDetails() {
  const {movieId} = useParams()

  return <h1>MovieDetails</h1>;
}

export default MovieDetails;
