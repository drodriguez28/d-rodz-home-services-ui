import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import { Painting } from "./components/Painting";
import { ContactUs } from "./components/ContactUs";
import { Electrical } from "./components/Electrical";
import FooterFlowbite from "./reuse/FooterFlowbite";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/painting" element={<Painting />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <FooterFlowbite />
      </div>
    </Router>
  );
}

export default App;