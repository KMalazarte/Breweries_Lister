import React from 'react';
import GoogleMap from './googleMap.js'
import { Button, Icon, Header } from 'semantic-ui-react'


const BreweryDetails = (props) => {

  console.log("%c brewery details props",'color: blue', props);

  const address = props.selectedBrewery.street + " " + props.selectedBrewery.city + ", " + props.selectedBrewery.state + " " + props.selectedBrewery.postal_code

  return (
    <div>
      <Button onClick={props.goBackHandler}>
        <Icon name='left arrow'/>
        Go Back to list of breweries
      </Button>
      <Header as="h1" color="orange">
        {props.selectedBrewery.name}
      </Header>
      <span> {address} </span>
      <GoogleMap
        lat= {props.selectedBrewery.latitude}
        lng= {props.selectedBrewery.longitude}
      />
      <Button id="button_2" onClick={props.goBackHandler}>
        <Icon name='left arrow'/>
        Go Back to list of breweries
      </Button>
    </div>
  )
}

export default BreweryDetails;
