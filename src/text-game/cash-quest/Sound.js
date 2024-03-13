import React, { Component } from 'react';
import sound from './audio/LabyrinthCut.mp3';

class BackgroundAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true // Initial state set to play audio
    };
    this.audioRef = React.createRef();
    this.toggleAudio = this.toggleAudio.bind(this);
  }

  toggleAudio() {
    const audio = this.audioRef.current;
    if (audio.paused) {
      audio.play();
      this.setState({ isPlaying: true });
    } else {
      audio.pause();
      this.setState({ isPlaying: false });
    }
  }

  render() {
    return (
      <div>
        <audio ref={this.audioRef} src={sound} type='audio/mp3' autoPlay loop />
          {this.state.isPlaying ? 'Pause Audio' : 'Play Audio'}
      </div>
    );
  }
}

export default BackgroundAudio;
