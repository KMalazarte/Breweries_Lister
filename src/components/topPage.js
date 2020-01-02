import React, { Fragment, Component } from 'react';
import BreweriesContainer from './breweriesContainer.js'

class TopPage extends Component {

  state={
    breweries: [],
    clicked: false
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

  render() {
    // console.log("%c breweries state",'color: blue', this.state.breweries);
    return (
      <Fragment>
        <h1> ATL BREWERIES </h1>
        <BreweriesContainer
          breweries={this.state.breweries}
        />
      </Fragment>
    )
  }

}

export default TopPage;
