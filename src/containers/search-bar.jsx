import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityValue: "",
      countryValue: ""
    }
  }
  callApi = (e) => {
    e.preventDefault();
    console.log('Api called');
    return '';
  }

  handleChange = (event) => {
    if (event.currentTarget.className === "search-form-city") {
      this.setState({cityValue: event.target.value.toUpperCase()})
    } else if (event.currentTarget.className === "search-form-country") {
      this.setState({countryValue: event.target.value.toUpperCase()})
    }
  }

  render() {
    return (
      <form method="get" className="search-bar" onSubmit={this.callApi}>
        <input type="text" className="search-form-city" value={this.state.cityValue} placeholder="City" onChange={this.handleChange} />
        <input type="text" className="search-form-country" value={this.state.countryValue} placeholder="Country" onChange={this.handleChange} />
        <input type="image" src="../../assets/images/loupe.svg" id="search-loupe" />
      </form>
    );
  }
}

export default SearchBar;
