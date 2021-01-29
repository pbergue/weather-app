import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

// import { getAqi } from '../actions';

class MajorCityList extends Component {


  render() {
    return (
      <div className="major-city-list">
        <h2>Air quality in major cities</h2>
        <ul>
          {
            this.props.majorCityList.map( (city, index) => {
              return (
                <li key={city.name}>
                  <City city={city} index={index} aqi={this.props.majorCityAqi[parseInt(index)]} />
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
//     getAqi
//   }, dispatch);
// }

function mapStateToProps(state) {
  return {
    majorCityList: state.majorCityList,
    majorCityAqi: state.majorCityAqi
  }
}

export default connect(mapStateToProps)(MajorCityList);
