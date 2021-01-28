import React, { Component } from 'react';
import { connect } from 'react-redux';

import MajorCityList from './major-city-list';

class LeftSide extends Component {
  getCurrentDate() {
    const date = new Date(Date.now());
    const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const number = date.getDate();
    const month = monthList[date.getMonth()];
    const year = date.getFullYear();

    return `${number} ${month} ${year}`;
  }

  getCurrentDay() {
    const date = new Date(Date.now());
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return dayList[date.getDay()].toUpperCase();
  }

  getCurrentTime() {
    const date = new Date(Date.now());
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  render() {
    return (
      <div className="left-side">
        <h1>Weather around you</h1>
        <h2>Enter a city to obtain the weather forecast</h2>
        <div className="date">
          <h4 className="day">{this.getCurrentDay()}</h4>
          <h4 className="date-item">{this.getCurrentDate()}</h4>
          <h4 className="hour">{this.getCurrentTime()}</h4>
        </div>
        <div className="day-cycle">
          <img id="semi-round" src="../assets/images/semi-round.svg" />
          <img id="orb" src="../assets/images/sun.svg" />
        </div>
        <div className="sun-hours">
          <h4 className="sunrise-sunset"><img id="sunrise" src="../assets/images/sunrise.svg" /><span>{`${new Date(this.props.selectedCity.sys.sunrise * 1000).getHours()}:${new Date(this.props.selectedCity.sys.sunrise * 1000).getMinutes()}`}</span></h4>
          <h4 className="sunrise-sunset"><img id="sunset" src="../assets/images/sunset.svg" /><span>{`${new Date(this.props.selectedCity.sys.sunset * 1000).getHours()}:${new Date(this.props.selectedCity.sys.sunset * 1000).getMinutes()}`}</span></h4>
        </div>
        <MajorCityList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  }
}

export default connect(mapStateToProps)(LeftSide);
