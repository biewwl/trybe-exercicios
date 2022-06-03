import React, { Component } from 'react';

class VisualForm extends Component {
  render() {
    const {name, email, cpf, address, city, state, home, curriculum, office, description } = this.props.create;
    return (
      <section id="visual-form">
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {address}</p>
        <p>Cidade: {city}</p>
        <p>Estado: {state}</p>
        <p>Residência: {home}</p>
        <p>Resumo do Currículo: {curriculum}</p>
        <p>Cargo: {office}</p>
        <p>Descrição do Cargo: {description}</p>
      </section>
    );
  }
}
 
export default VisualForm;
