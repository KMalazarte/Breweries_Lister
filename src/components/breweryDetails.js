import React from 'react';
import GoogleMap from './googleMap.js'
import { Button, } from 'semantic-ui-react'

const BreweryDetails = (props) => {

  console.log("%c brewery details props",'color: blue', props);

  const address = props.selectedBrewery.street + " " + props.selectedBrewery.city + ", " + props.selectedBrewery.state + " " + props.selectedBrewery.postal_code

  return (
    <div>
      <Button onClick={props.goBackHandler}>Go Back to list of breweries </Button>
        <h1> {props.selectedBrewery.name} </h1>
        <p> {address} </p>
        <GoogleMap
          lat= {props.selectedBrewery.latitude}
          lng= {props.selectedBrewery.longitude}
        />
      <Button onClick={props.goBackHandler}>Go Back to list of breweries</Button>
    </div>
  )
}

export default BreweryDetails;
