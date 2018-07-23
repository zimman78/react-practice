import React, { Component } from 'react';
import './App.css';
import HelloUser from './components/helloUser'
import FriendsContainer from './components/friendsContainer'
// import ShowList from './components/showList'
// import AddFriend from './components/addFriend'


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
