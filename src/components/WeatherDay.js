import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherDay extends React.Component {

  render() {
    return (
      <>
        Day: {this.props.day.time}
        Forecast: {this.props.day.forecast}
      </>
    )
  }
}

export default WeatherDay;