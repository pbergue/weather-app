import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './search-bar';
import CityWeather from './city-weather';

class RightSide extends Component {
  render() {
    return (
      <div className="right-side">
        <SearchBar />
        <CityWeather city={this.props.selectedCity} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  }
}

export default connect(mapStateToProps)(RightSide);
