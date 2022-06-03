import React, { Component } from 'react';

class City extends Component {
  render() { 
    return (
      <label htmlFor="city">
        Cidade:
        <input
          placeholder='Cidade'
          type="text"
          name="city"
          id="city"
          maxLength="28"
          onChange={this.props.setData}
          required />
      </label>
    );
  }
}
 
export default City;