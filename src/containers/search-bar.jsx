import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getTodayWeather, getAqi, getForecast} from '../actions';

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
    // console.log('Api called');
    console.log(this.state.cityValue, this.state.countryValue);
    this.props.getTodayWeather(this.state.cityValue, this.state.countryValue);
    this.props.getForecast(this.state.cityValue, this.state.countryValue);
    this.props.getAqi(this.state.cityValue, this.state.countryValue);
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

function mapStateToProps(state){
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTodayWeather,
    getAqi,
    getForecast
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
