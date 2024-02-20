import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Room />} path="/room/:roomId" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
