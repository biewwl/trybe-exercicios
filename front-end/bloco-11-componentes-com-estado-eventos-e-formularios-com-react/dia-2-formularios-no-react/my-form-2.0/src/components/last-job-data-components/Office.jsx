import React, { Component } from 'react';

class Office extends Component {

  constructor() {
    super();
    this.state = {caution: 0}
  }

  caution = () => {
    if(this.state.caution === 0) {
      this.setState({caution: 1});
      alert('Preencha com cuidado esta informação.');
    }
  }

  render() { 
    return (
      <label htmlFor="office">
        Cargo:
        <textarea
          placeholder='Cargo'
          name="cargo"
          id="cargo"
          maxLength="40"
          onMouseEnter={this.caution}
          onChangeCapture={this.props.setData}
          required
           />
      </label>
    );
  }
}
 
export default Office;