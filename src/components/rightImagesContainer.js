import React, { Fragment } from 'react';
import { Image } from 'semantic-ui-react'

const RightImagesContainer = () => {

    return (
      <Fragment>
          <Image
            src="https://media.gettyimages.com/photos/dansby-swanson-of-the-atlanta-braves-is-congratulated-by-his-in-the-picture-id1179458556?s=2048x2048"
            alt="Braves Dugout"
            className="image with margin"
          />
          <Image
            src="https://media.gettyimages.com/photos/budweiser-budvars-beer-quality-management-specialist-petr-kosin-adds-picture-id491506214?s=2048x2048"
            alt="silo"
            className="image with margin"
          />
          <Image
            src="https://media.gettyimages.com/photos/trae-young-of-the-atlanta-hawks-looks-on-during-pregame-introductions-picture-id1065961820?s=2048x2048"
            alt="Trey Young"
          />
      </Fragment>
    )

}

export default RightImagesContainer
