import React, { Component } from 'react';
import Curriculum from './last-job-data-components/Curriculum'
import Office from './last-job-data-components/Office';
import Description from './last-job-data-components/Description'

class LastJobData extends Component {
  state = {  } 
  render() { 
    return (
      <fieldset>
        <legend>Dados do Último Emprego</legend>
        <Curriculum setData={this.props.setData} />
        <Office setData={this.props.setData} />
        <Description setData={this.props.setData} />
      </fieldset>
    );
  }
}
 
export default LastJobData;