import React, { Component } from "react";
import './flappygame.css';
import gameOverImage from './restart.png';
import gameOverSound from './play.wav'; 

export class Restart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameOverAudio: new Audio(gameOverSound) 
        };
    }

    handleRestart = () => {
        this.state.gameOverAudio.play(); 
        setTimeout(() => {
            window.location.reload(); 
        }, 800); 
    };
    
    render() {
        return (
            <div className="game-over-container" onClick={this.handleRestart}>
                <img src={gameOverImage} alt="Game Over" />
            </div>
        );
    }
}

export default Restart;

