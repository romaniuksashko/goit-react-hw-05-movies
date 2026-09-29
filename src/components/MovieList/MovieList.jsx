import { Link, useLocation } from "react-router-dom";
import { List, Item, Img, Subtitle } from "./MovieList.styled";

function MovieList({ movies }) {
  const location = useLocation()
  console.log(movies);
  
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <Link state={location} to={`/movies/${id}`}>
              {poster_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                  alt={title}
                />
              ) : (
                <Img
                  src="https://syncrox.com/assets/img-temp/200x300/img1.png"
                  alt={title}
                />
              )}
              <Subtitle>{title}</Subtitle>
            </Link>
          </Item>
        );
      })}
    </List>
  );    
}

export default MovieList