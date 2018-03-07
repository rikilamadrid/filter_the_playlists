import React, { Component } from 'react';
import logo from '../favicon.ico';

class Filter extends Component {

    render() {
        const {
            input,
            icon
        } = styles;

        const {
            onChange
        } = this.props;

        return (
            <div>
                <i style ={icon} class="fas fa-search"> <img/></i>
                <input
                    style={input}
                    type="text"
                    onKeyUp={event => onChange(event.target.value)}
                />

            </div>
        )
    }
};

const styles = {
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

export default Filter;
