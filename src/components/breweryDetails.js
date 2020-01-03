import React from 'react';

const BreweryDetails = (props) => {

  console.log("%c brewery details props",'color: blue', props);

  const address = props.selectedBrewery.street + " " + props.selectedBrewery.city + ", " + props.selectedBrewery.state + " " + props.selectedBrewery.postal_code

  return (
    <div>
      <button onClick={props.goBackHandler}>Go Back to breweries list</button> 
      <h1> {props.selectedBrewery.name} </h1>
      <p> {address} </p>
      <p> map </p>
    </div>
  )
}

export default BreweryDetails;
