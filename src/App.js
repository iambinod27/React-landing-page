import React from "react";
import Header from "./Components/Header";
import Features from "./Components/Features";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import aboutImage from "./images/Frame19.png";
import aboutImage1 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <About
        image={aboutImage}
        title="Comes With All You Need For Daily Life"
        button="Get The App"
      />
      <Presentation />
      <About
        image={aboutImage1}
        title="Download And Get The App Now"
        button="Download"
      />
      <Contact />
    </div>
  );
}

export default App;
