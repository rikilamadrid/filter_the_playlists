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
}

const styles = {
    input: {
        color: '#fff'
    }
}

export default Filter;
