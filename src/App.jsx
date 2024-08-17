import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
