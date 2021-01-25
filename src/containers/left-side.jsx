import React, { Component } from 'react';

class LeftSide extends Component {
  getCurrentDate() {
    const date = new Date(Date.now());
    const format = 'dd mm yyyy';
    const map = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear()
    }
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ];
    const day = dayList[date.getDay()];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${date.getDate()} ${month} ${year}`;
    // return date.toDateString();
    // return format.replace(/mm|dd|yy|yyyy/gi, matched => map[matched]);
  }

  render() {
    return (
      <div className="left-side">
        <h1>Weather around you</h1>
        <h2>Enter a city to obtain the weather forecast</h2>
        <div className="date">
          <h4>{this.getCurrentDate()}</h4>
        </div>
      </div>
    )
  }
}

export default LeftSide;
