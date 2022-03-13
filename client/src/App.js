import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, BadURL404 } from "./pages";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="*" element={<BadURL404 />}  />
      </Routes>  
    </div>
  );
}

export default App;
