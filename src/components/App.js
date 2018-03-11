import React, { Component } from 'react';
import logo1 from '../favicon.ico';
import logo2 from '../misiks.png';
import ListCounter from './ListCounter';
import TimeCounter from './TimeCounter';
import Playlists from './Playlists';
import '../App.css';

class App extends Component {
    constructor() {
        super();
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
            titleStyle1,
            titleStyle2,
            pickle,
            input,
            icon,
            userStyle
        } = styles;

        const {
            user1,
            user2
        } = this.state.serverData;

        let filteredPlaylists1 = user1.playlists
            .filter(playlist =>
                playlist.name.toLowerCase().includes(
                    this.state.filterInput.toLowerCase())
        );

        let totalSongs1 = filteredPlaylists1.reduce((songs, eachPlaylists) => {
            return songs.concat(eachPlaylists.songs)
        }, []);

        let totalTime1 = totalSongs1.reduce((sum, totalSongs1) => {
            return Math.round(sum + totalSongs1.duration/3600)
        }, 0);

        // --------------------data manipulation user2----------------------------------------

        let filteredPlaylists2 = user2.playlists
            .filter(playlist =>
                playlist.name.toLowerCase().includes(
                    this.state.filterInput.toLowerCase())
        );

        let totalSongs2 = filteredPlaylists2.reduce((songs, eachPlaylists) => {
            return songs.concat(eachPlaylists.songs)
        }, []);

        let totalTime2 = totalSongs2.reduce((sum, totalSongs2) => {
            return Math.round(sum + totalSongs2.duration/3600)
        }, 0);

        let matchTime = (totalTime1 === totalTime2 && totalTime1 > 0);

        let title = () => {
            if (matchTime) {
                return <h1 style={titleStyle2}>Sounds like a match :) !</h1>;
            } else {
                return <h1 style={titleStyle1}>What kind of music do you like?</h1>
            }
        };

        let logo = () => {
            if (matchTime) {
                return <img src={logo2} className="App-logo" />
            } else {
                return <img src={logo1} className="App-logo" />
            }
        }

        let onChange = text => {this.setState({filterInput: text})};

        return (
            <div>
                <div style={appHeader}>
                  {logo()}
                  {title()}
                  <div>
                      <i style ={icon} class="fas fa-search"><img/></i>
                      <input
                          placeholder={"search for the match:"}
                          style={input}
                          type="text"
                          onKeyUp={event => onChange(event.target.value)}
                      />
                  </div>
                </div>
                <div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ListCounter playlists={filteredPlaylists1.length} />
                        <h2 style={userStyle}>{user1.name}'s music:</h2>
                        <TimeCounter playlists={totalTime1}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {filteredPlaylists1.map(playlist =>
                                <Playlists playlists={playlist} />
                        )}
                    </div>

                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <ListCounter playlists={filteredPlaylists2.length} />
                        <h2 style={userStyle}>{user2.name}'s music:</h2>
                        <TimeCounter playlists={totalTime2}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        {filteredPlaylists2.map(playlist =>
                                <Playlists playlists={playlist} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

let fakeServerData = {
    user1: {
        name: 'Ricardo',
        playlists: [
            {
                name: 'Latin',
                songs: [
                    {name: 'Surfer Calavera', duration: 2631},
                    {name: 'Muerte en hawaii', duration: 2253},
                    {name: 'Música Ligera', duration: 4316}
                ]
            },
            {
                name: 'Rock and Roll',
                songs: [
                    {name: 'Sympathy for the devil', duration: 6666},
                    {name: 'Confortably numb', duration: 3152},
                    {name: 'Drive My Car', duration: 4457}
                ]
            },
            {
                name: 'Classical',
                songs: [
                    {name: 'Mozart', duration: 6492},
                    {name: 'Beethoven', duration: 3554},
                    {name: 'Chopin', duration: 3321}
                ]
            },
            {
                name: 'Soundtracks',
                songs: [
                    {name: 'Shape of Water', duration: 7452},
                    {name: 'Amelie', duration: 9777},
                    {name: 'Interstellar', duration: 8888}
                ]
            }
        ]
    },
    user2: {
        name: 'Marina',
        playlists: [
            {
                name: 'Heavy Metal',
                songs: [
                    {name: 'Crazy Train', duration: 6767},
                    {name: 'Highway ti Heaven', duration: 7676},
                    {name: 'Chop Suey', duration: 8686}
                ]
            },
            {
                name: 'Latin',
                songs: [
                    {name: 'Surfer Calavera', duration: 2631},
                    {name: 'Muerte en hawaii', duration: 2253},
                    {name: 'Música Ligera', duration: 4316}
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
                name: 'Reggae',
                songs: [
                    {name: 'Three Little Birds', duration: 7887},
                    {name: 'Pupilas Lejanas', duration: 6659},
                    {name: 'Welcome to Jamrock', duration: 8117}
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
      padding: 40,
      color: 'white',
      'text-align': 'center'
    },
    titleStyle1: {
        fontSize: '1.5em',
        color: '#47d23b',
        fontSize: '10'
    },
    titleStyle2: {
        fontSize: '1.5em',
        color: '#ff006d',
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
        'padding-right': '15px'

    },
    userStyle: {
        fontSize: '1.5em',
        color: '#47d23b',
        fontSize: '10'
    }
};

export default App;
