import React from 'react';
import Footer from './Footer';
import './App.css';
import Content from './Content';
import Header from './Header';

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    )
  }
}

export default App;
