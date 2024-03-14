import React from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";  
import Home from "../src/components/pages/Home"
import Snakegame from "./components/games/Snakegame/Snakegame";
import Flappygame from "./components/games/flappybird/Flappygame";
//navbar
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Snakegame" element={<Snakegame />} />
      <Route path="Flappybird" element={<Flappygame />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
