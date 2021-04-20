/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    };
  }

  getLocation = async () => {

    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(apiUrl);

    const location = response.data[0];

    this.setState({
      location,
      // same as location:location
    })

  }

  render() {

/*     const img_url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`;
 */

    return (
      <>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <Button>
        <button onClick={this.getLocation}>Explore!</button>
        </Button>
        {this.state.location.place_id &&
          <>
            <h2>The city is: {this.state.location.display_name}</h2>
              <h3>The latitude is: {this.state.location.lat}</h3>
              <h3>The longitude is: {this.state.location.lon}</h3>
            
          </>
        }
      </>
    )
  }
}

export default App;
