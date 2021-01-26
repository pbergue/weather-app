import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

class MajorCityList extends Component {
  render() {
    return (
      <div className="major-city-list">
        <h2>Air quality in major cities</h2>
        <ul>
          {
            this.props.majorCityList.map( city => {
              return (
                <li key={city}>
                  <City city={city} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    majorCityList: state.majorCityList
  }
}

export default connect(mapStateToProps)(MajorCityList);
