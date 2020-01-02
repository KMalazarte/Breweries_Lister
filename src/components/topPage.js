import React, { Fragment, Component } from 'react';
import BreweriesContainer from './breweriesContainer.js'

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

  render() {
    console.log("%c breweries state",'color: blue', this.state.selectedBrewery);
    // console.log("%c breweries state",'color: orange', this.state.breweries);
    return (
      <Fragment>
        <h1> ATL BREWERIES </h1>
        <BreweriesContainer
          breweries={this.state.breweries}
          clickHandler={this.clickHandler}
        />
      </Fragment>
    )
  }

}

export default TopPage;
