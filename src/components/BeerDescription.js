import React from "react";
import "./BeerDescription.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



class BeerDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '#000000' }
  };
  render() {
    //Using the object from the other component to fill in the table
    return (
      <body className="bodyStyle">
        <div style={{ background: this.state.color }} id="main">
          <div className="container">
            <div className='row'>
              <div className='col-4'>
                <Button variant="secondary" size="lg" href="HomePage.js">Back</Button>
                <div className="imgDiv"><img className="imgStyle" src={this.props.data.image_url} />
                </div>
                <h2 className='text-white'>Specs</h2>
                <table className='table table-dark' >
                  <tbody>
                    <tr>
                      <td>ABV:</td>
                      <td>{this.props.data.abv}</td>
                    </tr>
                    <tr>
                      <td>EBC:</td>
                      <td>{this.props.data.ebc}</td>
                    </tr>
                    <tr>
                      <td>IBU:</td>
                      <td>{this.props.data.ibu}</td>
                    </tr>
                    <tr>
                      <td>PH:</td>
                      <td>{this.props.data.ph}</td>
                    </tr>
                    <tr>
                      <td>SRM:</td>
                      <td>{this.props.data.srm}</td>
                    </tr>
                    <tr>
                      <td>Target FG:</td>
                      <td>{this.props.data.target_fg}</td>
                    </tr>
                    <tr>
                      <td>Target OG:</td>
                      <td>{this.props.data.target_fg}</td>
                    </tr>
                    <tr>
                      <td>Attenuation Level:</td>
                      <td>{this.props.data.attenuation_level}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-8'>
                <h1 className='text-white'>Overview</h1>
                <table className="table table-dark">
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{this.props.data.name}</td>
                    </tr>
                    <tr>
                      <td>Contributed By:</td>
                      <td>{this.props.data.contributed_by}</td>
                    </tr>
                    <tr>
                      <td>Tagline:</td>
                      <td>{this.props.data.tagline}</td>
                    </tr>
                    <tr>
                      <td>Discription:</td>
                      <td>{this.props.data.description}</td>
                    </tr>
                    <tr>
                      <td>Food Pairings:</td>
                      <td>
                        <ul>
                          {
                            this.props.data.food_pairing.map(food_pairing => (
                              <li key={food_pairing}>{food_pairing}
                              </li>
                            ))
                          }
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>First Brewed:</td>
                      <td>{this.props.data.first_brewed}</td>
                    </tr>
                  </tbody>
                </table>
                <h2 className='text-white'>Recipe</h2>
                <table className='table table-dark' >
                  <tbody>
                    <tr>
                      <td>Brewers Tips:</td>
                      <td>{this.props.data.brewers_tips}</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className='text-white'>Ingredients</h3>
                <table className='table table-dark' >
                  <tbody>
                    <tr>
                      <td>Hops:</td>
                      <td>
                        <ul>
                          {
                            this.props.data.ingredients.hops.map(hop => (
                              <li key={hop.name}>Add {hop.amount.value} {hop.amount.unit} of {hop.name} at {hop.add} to add {hop.attribute} attribute.
                              </li>
                            ))
                          }
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Malt:</td>
                      <td>
                        <ul>
                          {
                            this.props.data.ingredients.malt.map(malt => (
                              <li key={malt.name}>Add {malt.amount.value} {malt.amount.unit} of {malt.name}
                              </li>
                            ))
                          }
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Yeast:</td>
                      <td>{this.props.data.ingredients.yeast}</td>
                    </tr>
                  </tbody>
                </table>
                <h3 className='text-white'>Method</h3>
                <table className='table table-dark' >
                  <tbody>
                    <tr>
                      <td>Boil Volume:</td>
                      <td> {this.props.data.boil_volume.value} {this.props.data.boil_volume.unit}</td>
                    </tr>
                    <tr>
                      <td>Volume:</td>
                      <td> {this.props.data.volume.value} {this.props.data.volume.unit}</td>
                    </tr>
                    <tr>
                      <td>Fermentation:</td>
                      <td>{this.props.data.method.fermentation.temp.value} {this.props.data.method.fermentation.temp.unit}</td>
                    </tr>
                    <tr>
                      <td>Mash Temp:</td>
                      <td>
                        <ul>
                          {
                            this.props.data.method.mash_temp.map(mash => (
                              <li key={mash.id}>Mash at {mash.temp.value} {mash.temp.unit} for {mash.duration} minutes
                              </li>
                            ))
                          }
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Twist:</td>
                      <td>{this.props.data.method.twist}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}


export default BeerDescription