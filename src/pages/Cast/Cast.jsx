import { useState, useEffect } from "react";
import { getMovieCast } from "../../api";
import { useParams } from "react-router-dom";
import { List, Item, Img, Name, Role } from "./Cast.styled";

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    async function fetchCast() {
      const data = await getMovieCast(movieId);
      setCast(data);
    }

    fetchCast();
  }, [movieId]);

  const defaultImg = "https://syncrox.com/assets/img-temp/200x300/img1.png";

  return (
    <>
      <h2>Cast</h2>
      <List>
        {cast.map(({ id, name, character, profile_path }) => {
          return (
            <Item key={id}>
              {profile_path ? (
                <Img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
              ) : (
                <Img src={defaultImg} alt={name} />
              )}
              <Name>{name}</Name>
              <Role>Character: {character}</Role>
            </Item>
          );
        })}
      </List>
    </>
  );
}

export default Cast;
