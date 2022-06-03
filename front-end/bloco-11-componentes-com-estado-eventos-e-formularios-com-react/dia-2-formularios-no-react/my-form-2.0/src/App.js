import { Component } from "react";
import LastJobData from "./components/LastJobData";
import PersonalData from "./components/PersonalData";
import VisualForm from "./VisualForm";

  const initialState = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    home: '',
    curriculum: '',
    office: '',
    description: '',
    subbmited: false,
  }

  class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  setData = ({ target }) => {
    if(target.name === 'city') {
      if(Number(target.value[0])) {
      target.value = '';
      alert('O nome da Cidade não pode começar com um número!')
    }
    }
    this.setState(() => ({[target.name]: target.value}));
  }

  show = (event) => {
    event.preventDefault()
    this.setState({subbmited: true})
  }

  reset = () => {
    this.setState(initialState)
  }

  render() {
   return (
    <form>
      <h1>Hello World</h1>
      <PersonalData setData={this.setData} />
      <LastJobData setData={this.setData} />
      <div id="buttons">
        <button onClick={this.show} id="submmit">Submmit</button>
        <button type="reset" onClick={this.reset} id="reset">Resetar</button>
      </div>
      {this.state.subbmited && <VisualForm create={this.state} />}
    </form>
  );
 }
}

export default App;
