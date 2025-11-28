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

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";

const App = () => {

  usePageVisibility();

  return (
  <div className="container mx-auto max-w-7xl flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-1">
      <Routes >
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
    <div className="">
      <Footer />
    </div>
  </div>
  );
};

export default App;