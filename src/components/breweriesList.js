import React, { Fragment, Component } from 'react';

class BreweriesList extends Component {

  state={
    breweries: [],
    clicked: false
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries?by_city=Atlanta')
      .then( resp => resp.json() )
      .then( breweries => {
        console.log("%c breweries array",'color: firebrick', breweries);
        this.setState({
          breweries: breweries
        })
      })
  }

  // .then(moviesArr =>  {
    //     // console.log(moviesArr.movies);
    //     this.setState({
    //     movies: moviesArr.movies
    //     })

  render() {
    console.log("%c breweries state",'color: blue', this.state.breweries);
    return (
      <Fragment>
        <div>Hello from breweries list</div>
      </Fragment>
    )
  }

}

export default BreweriesList;
