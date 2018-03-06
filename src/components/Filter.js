import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const {
            input
        } = styles;

        return (
            <div>
                <img />
                Filter: <input style={input} type="text" />
            </div>
        )
    }
};

const styles = {
    input: {
        display: 'inline-block',
        width: "33%",
        'margin-bottom': '20px',
        'font-size': '20px',
        'line-height': '30px',
        'font-family': 'Quicksand',
        'text-align': 'center'
    }
};

export default Filter;
