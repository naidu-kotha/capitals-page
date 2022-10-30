import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {selectedId: countryAndCapitalsList[0].id}

  displayCountryName = event => {
    this.setState({selectedId: event.target.value})
  }

  render() {
    const {selectedId} = this.state

    const country = countryAndCapitalsList.filter(
      eachItem => eachItem.id.toUpperCase() === selectedId.toUpperCase(),
    )
    console.log(country)

    console.log(selectedId)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select className="select-tab" onChange={this.displayCountryName}>
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text"> is capital of which country?</p>
          </div>
          <p className="country">{country[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
