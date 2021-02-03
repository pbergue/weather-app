import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

// import { getMajorCitiesAqi } from '../actions';

class MajorCityList extends Component {

  render() {
    return (
      <div className="major-city-list">
        <h2>Air quality in major cities</h2>
        <ul>
          {
            this.props.aqi.map( (aqi, index) => {
              return (
                <li key={aqi.data.city}>
                  <City city={aqi} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     getMajorCitiesAqi
//   }, dispatch);
// }

// function mapStateToProps(state) {
//   return {
//     majorCityList: state.majorCityList
//   }
// }

export default MajorCityList;
