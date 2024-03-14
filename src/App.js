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
import MemoryGame from "./components/games/memorycard/MemoryGame";
import CreateCharacter from "./components/games/cash-quest/cash-quest/CreationContainer";
//navbar
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Snakegame" element={<Snakegame />} />
      <Route path="CashQuest" element={<CreateCharacter />} />
      <Route path="Flappybird" element={<Flappygame />} />
      <Route path="Memorycard" element={<MemoryGame />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
