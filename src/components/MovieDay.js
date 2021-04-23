import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieDay extends React.Component {

  render() {
    return (
  <>
    <h2>
      Title: {this.props.movie.title}
    </h2>
    <p>
      Rating: {this.props.movie.popularity}
    </p>
    <p id="overview">
      Overview: {this.props.movie.overview}
    </p>
    <p id="movieImage">
      <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.props.movie.image}`} alt="here lies a stationary movie" />
    </p>
  </>

  )
}
}

export default MovieDay;