import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// import { getMajorCitiesAqi } from '../actions';

class City extends Component {

  getRealName = (city) => {
    switch(city){
      case 'Darlinghurst':
        return 'Sydney';
      case 'Manhattan':
        return 'New York';
      default:
        return city;
    }
  }

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
    // console.log(this.props.majorCityAqi[parseInt(this.props.index)]);
    // console.log(this.props.majorCityAqi);
    if (this.props.city.data.current.pollution) {
      return (
        <div className="city-item">
          <h5 className="city-item-name">{this.getRealName(this.props.city.data.city)}</h5>
          <h5 className="city-item-value">{(this.props.city.data.current.pollution.aqius).toString()}</h5>
          <h5 className="city-item-advice" style={{backgroundColor: this.aqiColor(parseInt(this.props.city.data.current.pollution.aqius))}}>{this.getAqiValue(parseInt(this.props.city.data.current.pollution.aqius))}</h5>
        </div>
      );
    } else {
      return (
        <div className="city-item">
          <h5 className="city-item-name">{this.props.city.data.city}</h5>
          <h5 className="city-item-value">No data</h5>
          <h5 className="city-item-advice">No data</h5>
        </div>
      )
    }
  }
}

// function mapStateToProps(state) {
//   return {
//     majorCityAqi: state.majorCityAqi
//   }
// }

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     getMajorCitiesAqi
//   }, dispatch);
// }

export default City;
