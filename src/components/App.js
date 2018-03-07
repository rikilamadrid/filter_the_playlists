import React, { Component } from 'react';
import logo from '../favicon.ico';
import ListCounter from './ListCounter';
import TimeCounter from './TimeCounter';
import Playlists from './Playlists';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serverData: {},
            filterInput: ''
        }
    }

    componentWillMount() {
        this.setState({ serverData: fakeServerData });
    }

    render() {
        const {
            appHeader,
            app,
            userStyle,
            pickle,
            input,
            icon
        } = styles;

        const {
            name,
            playlists
        } = this.state.serverData.user;

        let filteredPlaylists = playlists
            .filter(playlist =>
                playlist.name.toLowerCase().includes(
                    this.state.filterInput.toLowerCase())
        );

        let totalSongs = filteredPlaylists.reduce((songs, eachPlaylists) => {
            return songs.concat(eachPlaylists.songs)
        }, []);

        let totalTime = totalSongs.reduce((sum, totalSongs) => {
            return Math.round(sum + totalSongs.duration/3600)
        }, 0);

        let onChange = text => {this.setState({filterInput: text})}

        return (
            <div>
                <div style={appHeader}>
                  <img src={logo} className="App-logo" />
                  <h1 style={userStyle}>Sounds Like {name}'s playlist:</h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ListCounter playlists={filteredPlaylists.length} />
                    <div>
                        <i style ={icon} class="fas fa-search"> <img/></i>
                        <input
                            placeholder={"sounds like a match:"}
                            style={input}
                            type="text"
                            onKeyUp={event => onChange(event.target.value)}
                        />
                    </div>
                    <TimeCounter playlists={totalTime}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {filteredPlaylists.map(playlist =>
                            <Playlists playlists={playlist} />
                    )}
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
            },
            {
                name: 'Reggaeton',
                songs: [
                    {name: 'Dale', duration: 2554},
                    {name: 'Gasolina', duration: 3671},
                    {name: 'Para que retozen', duration: 5555}
                ]
            },
            {
                name: 'Soundtracks',
                songs: [
                    {name: 'Shape of Water', duration: 7452},
                    {name: 'Amelie', duration: 9777},
                    {name: 'Interstellar', duration: 8888}
                ]
            },
            {
                name: 'Classical',
                songs: [
                    {name: 'Mozart', duration: 6492},
                    {name: 'Beethoven', duration: 3554},
                    {name: 'Chopin', duration: 3321}
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
      color: 'white',
      'text-align': 'center'
    },
    userStyle: {
        fontSize: '1.5em',
        color: '#47d23b',
        fontSize: '10'
    },
    pickle: {
        'text-align': 'center',
        display: 'inline-block',
    },
    input: {
        color: 'black',
        border: '1px solid black',
        'font-size': '12px',
        padding: '5px',
        'justifyContent': 'center',
        'font-family': 'Quicksand'
    },
    icon: {
        'margin-top': '30px',
        'padding-top': '10px',
        'padding-right': '15px'

    }
};

export default App;
