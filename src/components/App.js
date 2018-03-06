import React, { Component } from 'react';
import logo from '../favicon.ico';
import Counters from './Counters';
import Filter from './Filter';
import Playlists from './Playlists';
import '../App.css';

class App extends Component {
  render() {
    let user = "Ricardo"
    let user2 = "Marina"

    const {
        appHeader,
        fontSize,
        app,
        h1
    } = styles;

    return (
      <div>
        <div style={appHeader}>
          <img src={logo} className="App-logo" />
          <h1 style={h1}>Sounds Like {user} & {user2} match:</h1>
      </div>
        <div>
            <Filter />
            <Counters>Artists:</Counters>
            <Counters>Hours:</Counters>
        </div>
        <div>
            <Playlists />
            <Playlists />
            <Playlists />
            <Playlists />
        </div>
      </div>
    );
  }
}

const styles = {
    appHeader: {
      backgroundColor: '#34443f',
      height: 180,
      padding: 20,
      color: 'white'
    },
    h1: {
        fontSize: '1.5em',
        color: '#47d23b',
        fontSize: '10'
    }
}

export default App;
