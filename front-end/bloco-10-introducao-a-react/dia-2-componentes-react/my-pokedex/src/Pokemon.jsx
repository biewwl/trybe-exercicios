import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends Component {
  render () {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.objeto;
    return (
      <section className="card">
        <h2>{ name }</h2>
        <p>{ type }</p>
        <p>{ `${ value } ${measurementUnit}` }</p>
        <img src={ image } alt={ `Foto do pokemon ${name}` } />
      </section>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string
};

export default Pokemon;
