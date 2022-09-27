import React, { Component } from 'react';
import '../Drag/Drag.css'
import drag from '../../Images/drag.svg'
export default class Drag extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
          
            dragging: false,
            styles: {}
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            dragging: true
        });
    }

    _dragging(e) {

        if(this.state.dragging) {
            var left = e.screenX - this.state.diffX;
    
            this.setState({
                styles: {
                    left: left,
                }
            });
        }
    }    

    _dragEnd() {
        this.setState({
            dragging: false
        });
    }

    render() {
        var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
        return (
            <p className={classes} style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                   <img className='dragg' src={drag}/>
               
            </p>
            
        );
    }
}