import React, { Fragment, Component } from 'react';
import BreweriesContainer from './breweriesContainer.js'
import BreweryDetails from './breweryDetails.js'
import { Header } from 'semantic-ui-react'

class TopPage extends Component {

  state={
    breweries: [],
    clicked: false,
    selectedBrewery: ""
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries?by_city=Atlanta')
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
          <Header as='h1' color="red">🍻 Atlanta Breweries 🍻</Header>
          <Header as='h2' color="yellow">Click a brewery to see more about it</Header>
          <BreweriesContainer
            breweries={this.state.breweries}
            clickHandler={this.clickHandler}
          />
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
