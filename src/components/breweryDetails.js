import React from 'react';
import GoogleMap from './googleMap.js'

const BreweryDetails = (props) => {

  console.log("%c brewery details props",'color: blue', props);

  const address = props.selectedBrewery.street + " " + props.selectedBrewery.city + ", " + props.selectedBrewery.state + " " + props.selectedBrewery.postal_code

  return (
    <div>
      <button onClick={props.goBackHandler}>Go Back to breweries list</button>
      <h1> {props.selectedBrewery.name} </h1>
      <p> {address} </p>
      <GoogleMap
        lat= {props.selectedBrewery.latitude}
        lng= {props.selectedBrewery.longitude}
      />
    </div>
  )
}

export default BreweryDetails;
