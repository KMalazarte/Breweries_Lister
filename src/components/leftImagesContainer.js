import React, { Fragment } from 'react';
import SingleBreweryItem from './singleBreweryItem.js'
import { Image, Grid, Container } from 'semantic-ui-react'

const LeftImagesContainer = () => {

    return (
      <Fragment>
        <div>
          <Image
            src="https://media.gettyimages.com/photos/general-view-of-mercedesbenz-stadium-during-the-match-between-the-picture-id865169162?s=2048x2048"
            className="sticky"
          />
        </div>
      </Fragment>
    )

}

export default LeftImagesContainer
