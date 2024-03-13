import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";  
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import SnakeGame from "./components/games/Snakegame/SnakeGame";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </Router>
  );
}

export default App;
