import { useState, useEffect } from "react";
import { searchMovie } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import { Form, SearchInput, SearchButton } from "./Movies.styled";

function Movies() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(() => {
    const saveData = localStorage.getItem("movie");

    if (saveData) {
      return JSON.parse(saveData);
    } else {
      return [];
    }
  });

  async function handleSubmit(event) {
    event.preventDefault();

    if (query.trim() === "") {
      return;
    }

    const data = await searchMovie(query);
    setMovie(data);
  }

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movie]);

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={handleInput}
        />
        <SearchButton type="submit">Search</SearchButton>
      </Form>
      {movie.length > 0 && <MovieList movies={movie} />}
    </>
  );
}

export default Movies;
