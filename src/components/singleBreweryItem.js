import React, { Fragment } from 'react';

const SingleBreweryItem = (props) => {

  const address = props.street + " " + props.city + ", " + props.state + " " + props.zip_code

  const type = props.type
  const upper = type.charAt(0).toUpperCase() + type.substring(1)

  return (
    <Fragment>
      <p className="desc_container" id={props.id} onClick={props.clickHandler}>
        <div className="brewery_name">{props.name}</div>
        <div className="brewery_address">{address}</div>
        <div className="brewery_type">Type: {upper}</div>
      </p>
      <div>
        <a className="brewery_link" href={props.website} target="_blank" rel="noopener noreferrer">{props.website}</a>
      </div>
    </Fragment>
    )

}

export default SingleBreweryItem;
