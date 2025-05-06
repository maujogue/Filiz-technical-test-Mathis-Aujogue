import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Values from "./components/Values/Values";
import Booking from "./components/Booking/Booking";
import EasterEgg from "./components/EasterEgg/EasterEgg";
import "./App.css";

function App() {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "1.5rem" }}>
      <Header />
      <Hero />
      <About />
      <Values />
      <Booking />
      <EasterEgg />
    </div>
  );
}

export default App;
