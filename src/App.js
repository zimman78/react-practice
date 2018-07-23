import React, { Component } from 'react';
import './App.css';
import HelloUser from './components/helloUser'
import FriendsContainer from './components/friendsContainer'


class App extends Component {
  render() {
    return (
      <div>
        <HelloUser />
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
