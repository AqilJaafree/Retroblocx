import React, {Component} from 'react';
import './index.css';

export class Exit extends Component {
    exitGame = () => {
        window.location.reload();
    };

    render(){
        return (
            <div className="exit-button-container">
              <button onClick={this.exitGame}>Exit Game</button>
            </div>
          );
    }
};

export default Exit;
