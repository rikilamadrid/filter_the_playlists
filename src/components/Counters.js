import React, {Component } from 'react';

const Counters = ({ children }) => { //passing children as props to make component reusable. Parent component will make use of it
    const {
        h2
    } = styles;

    return (
        <div>
            <h2 style={h2}>{children}</h2>
        </div>
    );
};

const styles = {
    h2: {
        display: 'inline-block',
        width: "33%",
        'margin-bottom': '20px',
        'font-size': '20px',
        'line-height': '30px',
        'font-family': 'Quicksand',
        'text-align': 'center'
    }
};

export default Counters;
