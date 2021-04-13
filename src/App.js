import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    nomeUtente: 'marco',
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState( {nomeUtente: e.target.value});
  }


render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
     
      </header>
      <main>
        
        <UserOutput change={this.handleChange} nome={this.state.nomeUtente} />
      </main>
    </div>
  );

}
  
}

export default App;
