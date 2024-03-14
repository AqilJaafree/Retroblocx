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
              <NavLink to="/">
                <img src="../img/logo.png" alt="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Snakegame">Snake Game</NavLink>
            </li>
            <li>
              <NavLink to="Flappybird">Flappy Bird</NavLink>
            </li>
            <li>
              <NavLink to="Memorycard">Memory Card</NavLink>
            </li>
            <li>
              <NavLink to="CashQuest">Cash Quest</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}