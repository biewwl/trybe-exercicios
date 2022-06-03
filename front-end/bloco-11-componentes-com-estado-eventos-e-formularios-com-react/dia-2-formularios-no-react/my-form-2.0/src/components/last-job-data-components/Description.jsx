import React, { Component } from 'react';

class Description extends Component {
  render() { 
    return (
      <label htmlFor="description">
        Descrição do cargo:
        <textarea
          placeholder='Descrição do cargo'
          name="description"
          id="description"
          maxLength="500"
          required
          onChangeCapture={this.props.setData}
          />
      </label>
    );
  }
}
 
export default Description;