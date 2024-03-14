import React from 'react'
import './Body.css';
import { NavLink } from "react-router-dom";
import snakeapple from "../assets/snakeapple.png"
const Body = () => {
  return (
    <div className="body">
      <div className="image-container">
        <NavLink to="Snakegame" className="image-navgame1">
          <a
            href=""
            className="snakegame"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snake game
            <img
              className="snakegame-image"
              src={snakeapple}
              alt="Snake game"
            />
          </a>
        </NavLink>
      </div>
    </div>
  );
}

export default Body
