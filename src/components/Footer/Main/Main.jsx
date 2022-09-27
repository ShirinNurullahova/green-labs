import React, { Component } from 'react';

import Drag from '../Drag/Drag';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        }
    }

    _showDialog() {
        this.setState({ showDialog: !this.state.showDialog });
    }

    render() {

        return (
            <div className='MainApp'>
                <Drag show={this.state.showDialog} />
            </div>

        );
    }
}