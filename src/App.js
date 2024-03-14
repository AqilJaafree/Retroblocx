import React from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";  
import Home from "../src/components/pages/Home"
import Snakegame from "../src/components/games/Snakegame/Snakegame";
//navbar
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Snakegame" element={<Snakegame />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
