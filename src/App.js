import React from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ObjectiveSection from "./components/ObjectiveSection";
import SignificanceSection from "./components/SignificanceSection";
import FutureWorksSection from "./components/FutureWorksSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ObjectiveSection />
      <SignificanceSection />
      <KeyFeaturesSection />
      <FutureWorksSection />

      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
