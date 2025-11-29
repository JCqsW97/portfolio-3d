import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import usePageVisibility from "./components/usePageVisibility";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";

import ScrollToTop from "./components/ScrollToTop";

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
    <ScrollToTop />
  </div>
  );
};

export default App;