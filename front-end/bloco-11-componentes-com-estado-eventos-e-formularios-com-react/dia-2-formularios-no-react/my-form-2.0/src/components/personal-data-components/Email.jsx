import React, { Component } from 'react';

class Email extends Component {
  render() { 
    return (
      <label htmlFor="email">
        Email:
        <input
          placeholder='Email'
          type="email"
          name="email"
          id="email"
          maxLength="50"
          onChangeCapture={this.props.setData}
          required/>
      </label>
    );
  }
}
 
export default Email;