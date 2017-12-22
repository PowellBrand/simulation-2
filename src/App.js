import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      //42E
      <div className="App">
        <nav>
          <div> Route testing</div>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>dashboard</Link>
          <Link to='/wizard1'>wizard1</Link>
          <Link to='/wizard2'>wizard2</Link>
          <Link to='/wizard3'>wizard3</Link>
          <Link to='/wizard4'>wizard4</Link>
          <Link to='/wizard5'>wizard5</Link>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
