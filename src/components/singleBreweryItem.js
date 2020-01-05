import React, { Fragment } from 'react';

const SingleBreweryItem = (props) => {

    // console.log("%c single breweries props",'color: blue', props);

  const address = props.street + " " + props.city + ", " + props.state + " " + props.zip_code

  return (
    <Fragment>
      <p id={props.id} onClick={props.clickHandler}>
        <div>{props.name}</div>
        <div>{address}</div>
        <div>Type: {props.type}</div>
      </p>
      <span>
        <a href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
      </span>
    </Fragment>
    )

}

export default SingleBreweryItem;
