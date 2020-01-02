import React from 'react';

const SingleBrewery = (props) => {

  const address = props.street + " " + props.city + ", " + props.state + " " + props.zip_code

  return (
      <p>
        <div>Name: {props.name}</div>
        <div>Type: {props.type}</div>
        <div>Address: {address}</div>
        <div>Clickable Website: {props.website}</div>
      </p>
    )

}

export default SingleBrewery;
