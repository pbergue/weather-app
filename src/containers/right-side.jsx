import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getTodayWeather, getAqi, getForecast} from '../actions';

import SearchBar from './search-bar';
import CityWeather from './city-weather';


class RightSide extends Component {
  componentDidMount(){
    this.props.getTodayWeather(this.props.selectedCity.name, this.props.selectedCity.sys.country);
    this.props.getForecast(this.props.selectedCity.name, this.props.selectedCity.sys.country);
  }

  // componentWillMount(){
  //   const coords = this.props.selectedCity.coord;
  //   console.log(coords);
  //   this.props.getAqi(coords.lat, coords.long);
  // }


  render() {
    return (
      <div className="right-side">
        <SearchBar />
        <CityWeather city={this.props.selectedCity} forecast={this.props.forecast} aqi={this.props.aqi} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity,
    forecast: state.forecast,
    aqi: state.aqi
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTodayWeather,
    getAqi,
    getForecast
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RightSide);
