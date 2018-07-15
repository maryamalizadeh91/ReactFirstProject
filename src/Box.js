import React from 'react';
import './Box.css';

class Box extends React.Component {
    render()
    {
        return (
            <div>
                <div className="Box1">{this.props.box1}</div>
                <div className="Box2">{this.props.box2}</div>
                <div className="Box3">{this.props.box3}</div>
            </div>
            
        );
    }
}

export default Box;