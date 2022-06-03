import React, { Component } from 'react';

class Name extends Component {

  upperCase = ({ target }) => {
    target.value = target.value.toUpperCase();
  }

  render() { 
    return (
      <label htmlFor="">
        Nome:
        <input
          placeholder='Nome'
          type="text"
          maxLength="40"
          onChange={this.upperCase}
          onChangeCapture={this.props.setData}
          name="name"
          id="name"
          required/>
      </label>
    );
  }
}
 
export default Name;