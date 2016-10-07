import React, { Component } from 'react';
import config from './data.json';

import styles from './Greeting.css';

class Greeter extends Component {
    render() {
        return (
            <div className={ styles.root }>{ config.greetText }</div>                            
        );
    }
}

export default Greeter;
