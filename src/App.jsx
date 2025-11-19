import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import usePageVisibility from "./components/usePageVisibility";

const App = () => {

  usePageVisibility();

  return <div className="container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Experiences />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>;
};

export default App;