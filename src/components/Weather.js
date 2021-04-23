import React from "react";
import WeatherDay from './WeatherDay.js';


class Weather extends React.Component {

  render() {
    return (

      this.props.weather.map((day, index) => (
        <WeatherDay day={day} index={index} />
      )
      )
    )
  }
}


export default Weather;