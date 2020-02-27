import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  id: "",
  stars: [],
};

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: initialMovie,
    };
  }
  handleChange = e => {
    this.setState({
      ...this.initialMovie,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "http://localhost:5000/api/movies/:${id}";
    axios
      .put(url, `${this.state}`)

      .then(res => console.log("the data requested", res))

      .catch(err => console.log(err.res.data));
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor='movie'>
            <input
              onChange={this.handleChange}
              id='movie'
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
            />
          </label>
          <label htmlFor='movie'>
            <input
              onChange={this.handleChange}
              id='movie'
              type='text'
              name='director'
              placeholder='Director'
              value={this.state.director}
            />
          </label>
          <label htmlFor='movie'>
            <input
              onChange={this.handleChange}
              id='movie'
              type='text'
              name='metascore'
              placeholder='Metascore'
              value={this.state.metascore}
            />
          </label>
          <label htmlFor='movie'>
            <input
              onChange={this.handleChange}
              id='movie'
              type='text'
              name='stars'
              placeholder='Stars'
              value={this.state.stars}
            />
          </label>
          <label htmlFor='movie'>
            <input
              onChange={this.handleChange}
              id='movie'
              type='text'
              name='id'
              placeholder='Movie-id'
              value={this.state.id}
            />
          </label>
          <button type='submit'>Submit&rarr;</button>
        </div>
      </form>
    );
  }
}
export default MovieForm;
