import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";

function App() {
  return (
    <>
    <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
    </>
  );
}

export default App;
