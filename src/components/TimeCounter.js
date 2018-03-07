import React, { Component } from 'react';

class TimeCounter extends Component {
    render() {
        const {
            playlists
        } = this.props;

        const {
            countersStyle
        } = styles;

        return (
            <div style={countersStyle}>
                <h2>{playlists} hours</h2>
            </div>
        );
    }
};

const styles = {
    countersStyle: {
        display: 'inline-block',
        width: "33%",
        'margin-bottom': '20px',
        'font-size': '20px',
        'line-height': '30px',
        'font-family': 'Quicksand',
        'text-align': 'center'
    }
};

export default TimeCounter;
