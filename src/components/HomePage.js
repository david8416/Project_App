import React from "react"
import BeerDescription from "./BeerDescription"
import "./HomePage.css"


class HomePage extends React.Component {
  //intializing variables
  state = {
    searchValue: "",
    beers: [],
    displayComponent: false
  };

  onChange = event => {
    //function to listen to changes in the search bar
    const { value } = event.target;
    this.setState({
      searchValue: value
    });

    this.search(value);
  };

  search = searchValue => {
    //Calling th API and fetching the data
    const url = `https://api.punkapi.com/v2/beers?beer_name=${searchValue}`;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        this.setState({ beers: data });
        console.log(data)
      });
  };

  openDetails = item => {
    //Opening the other component
    this.setState({ displayComponent: true })
    this.render = () => { return <BeerDescription data={item} />; }
  }
  
  constructor(props) {
    super(props);
    this.state = { color: '#000000' }
  }

  render() {
    return (
      <div style={{ background: this.state.color }} id="main">
        <div className="container">
          <form className='formStyle'>
            <div className='row p-5 offset-2 col-8'>
              <img src={window.location.origin + '/HomeImage.png'} /><br />
            </div>
            <input
              type="text"
              className="searchBarStyle"
              placeholder="Hey! Search for a beer here"
              onChange={this.onChange}
            />
            <ul className="listStyle">
              {Array.isArray(this.state.beers) && this.state.beers.length ? (this.state.beers.map(beer => (
                <li className="listItemStyle" onClick={() => this.openDetails(beer)} key={beer.id}>{beer.name}</li>
              ))) : <h1 className='text-white p-5'>No results</h1>
              }
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
export default HomePage
