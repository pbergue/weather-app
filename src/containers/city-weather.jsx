import React, { Component } from 'react';

class CityWeather extends Component {

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

  reduceToOne = (arr) => {
    return arr.reduce((a, b) => a + b, 0)/(arr.length);
  }

  getCurrentDay = (day) => {
    const date = new Date(day);
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // console.log(dayList[date.getDay()]);
    return dayList[date.getDay()];
  }

  getProperDay = hours => {
    const distinctDays = [...new Set(hours.map( x => x.dt_txt.slice(8, 10)))].splice(1, 5);
    // console.log(distinctDays);
    return (

      distinctDays.map( day => {

        let dayToDisplay = {
          name: [],
          dt: [],
          humidity: [],
          icon: [],
          temp: [],
          speed: [],
          deg: [],
          description: []
        };


        hours.forEach( hour => {
          const dayNumber = hour.dt_txt.slice(8, 10);

          if (dayNumber !== day) {
            return null;

          } else {
            dayToDisplay.name.push(this.getCurrentDay(parseInt(hour.dt)*1000));
            dayToDisplay.dt.push(parseInt(hour.dt)*1000);
            dayToDisplay.humidity.push(hour.main.humidity);
            dayToDisplay.icon.push(hour.weather[0].icon);
            dayToDisplay.temp.push(hour.main.temp);
            dayToDisplay.speed.push(hour.wind.speed);
            dayToDisplay.deg.push(hour.wind.deg);
            dayToDisplay.description.push(hour.weather[0].description);
          }

        })
        dayToDisplay.name = [...new Set(dayToDisplay.name)];
        if (dayToDisplay.icon[3] && dayToDisplay.description[3]) {
          dayToDisplay.icon = dayToDisplay.icon[3];
          dayToDisplay.description = dayToDisplay.description[3];
        } else {
          dayToDisplay.icon = dayToDisplay.icon[0];
          dayToDisplay.description = dayToDisplay.description[0];
        }

        return dayToDisplay;

      })

    );
  }

  renderList = () => {
    // if (this.getProperDay(hours) === null) {
    //   return;
    // }
    const hours = this.props.forecast.list;
    // console.log(this.getProperDay(hours));
    if (this.getProperDay(hours)) {
      return (
        this.getProperDay(hours).map( day => {
          return (
            <li key={day.name} className="days-list-item">
              <div className="day-name-forecast">
                <h4>{day.name}</h4>
              </div>
              <div className="humidity-forecast">
                <img src="../../assets/images/humidity.svg" id="weather-icon" alt="humidity-forecast" />
                <h4>{Math.round(this.reduceToOne(day.humidity))}%</h4>
              </div>
              <div className="icon-forecast">
                <img id="forecast-icon" src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="forecast-icon"/>
                <h4>{day.description}</h4>
              </div>
              <div className="temperature-forecast">
                <h4>{Math.round(this.reduceToOne(day.temp))}°C</h4>
              </div>
              <div className="wind-forecast">
              <img src="../../assets/images/right-arrow.svg" id="weather-icon" style={{transform: `rotate(${90 + (this.reduceToOne(day.deg))}deg)`}} alt="wind-forecast" />
                <h4>{Math.round(this.reduceToOne(day.speed) * 3.6)} km/h</h4>
              </div>
            </li>
          );
        })

      );
    } else {
      return (
        <div>No data</div>
      )
    }
  }

  render() {
    return (
      <div className="city-weather">
        <h2>{`${this.props.city.name}, ${this.props.city.sys.country}`}</h2>
        <div className="city-weather-content">
          <div className="city-weather-weather">
            <h3>Weather</h3>
            <div className="weather-data">
              <div className="weather-description">
                <h2>{this.props.city.weather[0].main}</h2>
                <img src={`http://openweathermap.org/img/wn/${this.props.city.weather[0].icon}@2x.png`} id="top-weather-icon" />
              </div>
              <div className="first-line-data">
                <div className="data-temperature">
                  <img src="../../assets/images/thermometer.svg" id="weather-icon" alt="temperature" />
                  <div className="temp-max-min">
                    <p>{Math.round(this.props.city.main.temp_max)}°C</p>
                    <p>{Math.round(this.props.city.main.temp_min)}°C</p>
                  </div>
                </div>
                <div className="data-humidity">
                  <img src="../../assets/images/humidity.svg" id="weather-icon" alt="humidity" />
                  <p>{this.props.city.main.humidity}%</p>
                </div>
                <div className="data-pressure">
                  <img src="../../assets/images/gauge.svg" id="weather-icon" alt="pressure" />
                  <p>{this.props.city.main.pressure} hPa</p>
                </div>
              </div>
              <div className="second-line-data">
                <div className="data-wind-speed">
                  <img src="../../assets/images/wind.svg" id="weather-icon" alt="wind-speed" />
                  <p>{Math.round(this.props.city.wind.speed * 3.6)} km/h</p>
                </div>
                <div className="data-wind-direction">
                  <img src="../../assets/images/right-arrow.svg" id="weather-icon" style={{transform: `rotate(${90 + this.props.city.wind.deg}deg)`}} alt="wind-direction" />
                  <p>{this.props.city.wind.deg}°</p>
                </div>
              </div>
            </div>
          </div>
          <div className="city-weather-quality">
            <h3>Air Quality</h3>
            <div className="air-quality-content">
              <div className="air-quality-value">
                <div className="air-quality-title">
                  <h5>GOOD</h5>
                  <span className="air-quality-indicator" style={{backgroundColor: this.aqiColor(parseInt(this.props.aqi.data.current.pollution.aqius))}}></span>
                </div>
                <h6>US AQI:</h6>
                <h6>{this.props.aqi.data.current.pollution.aqius}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="city-weather-forecast">
          <h3>5-days forecast</h3>
          <ul className="days-list">
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}

export default CityWeather;
