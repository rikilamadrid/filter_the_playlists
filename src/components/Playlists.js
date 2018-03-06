import React, { Component } from 'react';

class Playlists extends Component {
    render() {
        const {
            playlistsName
        } = styles;

        return (
            <div>
                <img />
                <h3 styles={playlistsName}>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        );
    }
}

const styles = {
    playlistsName: {
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
