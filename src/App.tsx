import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Values from "./components/Values/Values";
import Booking from "./components/Booking/Booking";
import EasterEgg from "./components/EasterEgg/EasterEgg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Values />
      <Booking />
      <EasterEgg />
    </React.Fragment>
  );
}

export default App;
