import React, { Fragment, Component } from 'react';
import BreweriesContainer from './breweriesContainer.js'
import BreweryDetails from './breweryDetails.js'
import { Header, Grid, Container } from 'semantic-ui-react'
import LeftImagesContainer from './leftImagesContainer'
import RightImagesContainer from './rightImagesContainer'

class TopPage extends Component {

  state={
    breweries: [],
    clicked: false,
    selectedBrewery: ""
  }


  componentDidMount() {
    let openBreweryDB = 'https://api.openbrewerydb.org/breweries?by_city=Atlanta'
    let railsAPI = 'http://localhost:3000/breweries'
    fetch(openBreweryDB)
      .then( resp => resp.json() )
      .then( breweries => {
        this.setState({
          breweries: breweries
        })
      })
  }

  clickHandler = e => {
    let clickedBrewery = this.state.breweries.find(brewery => brewery.id === parseInt(e.currentTarget.id))
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
    // console.log("%c breweries state",'color: blue', this.state.selectedBrewery);
    // console.log("%c breweries state",'color: orange', this.state.breweries);
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
              <Header id="instuctions" as='h2'>Click on a brewery to see details</Header>
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
