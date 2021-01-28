import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class City extends Component {

  aqiColor = (number) => {
    const colorScale = {
      green: "#00E400",
      yellow: "#FFFF00",
      orange: "#FF7E00",
      red: "#FF0000",
      violet: "#8F3F97",
      brique: "#7E0023"
    };


      if (number <= 50) { return colorScale.green }
      else if (number <= 100) { return colorScale.yellow }
      else if (number <= 150) { return colorScale.orange }
      else if (number <= 200) { return colorScale.red }
      else if (number <= 300) { return colorScale.violet }
      else if (number > 300) { return colorScale.brique }
      else { return "transparent" }
  }

  getAqiValue = (number) => {
    const wordScale = {
      good: "Good",
      moderate: "Moderate",
      unhealthy: "Unhealthy",
      unhealthyy: "Unhealthy +",
      unhealthyyy: "Very unhealthy",
      hazardous: "Hazardous"
    };


      if (number <= 50) { return wordScale.good }
      else if (number <= 100) { return wordScale.moderate }
      else if (number <= 150) { return wordScale.unhealthy }
      else if (number <= 200) { return wordScale.unhealthyy }
      else if (number <= 300) { return wordScale.unhealthyyy }
      else if (number > 300) { return wordScale.hazardous }
      else { return "no data" }
  }

  render() {
    const style = {
      backgroundColor: this.aqiColor(parseInt(this.props.aqi.data.current.pollution.aqius))
    };
    return (
      <div className="city-item">
        <h5 className="city-item-name">{this.props.city}</h5>
        <h5 className="city-item-value">{this.props.aqi.data.current.pollution.aqius}</h5>
        <h5 className="city-item-advice" style={style}>{this.getAqiValue(parseInt(this.props.aqi.data.current.pollution.aqius))}</h5>
      </div>
    );
  }
}

export default City;
