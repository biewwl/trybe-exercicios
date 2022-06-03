import React, { Component } from 'react';

class Curriculum extends Component {
  render() { 
    return (
      <label htmlFor="curriculum">
        Resumo do Currículo:
        <textarea
        placeholder='Resumo do Currículo'
        name="curriculum"
        id="curriculum"
        maxLength="1000"
        required
        onChangeCapture={this.props.setData}
        />
      </label>
    );
  }
}
 
export default Curriculum;