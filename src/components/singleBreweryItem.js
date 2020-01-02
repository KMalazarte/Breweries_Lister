import React from 'react';

const SingleBreweryItem = (props) => {

    // console.log("%c single breweries props",'color: blue', props);

  const address = props.street + " " + props.city + ", " + props.state + " " + props.zip_code

  return (
      <p id={props.id} onClick={props.clickHandler}>
        <div>Name: {props.name}</div>
        <div>Type: {props.type}</div>
        <div>Address: {address}</div>
        <a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
      </p>
    )

}

export default SingleBreweryItem;
