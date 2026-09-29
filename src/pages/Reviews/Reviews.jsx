import { useState, useEffect } from "react";
import { getMovieReviews } from "../../api";
import { useParams } from "react-router-dom";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    }

    fetchReviews();
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>We do not have aby reviews for this movie</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Reviews;
