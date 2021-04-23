import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather.js';
import Movie from './components/Movie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      weather: [],
      movies: [],
      error: false
    };
  }

  getLocation = async (e) => {

    try {
      e.preventDefault();
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
      const res = await axios.get(API);
      // console.log(res.data[0])
      this.setState({ location: res.data[0], error: false });
      this.getWeather();
      this.getMovie();

    } catch (error) {
      
      this.setState({ error: true });

    }
  }
  getWeather = async () => {
    try {
      const baseURL = `https://city-explorer-timegorov.herokuapp.com`
      const weatherAPI = `${baseURL}/weather`
      const query = {
        lon: this.state.location.lon,
        lat: this.state.location.lat
      };
      const weatherRes = await axios.get(weatherAPI, {params : query});
      const weather = weatherRes.data;
      // console.log(weather);
      this.setState({ weather, error: false });

    } catch (error) {
      this.setState({ error: true });
    }
  }
  getMovie = async () => {
    try {
      
      const baseURL = `https://city-explorer-timegorov.herokuapp.com`
      const movieAPI = `${baseURL}/movies`
      const query = {
        cityName: this.state.searchQuery
      };
      const movieRes = await axios.get(movieAPI, {params : query});
      const movies = movieRes.data;
      console.log(movies);
      this.setState({ movies, error: false });

    } catch (error) {

      this.setState({ error: true });
    }
  }

  render() {
    const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
    return (
      <>
        
          
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
            <button onClick={this.getLocation}>Explore!</button>
        
          {this.state.location.place_id &&
            <>
              <h2>The city is: {this.state.location.display_name}</h2>
              <h3>The latitude is: {this.state.location.lat}</h3>
              <h3>The longitude is: {this.state.location.lon}</h3>
              <img src={img_url} alt="location"/>
              <Weather weather={this.state.weather} />
              <Movie movie={this.state.movies} />
            </>
          }       

      </>
    )
  }
}

export default App;
