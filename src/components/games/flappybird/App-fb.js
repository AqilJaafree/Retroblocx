import React, { Component } from 'react';
import Restart from './popup.js';
import hitSound from './buzz.wav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      life: 5,
      isGameOver: false,
      score: 0,
      isGlitching: false,
      isHitObstacle: false,
      hitAudio: new Audio(hitSound),
    };
  }

  componentDidMount() {
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground-moving');

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 3;
    let gap = 430;

    const startGame = () => {
      birdBottom -= gravity;
      bird.style.bottom = birdBottom + 'px';
      bird.style.left = birdLeft + 'px';
      if (birdBottom === 1) {
        this.setState(prevState => ({
          life: prevState.life - 5,
          hasHitObstacle: true, 
          isHitObstacle: true,
          isGlitching: true,
        }));
        gameOver();
      }
    };
    let gameTimerId = setInterval(startGame, 20);

    const control = (e) => {
      if (e.keyCode === 32) {
        jump();
      }
    };

    const jump = () => {
      if (birdBottom < 500) birdBottom += 50;
      bird.style.bottom = birdBottom + 'px';
    };
    document.addEventListener('keyup', control);

    const generateObstacle = () => {
      let obstacleLeft = 500;
      let randomHeight = Math.random() * 60;
      let obstacleBottom = randomHeight;
      const obstacle = document.createElement('div');
      const topObstacle = document.createElement('div');
      if (!this.state.isGameOver){
        obstacle.classList.add('obstacle');
        topObstacle.classList.add('topObstacle');
      }
      gameDisplay.appendChild(obstacle);
      gameDisplay.appendChild(topObstacle);
      obstacle.style.left = obstacleLeft + 'px';
      topObstacle.style.left = obstacleLeft + 'px';
      obstacle.style.bottom = obstacleBottom + 'px';
      topObstacle.style.bottom = obstacleBottom + gap + 'px';

      const moveObstacle = () => {
        obstacleLeft -= 2;
        obstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.left = obstacleLeft + 'px';

        if(obstacleLeft === -60){
          clearInterval(timerId);
          gameDisplay.removeChild(obstacle);
          gameDisplay.removeChild(topObstacle);
        }
        if (obstacleLeft === 180) { 
          this.setState(prevState => ({
            score: prevState.score + 1 
          }));
        }
        if(
          (obstacleLeft > 200 && obstacleLeft < 280 
          && birdLeft === 220 && 
          (birdBottom < obstacleBottom + 153 
          || birdBottom > obstacleBottom + gap - 200)) 
          || birdBottom === 1
        )
        {
          if (!this.state.hasHitObstacle) { 
            this.state.hitAudio.play();
            this.setState(prevState => ({
              life: prevState.life - 1,
              hasHitObstacle: true, 
              isHitObstacle: true,
              isGlitching: true,
            }));
            setTimeout(() => {
              this.setState({ hasHitObstacle: false });
            }, 5000);
            setTimeout(() => {
              this.setState({ isGlitching: false });
            }, 2000);
          }
        } else {
          this.setState({ hasHitObstacle: false }); 
        }
          if (this.state.life === 0) {
            gameOver();
            clearInterval(timerId);
        }
      };
      let timerId = setInterval(moveObstacle, 20);
      if (!this.state.isGameOver) setTimeout(generateObstacle, 3000);
    };
    generateObstacle();

    const gameOver = () => {
      clearInterval(gameTimerId);
      console.log('game over');
      this.setState({ isGameOver: true });
      document.removeEventListener('keyup', control);
      ground.classList.add('ground');
      ground.classList.remove('ground-moving');
    };
  }

  render() {
    const { isGlitching } = this.state;
    return (
      <div>
        <div className="border-left"></div>
        <div className="game-container">
          <div className="border-top"></div>
          <div className="sky">
            <div className="score">Score: {this.state.score}</div>
            <div className="life">Life: {this.state.life}</div>
            <div className={`bird ${isGlitching ? 'glitch-effect' : ''}`}></div>
          </div>
          {this.state.isGameOver && (
            <div className="game-over">
              <Restart />
            </div>
          )}
        </div>
        <div className="border-right"></div>
        <div className="ground-container">
          <div className="ground-moving"></div>
        </div>
      </div>
    );
  }
}
