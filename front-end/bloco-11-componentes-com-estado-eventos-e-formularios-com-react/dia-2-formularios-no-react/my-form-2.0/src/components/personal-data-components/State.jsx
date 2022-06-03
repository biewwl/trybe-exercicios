import React, { Component } from 'react';
import states from '../../states';

class State extends Component {
  render() { 
    return (
      <label htmlFor="state">
        Estado:
        <select name="state" id="state" onChangeCapture={this.props.setData}>
          {states.map((e) => <option 
            key={e.sigla}
            value={e.name}>
              {`${e.sigla} ${e.name}`}
          </option>)}
        </select>
      </label>
    );
  }
}
 
export default State;