import React from "react";
/* import axios from 'axios';
 */import MovieDay from './MovieDay.js';

class Movie extends React.Component {

  render() {
    return (

      this.props.movie.map((movie, index) => (
        <MovieDay movie={movie} index={index} />))
    )
      
  }
}

export default Movie;