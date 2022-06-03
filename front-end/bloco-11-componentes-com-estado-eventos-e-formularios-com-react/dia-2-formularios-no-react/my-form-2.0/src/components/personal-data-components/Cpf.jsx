import React, { Component } from 'react';

class Cpf extends Component {
  render() { 
    return (
      <label htmlFor="cpf">
        CPF:
        <input
          placeholder='CPF'
          type="text"
          name="cpf"
          id="cpf"
          maxLength="11"
          onChangeCapture={this.props.setData}
          required/>
      </label>
    );
  }
}
 
export default Cpf;