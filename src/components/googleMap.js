import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../App.css'

class GoogleMap extends Component {

  render() {

    const Marker = ({ text }) => <span role="img">"🍺"</span>

    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };

    let center = {}

    if (this.props.lat && this.props.lng) {
      center = {
        lat:parseFloat(this.props.lat),
        lng:parseFloat(this.props.lng)
      }
    } else {
      center = {
        lat:33.750160,
        lng:-84.389113
      }
    }

    const zoom = 14

    console.log("%c google map props",'color: orange', this.props);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
           key: process.env.REACT_APP_GOOGLE_API_KEY,
           language: 'US',
           region: 'US'
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          text="🍺"
        />
        </GoogleMapReact>

      </div>
    )
  }
}

export default GoogleMap;
