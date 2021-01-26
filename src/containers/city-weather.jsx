import React, { Component } from 'react';

class CityWeather extends Component {
  render() {
    return (
      <div className="city-weather">
        <h2>{`${this.props.city.name}, ${this.props.city.country}`}</h2>
        <div className="city-weather-content">
          <div className="city-weather-weather">
            <h3>Weather</h3>
            <div className="weather-data">
              <img src="../../assets/images/sun.svg" id="weather-icon" />
              <div className="first-line-data">
                <div className="data-temperature">
                  <img src="../../assets/images/thermometer.svg" id="icon-weather" alt="temperature" />
                  <div className="temp-max-min">
                    <p>{this.props.city.tmax}</p>
                    <p>{this.props.city.tmin}</p>
                  </div>
                </div>
                <div className="data-humidity">
                  <img src="../../assets/images/humidity.svg" id="icon-weather" alt="humidity" />
                  <p>{this.props.city.humidity}</p>
                </div>
                <div className="data-pressure">
                  <img src="../../assets/images/gauge.svg" id="icon-weather" alt="pressure" />
                  <p>{this.props.city.pressure}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="city-weather-quality">
            <h3>Air Quality</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default CityWeather;
