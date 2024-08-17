import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <>
    <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Project />
      <ContactMe />
    </>
  );
}

export default App;
