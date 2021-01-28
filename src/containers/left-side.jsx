import React, { Component } from 'react';
import { connect } from 'react-redux';

import MajorCityList from './major-city-list';

class LeftSide extends Component {
  degSunriseSunset = () => {
    const sunrise = this.props.selectedCity.sys.sunrise * 1000;
    const sunset = this.props.selectedCity.sys.sunset * 1000;

    const degres = (180 * (Date.now() - sunrise)) / (sunset - sunrise);

    if (degres > 180) {
      return "180";
    } else if (degres < 0) {
      return "0";
    }
    // console.table(sunset, sunrise, Date.now(), degres);

    return degres.toString();
  }

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
    return `${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;
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
          <img id="orb" src="../assets/images/sun.svg" style={{transform: `rotate(${this.degSunriseSunset()}deg)`}}/>
        </div>
        <div className="sun-hours">
          <h4 className="sunrise-sunset"><img id="sunrise" src="../assets/images/sunrise.svg" /><span>{("0" + new Date((this.props.selectedCity.sys.sunrise + this.props.selectedCity.timezone) * 1000).getHours()).slice(-2) + ":" + ("0" + new Date((this.props.selectedCity.sys.sunrise + this.props.selectedCity.timezone) * 1000).getMinutes()).slice(-2)}</span></h4>
          <h4 className="sunrise-sunset"><img id="sunset" src="../assets/images/sunset.svg" /><span>{("0" + new Date((this.props.selectedCity.sys.sunset + this.props.selectedCity.timezone) * 1000).getHours()).slice(-2) + ":" + ("0" + new Date((this.props.selectedCity.sys.sunset + this.props.selectedCity.timezone) * 1000).getMinutes()).slice(-2)}</span></h4>
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
