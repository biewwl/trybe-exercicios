import React, { Component } from 'react';

class Address extends Component {

  removeEspecialCharacter = ({ target }) => {
    target.value = target.value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    // Código usado para remover caractéres especiais: 
    // https://metring.com.br/javascript-substituir-caracteres-especiais#:~:text=Removendo%20todos%20os%20caracteres%20especiais%20em%20JavaScript
  }

  render() { 
    return (
      <label htmlFor="address">
        Endereço:
        <input
          placeholder='Endereço'
          type="text"
          name="address"
          id="address"
          maxLength="200"
          onChange={this.removeEspecialCharacter}
          onChangeCapture={this.props.setData}
          required />
      </label>
    );
  }
}
 
export default Address;