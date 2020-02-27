import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialMovie = {
  title: "",
  director: "",
  metascore: 0,
  stars: [],
};

const MovieForm = props => {
  const [movie, setMovie] = useState({ initialMovie });

  const { id } = useParams();

  useEffect(() => {
    const movieToUpdate = props.movieList.find(movie => `${movie.id}` === id);

    if (movieToUpdate) {
      console.log("movieToUpdate", movieToUpdate);
      setMovie({ ...movieToUpdate, stars: movieToUpdate.stars.join(", ") });
    }
  }, [props.movieList, id]);

  const handleChange = e => {
    let value = e.target.value;

    setMovie({
      ...this.initialMovie,
      [e.target.name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    movie.stars = movie.stars.split(", ");

    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then(res => {
        props.refreshMovies();
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor='movie'>
          <input
            onChange={handleChange}
            id='movie'
            type='text'
            name='title'
            placeholder='Title'
            value={movie.title}
          />
        </label>
        <label htmlFor='movie'>
          <input
            onChange={handleChange}
            id='movie'
            type='text'
            name='director'
            placeholder='Director'
            value={movie.director}
          />
        </label>
        <label htmlFor='movie'>
          <input
            onChange={handleChange}
            id='movie'
            type='text'
            name='metascore'
            placeholder='Metascore'
            value={movie.metascore}
          />
        </label>
        <label htmlFor='movie'>
          <input
            onChange={handleChange}
            id='movie'
            type='text'
            name='stars'
            placeholder='Stars'
            value={movie.stars}
          />
        </label>
        <label htmlFor='movie'>
          <input
            onChange={handleChange}
            id='movie'
            type='text'
            name='id'
            placeholder='Movie-id'
            value={movie.id}
          />
        </label>
        <button type='submit'>Submit&rarr;</button>
      </div>
    </form>
  );
};
export default MovieForm;
