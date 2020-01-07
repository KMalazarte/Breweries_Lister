import React, { Fragment } from 'react';
import { Image } from 'semantic-ui-react'

const LeftImagesContainer = () => {

    return (
      <Fragment>
          <Image
            src="https://media.gettyimages.com/photos/atlanta-united-celebrates-with-the-mls-cup-after-their-20-over-the-picture-id1070249546?s=2048x2048"
            alt="FC Champions"
            className="image with margin"
          />
          <Image
            src="https://media.gettyimages.com/photos/kegs-of-beer-are-stacked-in-the-adnams-brewery-on-june-25-2013-in-picture-id171611655?s=2048x2048"
            alt="kegs"
            className="image with margin"
          />
          <Image
            src="https://media.gettyimages.com/photos/matt-ryan-of-the-atlanta-falcons-runs-out-on-the-field-prior-to-the-picture-id459467162?s=2048x2048"
            alt="Matt Ryan"
          />
      </Fragment>
    )

}

export default LeftImagesContainer
