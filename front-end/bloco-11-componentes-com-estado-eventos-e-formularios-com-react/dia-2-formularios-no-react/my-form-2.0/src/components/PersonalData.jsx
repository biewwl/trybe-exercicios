import React, { Component } from 'react';
import Address from './personal-data-components/Address';
import City from './personal-data-components/City';
import Cpf from './personal-data-components/Cpf';
import Email from './personal-data-components/Email';
import Name from './personal-data-components/Name';
import State from './personal-data-components/State';
import Home from './personal-data-components/Home'

class PersonalData extends Component {
  render() { 
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <Name setData={this.props.setData} />
        <Email setData={this.props.setData} />
        <Cpf setData={this.props.setData} />
        <Address setData={this.props.setData} />
        <City setData={this.props.setData} />
        <State setData={this.props.setData} />
        <Home setData={this.props.setData} />
      </fieldset>
    );
  }
}
 
export default PersonalData;