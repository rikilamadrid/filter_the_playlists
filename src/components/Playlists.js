import React, { Component } from 'react';

class Playlists extends Component {
    render() {
        const {
            playlistsStyle
        } = styles;

        const {
            name,
            songs
        } = this.props.playlists;

        return (
            <div>
                <img />
                <h3 styles={playlistsStyle}>{name}</h3>
                <ul>
                    {songs.map(song =>
                        <li>{song.name}</li>
                    )}
                </ul>
            </div>
        );
    }
};

const styles = {
    playlistsStyle: {
        display: 'inline-block',
        width: "33%",
        'margin-bottom': '20px',
        'font-size': '20px',
        'line-height': '30px',
        'font-family': 'Quicksand',
        'text-align': 'center'
    }
};

export default Playlists;
