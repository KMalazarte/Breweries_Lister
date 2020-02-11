import React, { Fragment, Component } from 'react';
import BreweriesContainer from './breweriesContainer.js'
import BreweryDetails from './breweryDetails.js'
import { Header, Grid, Container } from 'semantic-ui-react'
import LeftImagesContainer from './leftImagesContainer'
import RightImagesContainer from './rightImagesContainer'
import '../Style.css';

class TopPage extends Component {

  state={
    breweries: [],
    clicked: false,
    selectedBrewery: ""
  }


  componentDidMount() {
    let openBreweryDB = 'https://api.openbrewerydb.org/breweries?by_city=Atlanta'
    let railsAPI = 'http://localhost:3000/breweries'
    // use railsAPI after running rails s on port 3000
    fetch(openBreweryDB)
      .then( resp => resp.json() )
      .then( breweries => {
        this.setState({
          breweries: breweries
        })
      })
  }

  clickHandler = e => {
    const clickedBrewery = this.state.breweries.find(brewery => brewery.id === parseInt(e.currentTarget.id))
    this.setState({
      clicked: true,
      selectedBrewery: clickedBrewery
    })
  }

  goBackHandler = e => {
    this.setState({
      clicked: false
    })
  }

  render() {
    if (this.state.clicked === false) {
      return (
        <Fragment>
          <Grid columns={3}>
            <Grid.Column center width={4}>
              <Container id="sticky">
                <LeftImagesContainer/>
              </Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header id="title">Atlanta Breweries</Header>
              <Header id="instructions" as='h2'>Click on a brewery to see details</Header>
              <BreweriesContainer
                  breweries={this.state.breweries}
                  clickHandler={this.clickHandler}
              />
            </Grid.Column>
            <Grid.Column center width={4}>
              <Container id="sticky">
                <RightImagesContainer/>
              </Container>
            </Grid.Column>
          </Grid>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <BreweryDetails
            selectedBrewery={this.state.selectedBrewery}
            goBackHandler={this.goBackHandler}
          />
        </Fragment>
      )
    }
  }

}

export default TopPage;
