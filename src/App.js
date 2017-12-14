import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import ContactList from './components/ContactList';

class App extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users")
          .then(response => {
            const newContacts = response.data.map(c => {
              return {
                id: c.id,
                name: c.name
              };
            });

            const newState = Object.assign({}, this.state, {contacts: newContacts});

            this.setState(newState);
          })
          .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contacts Manager</h1>
        </header>

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
