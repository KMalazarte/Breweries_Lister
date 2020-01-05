import React from 'react';
import SingleBreweryItem from './singleBreweryItem.js'

const BreweriesContainer = props => {

  const brewery = props.breweries.map( brewery =>
    <div>
      <SingleBreweryItem
        id = {brewery.id}
        key = {brewery.id}
        name = {brewery.name}
        type = {brewery.brewery_type}
        street = {brewery.street}
        city = {brewery.city}
        state = {brewery.state}
        zip_code = {brewery.postal_code}
        website = {brewery.website_url}
        clickHandler = {props.clickHandler}
      />
    </div>
  )

    return (
      <div>
        {brewery}
      </div>
    )

}

export default BreweriesContainer
