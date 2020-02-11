import React from 'react';
import GoogleMap from './googleMap.js'
import { Button, Icon, Header } from 'semantic-ui-react'


const BreweryDetails = (props) => {

  const address = props.selectedBrewery.street + " " + props.selectedBrewery.city + ", " + props.selectedBrewery.state + " " + props.selectedBrewery.postal_code

  let phone = ""
  if (props.selectedBrewery.phone === "") {
    phone = "No phone number listed"
  } else {
    phone = props.selectedBrewery.phone.split("")
    phone.unshift("(")
    phone.splice(4,0,")")
    phone.splice(8,0,"-")
    phone.join("")
  }

  return (
    <div>
      <Button onClick={props.goBackHandler}>
        <Icon name='left arrow'/>
        Go Back to list of breweries
      </Button>
      <Header as="h1" id="details_name">
        {props.selectedBrewery.name}
      </Header>
      <span id="details_address"> {address} </span>
      <span id="details_phone"> {phone} </span>
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
