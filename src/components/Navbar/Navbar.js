import React from 'react'
import "./Header.css";
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Snakegame">Snake Game</NavLink>
            </li>
            <li>
              <NavLink to="Flappybird">Flappy Bird</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}