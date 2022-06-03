import React, { Component } from 'react';

class Home extends Component {
  render() { 
    return (
      <label htmlFor="Home">
        Residência:
        <label htmlFor="house">
          <input
            type="radio"
            name="home"
            id="house"
            value="Casa"
            onChangeCapture={this.props.setData}
          />
          Casa
        </label>
        <label htmlFor="apartament">
          <input
          type="radio"
          name="home"
          id="apartament"
          value="Apartamento"
          onChangeCapture={this.props.setData}
           />
          Apartamento
        </label>
      </label>
    );
  }
}
 
export default Home;