import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

class City extends Component {
  render() {
    const style = {
      backgroundColor: "green"
    };
    return (
      <div className="city-item">
        <h5 className="city-item-name">{this.props.city}</h5>
        <h5 className="city-item-value">20</h5>
        <h5 className="city-item-advice" style={style}>GOOD</h5>
      </div>
    );
  }
}

export default City;
