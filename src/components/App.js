import React, { Component } from 'react';
import logo from '../favicon.ico';
import ListCounter from './ListCounter';
import TimeCounter from './TimeCounter';
import Filter from './Filter';
import Playlists from './Playlists';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {serverData: {}}
    }

    componentWillMount() {
        this.setState({ serverData: fakeServerData });
    }

    render() {
        const {
            appHeader,
            app,
            userStyle
        } = styles;

        const {
            name,
            playlists
        } = this.state.serverData.user;

        let totalSongs = playlists.reduce((songs, eachPlaylists) => {
            return songs.concat(eachPlaylists.songs)
        }, []);

        let totalTime = totalSongs.reduce((sum, totalSongs) => {
            return Math.round(sum + totalSongs.duration/3600)
        }, 0);

        return (
            <div>
                <div style={appHeader}>
                  <img src={logo} className="App-logo" />
                  <h1 style={userStyle}>Sounds Like {name}'s playlist:</h1>
                </div>
                <div>
                    <Filter />
                    <ListCounter playlists={playlists.length} />
                    <TimeCounter playlists={totalTime}/>
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
};

let fakeServerData = {
    user: {
        name: 'Ricardo',
        playlists: [
            {
                name: 'Mis favoritas',
                songs: [
                    {name: 'Surfer Calavera', duration: 2631},
                    {name: 'Muerte en hawaii', duration: 8253},
                    {name: 'Música Ligera', duration: 2216}
                ]
            },
            {
                name: 'All about rock',
                songs: [
                    {name: 'Sympathy for the devil', duration: 6666},
                    {name: 'Confortably numb', duration: 3152},
                    {name: 'Drive My Car', duration: 4457}
                ]
            },
            {
                name: 'Electronic love',
                songs: [
                    {name: 'One more time', duration: 6428},
                    {name: '9 am', duration: 9191},
                    {name: 'Porcelain', duration:3333}
                ]
            }
        ]
    }
};

const styles = {
    appHeader: {
      backgroundColor: '#34443f',
      height: 180,
      padding: 20,
      color: 'white'
    },
    userStyle: {
        fontSize: '1.5em',
        color: '#47d23b',
        fontSize: '10'
    }
};

export default App;
