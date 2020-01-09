import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Header } from 'semantic-ui-react';
import '../App.css'

class GoogleMap extends Component {

  render() {

    const Marker = ({ text }) => <span id="marker" role="img">{text}</span>

    let center = {}

    const zoom = 14

    // console.log("%c google map props",'color: orange', this.props);

    if (this.props.lat && this.props.lng) {
      center = {
        lat:parseFloat(this.props.lat),
        lng:parseFloat(this.props.lng)
      }
      return (
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{
             key: process.env.REACT_APP_GOOGLE_API_KEY,
             language: 'US',
             region: 'US'
            }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
            text="🍺"
          />
          </GoogleMapReact>

        </div>
      )
    } else {
      return (
        <Header id="sorry" content="Sorry, map not available"/>
      )
    }
  }
}

export default GoogleMap;
